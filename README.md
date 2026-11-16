# SONNAR — Caça Vazamentos

Landing page institucional e comercial da SONNAR.

## Stack
- React 18 + TypeScript
- Vite 6
- Lucide React
- CSS organizado por seção, com estilos globais reservados para tokens, tipografia, reset e utilitários compartilhados

## Estrutura
```text
public/                         Arquivos estáticos, logos, 404, robots e sitemap
src/
  components/                   Componentes reutilizáveis (ex.: ContactLink)
  data/                         Conteúdo institucional e dados das seções
  hooks/                        Hooks compartilhados (animações e comportamento)
  layout/                       Componentes de estrutura global (Header e Footer)
  sections/
    Hero/                       Componente e estilos da abertura
    Services/                   Componente e estilos dos serviços
    Diagnosis/                  Componente e estilos do diagnóstico
    Process/                    Componente e estilos do processo
    About/                      Componente e estilos institucionais
    Coverage/                   Componente e estilos da cobertura
    Contact/                    Componente e estilos de contato
  styles/global.css             Tokens, reset, tipografia e utilitários globais
  App.tsx                       Composição das seções
  main.tsx                      Bootstrap React
scripts/                        Verificações do artefato de produção
.github/workflows/              Validação e publicação
```

## Responsabilidades
- **App.tsx:** apenas compõe layout e seções; não contém conteúdo de negócio nem regras de apresentação.
- **sections/**: cada seção mantém seu JSX e sua folha CSS no mesmo diretório. Os seletores legados foram preservados para evitar alterações visuais durante a refatoração.
- **data/**: textos, serviços, etapas e valores institucionais ficam fora da camada visual.
- **components/**: elementos reutilizáveis que podem ser usados por mais de uma seção.
- **hooks/**: lógica de comportamento isolada da composição visual.
- **styles/global.css:** estilos compartilhados e tokens; não deve receber regras exclusivas de uma seção.

## Desenvolvimento
```bash
npm install
npm run dev
npm run build
npm run verify:build
npm run preview
```

## Publicação
- Pull requests para `main` executam build e validações, sem publicar o site.
- Push na branch `main` executa build, valida o artefato e publica no GitHub Pages.
- As execuções não cancelam deploys concorrentes automaticamente; isso evita interromper uma publicação em andamento. Agrupe alterações relacionadas em um único commit para reduzir builds redundantes.
- A origem do GitHub Pages deve permanecer configurada como **GitHub Actions**.

## SEO e domínio
O domínio canônico é `https://www.sonnarcacavazamentos.com.br/`, alinhado ao arquivo `public/CNAME`, ao sitemap e ao robots.txt.

## Limites conhecidos
- GitHub Pages/CDN controla os cabeçalhos HTTP de cache; o repositório não define `Cache-Control` customizado.
- A página permanece em uma única rota para não depender de fallback avançado de SPA.
- Animações respeitam `prefers-reduced-motion` e têm fallback sem IntersectionObserver.

## Checklist comercial
- [ ] Validar telefone/WhatsApp e responsável pelo atendimento.
- [ ] Confirmar lista de serviços, técnicas/equipamentos e limites de cada atendimento.
- [ ] Confirmar municípios, bairros, horários, preço de visita, formas de pagamento e política de cancelamento.
- [ ] Confirmar se realiza reparos e se emite laudo; não anunciar sem validação.
- [ ] Trocar ilustrações por fotos próprias/autorizadas de equipamentos, equipe e atendimentos.
- [ ] Inserir depoimentos e casos reais somente com autorização dos clientes.
- [ ] Informar razão social/CNPJ, endereço comercial e política de privacidade, se aplicável.
- [ ] Configurar Google Search Console e Perfil da Empresa no Google.
- [ ] Executar testes em dispositivos reais e validar Core Web Vitals após publicação.

## Conteúdo
A comunicação evita promessas absolutas. Serviços, equipamentos, cobertura, laudos, garantias e preços precisam ser confirmados pela operação antes de serem anunciados.
