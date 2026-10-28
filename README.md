# Site Adriano BMF

Projeto do site profissional do Dr. Adriano, com foco em cirurgia buco-maxilo-facial em João Pessoa.

## Status

Primeira versão funcional construída com Next.js, React e TypeScript. Todas as páginas planejadas, a copy, o sistema visual, o contato pelo WhatsApp e a base técnica de SEO já estão implementados.

## Documentação

Toda a documentação de descoberta e planejamento está em [docs](./docs/README.md).

Documentos principais:

- [Especificação completa de UX, copy e visual](./docs/03-produto/especificacao-ux-copy-visual-todas-as-paginas.md)
- [Plano de SEO, sitemap e leitura por IA](./docs/05-seo/plano-seo-sitemap-e-leitura-por-ia.md)
- [Auditoria competitiva e modelo de copy](./docs/04-pesquisa/auditoria-competitiva-e-modelo-de-copy.md)
- [Briefing do cliente](./docs/01-cliente/briefing-cliente-adriano-bmf.md)

## Desenvolvimento local

Requisitos: Node.js 20.9 ou superior.

1. Instale as dependências com `npm install`.
2. Copie `.env.example` para `.env.local` e preencha as integrações disponíveis.
3. Inicie com `npm run dev`.
4. Acesse `http://localhost:3000`.

Para validar a versão de produção, execute `npm run build`.

## Variáveis de ambiente

- `NEXT_PUBLIC_SITE_URL` — domínio canônico do site.
- `NEXT_PUBLIC_SITE_IS_DEMO` — mantenha `true` enquanto houver dados provisórios; o site permanecerá fora da indexação.

## Rastreamento e contato

O contato é exclusivamente pelo WhatsApp de João Pessoa, (83) 9127-5324, definido em `contactLocation` em `lib/site.ts`. Todos os botões abrem a conversa diretamente, sem modal de escolha de consultório. O GTM usa o contêiner `GTM-WFF2SFX6` diretamente no script de `components/gtm.tsx`, sem variável na Vercel. O script fica no `head` e o `noscript` no início do `body` de todas as páginas.

Veja [TRACKING-GTM.md](./TRACKING-GTM.md) para os eventos e as conversões a criar no Google Ads.

## Estrutura do projeto

- app — rotas, layouts e arquivos de metadata
- components — componentes compartilhados e blocos de página
- lib — conteúdo estruturado, utilitários e configurações
- public — ativos finais otimizados para produção
- docs — documentação do projeto e arquivos originais

Os materiais brutos do cliente devem permanecer em docs/06-assets-originais. Apenas os arquivos tratados e aprovados irão para public.

## Publicação

A publicação deve ser feita somente depois da troca dos dados fictícios, da configuração do WhatsApp, da aprovação das fotos. O projeto está preparado para deploy na Vercel.
