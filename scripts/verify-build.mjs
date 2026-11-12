import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
const root = 'dist'
const required = ['index.html', '404.html', 'robots.txt', 'sitemap.xml', 'sonnar-logo.svg']
const missing = required.filter(file => !existsSync(join(root, file)))
if (missing.length) { console.error('Arquivos ausentes no build:', missing.join(', ')); process.exit(1) }
const html = readFileSync(join(root, 'index.html'), 'utf8')
if (!html.includes('<title>SONNAR') || !html.includes('name="description"')) { console.error('Metadados essenciais ausentes no index.html'); process.exit(1) }
const assets = readdirSync(join(root, 'assets'))
if (!assets.some(file => file.endsWith('.js')) || !assets.some(file => file.endsWith('.css'))) { console.error('Bundle JS/CSS não encontrado'); process.exit(1) }
console.log('Artefato validado: HTML, metadados, 404, robots, sitemap, logo e bundles presentes.')
