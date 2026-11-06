# SONNAR — Caça Vazamentos

Site institucional responsivo da SONNAR, com foco em apresentar os serviços de inspeção técnica e facilitar o contato pelo WhatsApp.

## Stack
- React + TypeScript
- Vite
- Lucide React
- CSS modular por componente/seção (diretriz de arquitetura)

## Desenvolvimento local
```bash
npm install
npm run dev
```

## Build de produção
```bash
npm run build
npm run preview
```

## Publicação — GitHub Pages
O projeto está configurado para publicar automaticamente no GitHub Pages por GitHub Actions.

1. No GitHub, abra **Settings → Pages**.
2. Em **Build and deployment → Source**, selecione **GitHub Actions**.
3. Faça push na branch `main` ou execute manualmente o workflow **Deploy to GitHub Pages** na aba Actions.
4. Após o workflow concluir, o endereço público ficará disponível na área **Settings → Pages**.

URL esperada do projeto: https://fernandeluan.github.io/sonnar-site/

O Vite está configurado com `base: '/sonnar-site/'`, necessário para publicação em um repositório de projeto no GitHub Pages. Se for usado um domínio próprio apontando para a raiz, essa configuração deverá ser ajustada.

## Diretrizes de arquitetura
- Componentes reutilizáveis em `src/components/`.
- Seções de página isoladas em `src/sections/`.
- Composição de páginas em `src/pages/`.
- Conteúdo e configurações fora da camada visual em `src/data/` e `src/types/`.
- Estilos globais limitados a reset, tokens, tipografia e regras base.
- Estilos de cada componente/seção mantidos junto ao componente, preferencialmente com CSS Modules (`.module.css`).
- Evitar componentes monolíticos, CSS global por tela e lógica de conteúdo misturada à apresentação.

## Checklist antes de divulgar
- [ ] Confirmar que o número +55 47 98890-1278 é o WhatsApp comercial correto.
- [ ] Confirmar regiões e municípios efetivamente atendidos.
- [ ] Substituir imagens ilustrativas por fotografias autorizadas da operação.
- [ ] Validar serviços, métodos e entregáveis com o responsável técnico.
- [ ] Adicionar avaliações reais de clientes, com autorização.
- [ ] Configurar domínio próprio, Google Search Console e Perfil da Empresa no Google.
- [ ] Revisar política de privacidade e dados de identificação da empresa.

## Observação
As imagens atuais são ilustrativas e os dados comerciais precisam ser validados antes da publicação.
