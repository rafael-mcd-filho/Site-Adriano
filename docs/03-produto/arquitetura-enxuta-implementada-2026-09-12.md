# Arquitetura enxuta — implementação

Data: 12 de setembro de 2026
Base: `reestruturacao-final-conversao-dr-adriano.md` (especificação aprovada pelo cliente).
Escopo aplicado: Home, cinco rotas de tratamento, nova rota `/sobre`, Para dentistas e confirmação.

A regra que orientou tudo: **cada seção grande responde a uma pergunta diferente do visitante; duas seções que respondem à mesma pergunta viram uma só.** O alvo era de seis a oito blocos por página. Todas as rotas ficaram em sete.

---

## 1. O que foi fundido

| Antes | Agora | Por quê |
|---|---|---|
| Sintomas + faixa editorial de consequência | **"Isso parece com o seu caso?"** | As duas respondiam reconhecimento. Somadas, gastavam uma tela e meia no celular antes de a página oferecer qualquer resposta. |
| Objeções + método | **"Como avaliamos e decidimos o caminho"** | Método dá o critério; objeções dizem o que o critério desfaz. É um raciocínio só, e ele fica mais forte inteiro. |
| Autoridade + prova social | **"Por que confiar nessa avaliação"** | Credencial responde "ele é qualificado?"; relato responde "ele é bom com gente como eu?". Formam um bloco de confiança. |
| Primeira consulta + FAQ | **"Sua primeira consulta"** | O processo já resolve as dúvidas práticas. O acordeão fica com o que sobra. |
| Contato + dúvidas finais (home e dentistas) | **Contato** | Encerra a jornada sem abrir mais duas seções. |
| Faixa de atributos genéricos | **Faixa de credenciais** | "Avaliação antes da indicação" é afirmação do próprio anunciante. No lugar onde o visitante ainda decide se fica, o que reduz incerteza é fato verificável. |

## 2. O que saiu

- **Faixa editorial "sua rotina" na home.** Ritmo visual sem trabalho de conversão; a consequência emocional já aparece nos cards de área e no fecho.
- **Bloco grande "Paciente / Dentista".** Virou uma linha ao fim do contato. O dentista tem item no menu, link no rodapé e página própria.
- **Sobre extenso na home.** Encolheu para nome, registro, credenciais, critérios de decisão e link. O currículo foi para `/sobre`.
- **Seção de prova vazia nas rotas de tratamento.** O componente antigo renderizava um cabeçalho e nada mais.
- Componentes descontinuados: `editorial-story`, `audience-cards`, `faq-section`, `section-backdrop`, `treatment-method`, `treatment-objections`, `treatment-authority`, `treatment-proof`.

## 3. O que entrou

- **`/sobre`** — rota nova, sete seções. Destino da busca por nome e do link da bio do Instagram. Inclui a explicação do que é o Board do Colégio Brasileiro de CTBMF, com o certificado dentro dela: sozinho, o documento é algo que o paciente não sabe ler.
- **Jornada nas cinco rotas.** Existia em implantes e ortognática. Apneia, DTM/ATM e reconstrução ganharam a sua — são justamente as três em que o desfecho é incerto e "o que acontece depois que eu marco?" mais adia o contato.
- **CTA intermediário**, ao fim da seção de decisão, com pergunta própria por rota. Antes havia botão no hero e o próximo só sete telas adiante.
- **Dúvidas abertas** (`.open-questions`): encaminhamento, exames, "a consulta já define cirurgia?" e atendimento particular. Saíram do acordeão porque acordeão fechado é conteúdo invisível, e essas quatro são as que decidem o agendamento.
- **Escopo e devolutiva** em Para dentistas: o que o Dr. Adriano conduz, o que permanece com o colega, e o que é combinado de retorno. Substitui a promessa removida na revisão anterior por processo descritível.
- **Salvar o contato** e links de espera na página de confirmação.
- **Componentes prontos, sem dado:** `ClinicalCaseCard` e `Reviews`. Não renderizam nada enquanto não houver material real.

## 4. Escada de CTAs

Em `lib/content.ts`, `ctaLadder`. O rótulo muda quando o visitante avançou de etapa mental, nunca por variedade.

| Posição | Rótulo |
|---|---|
| Hero | `primaryCta` da rota, ou "Quero entender meu caso" |
| Hero, secundário | "Ver como funciona a consulta" (botão, não link de texto) |
| Fim da decisão | "Quero saber se isso se aplica ao meu caso" |
| Fim da confiança | "Quero conversar sobre uma avaliação" |
| Primeira consulta e contato | "Quero solicitar minha avaliação" |
| Flutuante | "Falar com a equipe" |

## 5. Estrutura final

**Home** — hero + credenciais · áreas · quem conduz + critérios de decisão · primeira consulta + dúvidas abertas · avaliações¹ · localização · contato + FAQ residual.

**Tratamentos** — hero + autoria · isso parece com o seu caso · como avaliamos e decidimos + CTA · como funciona o tratamento + caso¹ · por que confiar · sua primeira consulta + FAQ · contato.

**Sobre** — hero · formação e credenciais · o que é o Board (com o certificado) · como ele pensa uma indicação · atendimento e trabalho integrado · avaliações¹ · áreas + contato.

**Para dentistas** — hero · quando conversar + tipos de caso · autoridade técnica · escopo + devolutiva · fluxo · confiança entre colegas¹ · FAQ + contato.

¹ Não renderiza enquanto não houver material real e autorizado.

## 5.1 Navegação

O menu listava nomes de procedimento, e a própria home admite que ninguém chega sabendo o nome do procedimento. Sete ajustes, na mesma sessão:

| Antes | Agora | Por quê |
|---|---|---|
| Seta `↗` nos cinco itens | `→` | `↗` é a convenção de "abre fora do site". Eram cinco links internos. Corrigido também no rodapé e no link da identidade; o certificado, que abre em nova aba, manteve o `↗` — ali ele está certo. |
| Só o nome do procedimento | Nome + linha de sintoma | "Apneia do sono · ronco, pausas na respiração, cansaço ao acordar". Quem ronca não procura por "apneia" num menu de dentista. O dado mora em `areaNavigation.hint`. |
| Ícone ✨ no gatilho | Ícone de pulso | Estrelinhas são vocabulário de promoção, fora do registro do site. |
| "Avaliação especializada" | "Comece pelo que incomoda" | A etiqueta repetia o rótulo do gatilho, e nas duas vezes na língua da clínica. |
| "Dúvidas" na pílula | Removido | Depois que o FAQ passou para dentro do contato, ele apontava para o mesmo destino do botão do cabeçalho. Continua no rodapé. |
| Gatilho aceso sem dizer qual área | "Áreas de atuação · DTM e ATM" | Numa rota de tratamento, o estado ativo não informava nada. |
| "Para dentistas" na pílula | Link menor ao lado do CTA | Público diferente, peso visual diferente. O colega procura ativamente. |

A pílula do desktop ficou com três alvos — Início, Dr. Adriano, Áreas — e o menu mobile passou a caber em uma tela sem rolagem.

## 6. Medições

Larguras de 390 × 844 e 1440 × 900, com o projeto rodando localmente.

| Rota | Antes (celular) | Agora | Blocos |
|---|---|---|---|
| Home | 14,0 telas | **12,1** | 7 |
| DTM e ATM | 13,7 | 15,4 | 7 |
| Para dentistas | — | 13,5 | 7 |
| Sobre | não existia | 10,1 | 7 |
| Confirmação | — | 4,0 | 2 |

A home encurtou 1,9 tela. **As rotas de tratamento ficaram mais altas**, e isso precisa ser dito com clareza: a fusão de sintomas com consequência não gerou economia — as duas seções somadas já ocupavam o mesmo espaço que a seção única ocupa agora —, enquanto a jornada nova (cerca de mil pixels) e o CTA intermediário acrescentaram altura real. O ganho não está no comprimento, está na ordem: a identidade do profissional aparece na primeira tela, o pico de interesse passou a ter botão, e nenhum assunto é dito duas vezes.

Se o comprimento das rotas de tratamento incomodar na revisão, o corte mais honesto é a ilustração do motivo visual no celular, que ocupa cerca de 340 px de decoração dentro da seção de decisão.

## 6.1 Indexação e SEO

Indexação e dados de demonstração eram a mesma chave, e isso tornava o site impossível de publicar: `NEXT_PUBLIC_SITE_IS_DEMO=false` era a única saída do `noindex`, e ela também apagava endereço, telefone e mapa. Quem quisesse aparecer na busca tinha de escolher entre publicar dado falso e publicar sem dado nenhum.

Agora são duas decisões. `isIndexable` é o padrão — um site que existe para ser encontrado não deveria depender de alguém lembrar de destravá-lo — e `NEXT_PUBLIC_SITE_NOINDEX=true` fecha de volta. Deploys de preview da Vercel saem do índice sozinhos. O acoplamento que sobrou vai no sentido seguro: **abrir o índice desliga o modo demo**, então nada de demonstração chega ao Google.

Defeitos encontrados e corrigidos na revisão:

| Defeito | Efeito | Correção |
|---|---|---|
| `pageMetadata` devolvia `index, follow` sempre | A home estava `noindex` e as rotas de tratamento, `/sobre` e `/para-dentistas` estavam indexáveis — o contrário do pretendido. O `robots.txt` bloqueava tudo antes, então ninguém percebia. | A trava global passou a valer antes do parâmetro da página. |
| `robots.txt` com `Disallow: /` | Nenhuma página era rastreada. | Passou a depender de `isIndexable`; agora declara o sitemap e libera o rastreio. |
| Política de privacidade `noindex` e no sitemap | Contradição que o Search Console reporta como "URL enviada marcada como noindex". | A página passou a usar `pageMetadata`, valendo a intenção documentada no sitemap. |
| Seis títulos entre 66 e 74 caracteres | Truncados no resultado de busca. O template do layout soma " \| Dr. Adriano" a cada um. | Encurtados para 43–57, preservando termo principal e cidade. |
| `/sobre` com "Dr. Adriano" duas vezes no título | "Dr. Adriano Rocha Germano \| Cirurgião Bucomaxilofacial \| Dr. Adriano". | `absoluteTitle` ignora o sufixo do layout. |
| Nó `Dentist` sem `address` | Endereço é o campo que o Google usa para entender um negócio local. | Adicionado no nível de cidade — verdadeiro e incompleto, em vez de inventado. |
| `priceRange: "$$"` | Dado que ninguém verificou, num site cuja regra é não publicar o que não se comprova. | Removido. O campo é opcional. |
| Bloco de endereço vazio fora do modo demo | Rótulo "Endereço" sem nada embaixo, parecendo falha de carregamento. | Linha de espera: "Confirmado com a equipe no agendamento". |

Estado final, nas nove rotas: um H1, canonical absoluto, `index, follow`, título de 37 a 57 caracteres, descrição de 137 a 157, cartão social próprio, dados estruturados sem campo inventado e nenhuma imagem sem `alt`.

Duas observações que não são defeito. `preload` no hero é a prop correta do `next/image` no Next 16 — `priority` está deprecada e apenas delega para ela. E o texto da política de privacidade continua sendo uma minuta pendente de revisão jurídica: ela passou a ser indexável por coerência com o sitemap, mas o conteúdo ainda precisa dos dados do controlador.

## 7. Critérios de aceite da especificação

- [x] Nenhuma página passa de oito blocos grandes.
- [x] Sintomas não aparecem em mais de um bloco.
- [x] Dor e consequência não estão separadas.
- [x] Método e objeções não são conteúdos redundantes.
- [x] O currículo não se repete: home compacta, `/sobre` completo, tratamentos com um bloco de confiança.
- [x] Nenhuma seção existe apenas para um CTA — o intermediário vive dentro da seção de decisão.
- [x] A identidade do profissional aparece no hero, não na metade da página.
- [x] Nenhuma avaliação fictícia.
- [x] Nenhum caso sem material real.
- [x] O FAQ não repete o conteúdo principal: de quatro a seis dúvidas residuais por rota.
- [x] Um H1 por página, sem transbordamento horizontal em 390 px.

## 8. Verificação

- `npm run build`: aprovado, 27 rotas geradas, incluindo `/sobre`.
- `npm run lint` e `git diff --check`: aprovados.
- Nove rotas conferidas no navegador em 390 × 844 e 1440 × 900: HTTP 200, um H1 por página, sem transbordamento horizontal.
- Conferidos visualmente: hero e identidade das rotas de tratamento, seção de decisão com objeções sobre o navy, CTA intermediário, escopo e devolutiva em Para dentistas, explicação do Board em `/sobre`, dúvidas abertas na home e acordeão sobre o contato escuro.
- Ritmo de superfícies revisado rota a rota; `app/styles/LEIA-ME.md` atualizado com a escala nova.

## 9. Pendências que limitam o efeito disto

Nenhuma mudança de estrutura compensa a falta destes itens:

1. Número real do WhatsApp. Sem ele, **todos** os botões continuam sendo âncoras para o formulário.
2. Destino do formulário (`FORM_WEBHOOK_URL`).
3. Endereço, telefone e horários reais — o modo demonstração mantém o site fora do índice.
4. Fotografia profissional. O bloco de identidade do hero está pronto e continua exibindo o monograma.
5. Currículo verificável para a seção de formação de `/sobre`, hoje com quatro itens documentados.
6. Perfil da Empresa no Google, para viabilizar as avaliações.
7. Relatos de pacientes e de colegas, com autorização registrada.
8. Casos desidentificados e aprovados pelo cirurgião, para `ClinicalCaseCard`.
9. Confirmação documental do dado "29 avaliadores no Brasil", usado na home, em `/sobre` e em Para dentistas.
