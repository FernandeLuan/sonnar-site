# SONNAR — Caça Vazamentos

Landing page institucional e comercial da SONNAR.

## Stack
- React 18 + TypeScript
- Vite 6
- Lucide React
- CSS Modules nos componentes compartilhados e CSS global para tokens/base e seções da página

## Estrutura
```
public/                 Arquivos estáticos, logo, 404, robots e sitemap
src/
  components/           Header e Footer reutilizáveis
  App.tsx               Composição e conteúdo da landing page
  index.css             Tokens, estilos globais e seções da página
  main.tsx              Bootstrap React
.github/workflows/      Build e deploy do GitHub Pages
```

## Desenvolvimento
```bash
npm install
npm run dev
npm run build
npm run preview
```

## Deploy
Push na branch `main` dispara GitHub Actions. O workflow compila e publica `dist/` no GitHub Pages. A origem do Pages deve permanecer configurada como **GitHub Actions**.

## Decisões técnicas e limites da hospedagem
- O build gera assets versionados pelo Vite; nomes com hash permitem cache eficiente dos arquivos estáticos.
- GitHub Pages/CDN controla os cabeçalhos HTTP de cache. Este repositório não configura `Cache-Control` customizado; para isso será necessário um host/CDN com controle de headers.
- `public/404.html` fornece uma página de erro estática. GitHub Pages não oferece roteamento SPA avançado; manter a landing page em uma única rota evita dependência de fallback de rotas.
- Não foi adicionado skeleton: o conteúdo é estático e não depende de chamadas de API. Reservar espaço para imagens e otimizar assets é mais apropriado do que simular carregamento.
- Animações de entrada respeitam `prefers-reduced-motion` e têm fallback quando IntersectionObserver não está disponível.

## Checklist de publicação comercial
- [ ] Validar telefone/WhatsApp e responsável pelo atendimento.
- [ ] Confirmar lista de serviços, técnicas/equipamentos e limites de cada atendimento.
- [ ] Confirmar municípios, bairros, horários, preço de visita, formas de pagamento e política de cancelamento.
- [ ] Confirmar se realiza reparos e se emite laudo; não anunciar sem validação.
- [ ] Trocar as imagens ilustrativas por fotos próprias/autorizadas dos equipamentos, equipe e atendimentos.
- [ ] Inserir depoimentos e casos reais somente com autorização dos clientes.
- [ ] Informar razão social/CNPJ, endereço comercial e política de privacidade, se aplicável.
- [ ] Configurar domínio próprio e Google Search Console/Perfil da Empresa no Google.
- [ ] Executar testes em dispositivos reais e validar Core Web Vitals após publicação.

## Importante
A copy evita promessas absolutas. Serviços, equipamentos, cobertura, laudos, garantias e preços precisam ser confirmados pela operação antes de serem anunciados.
