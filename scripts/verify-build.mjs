import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'

const root = 'dist'
const required = ['index.html', '404.html', 'robots.txt', 'sitemap.xml', 'sonnar-logo.svg', 'sonnar-logo-dark.webp', 'favicon.svg']
const missing = required.filter((file) => !existsSync(join(root, file)))
if (missing.length) {
  console.error('Arquivos ausentes no build:', missing.join(', '))
  process.exit(1)
}

const html = readFileSync(join(root, 'index.html'), 'utf8')
const checks = [
  ['título', /<title>SONNAR/.test(html)],
  ['descrição', /name="description"/.test(html)],
  ['canonical do domínio oficial', /canonical" href="https:\/\/www\.sonnarcacavazamentos\.com\.br\//.test(html)],
  ['favicon SVG', /rel="icon" type="image\/svg\+xml" href="\/favicon\.svg"/.test(html)],
]
const failed = checks.filter(([, passed]) => !passed).map(([name]) => name)
if (failed.length) {
  console.error('Validações de metadados falharam:', failed.join(', '))
  process.exit(1)
}

const assetsDir = join(root, 'assets')
if (!existsSync(assetsDir)) {
  console.error('Diretório de assets não encontrado')
  process.exit(1)
}
const assets = readdirSync(assetsDir)
if (!assets.some((file) => file.endsWith('.js')) || !assets.some((file) => file.endsWith('.css'))) {
  console.error('Bundles JS/CSS não encontrados')
  process.exit(1)
}

const walk = (directory) => readdirSync(directory).flatMap((name) => {
  const path = join(directory, name)
  return statSync(path).isDirectory() ? walk(path) : [path]
})
const htmlFiles = walk(root).filter((path) => path.endsWith('.html'))
for (const path of htmlFiles) {
  const content = readFileSync(path, 'utf8')
  if (/src="\/(?:assets|src)\//.test(content) || /href="\/(?:assets|sonnar)/.test(content)) {
    console.error('Referência absoluta pode quebrar no GitHub Pages:', relative(root, path))
    process.exit(1)
  }
}

console.log('Artefato validado: arquivos públicos, SEO, canonical, favicon, bundles e caminhos compatíveis com GitHub Pages.')
