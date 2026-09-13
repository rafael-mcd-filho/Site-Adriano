# Imagens e espaços reservados — 12/09/2026

Foram criados e integrados **16 arquivos SVG de reserva** e **8 ilustrações vetoriais educativas**. As fotografias ilustrativas existentes e o certificado verdadeiro do Board foram preservados. Nenhum retrato, depoimento, documento ou resultado clínico foi inventado.

## O que está nas páginas

| Página | Imagens e reservas inseridas |
|---|---|
| Home | Retrato na identificação e na autoridade; foto de consulta na primeira consulta; reserva de avaliações; fachada e recepção independentes para João Pessoa e Natal. |
| Sobre | Retrato; foto de atividade acadêmica junto à trajetória; certificado verdadeiro no Board; foto em consulta junto à conduta; reserva de recepção e de avaliações. |
| Para dentistas | Retrato; certificado verdadeiro; foto de planejamento com colega junto à devolutiva; reserva de depoimentos profissionais. |
| Apneia | Esquema dos maxilares e passagem de ar; retrato; reserva de caso e de avaliações. Fotografias de quarto e rotina já existentes mantidas. |
| Implantes | Esquema da prótese, implante e osso; retrato; reserva de caso e de avaliações. Fotografia de refeição pendente. |
| Reconstrução óssea | Foto do doutor em consulta reservada; esquema da região de planejamento; retrato; reserva de caso e de avaliações. |
| DTM e ATM | Foto de avaliação clínica reservada; esquema da articulação e região muscular; retrato; reserva de caso e de avaliações. |
| Ortognática | Desenho frontal das arcadas na identificação do problema; desenho lateral dos maxilares no planejamento; retrato; reserva de caso e de avaliações. |
| Siso | Ambientação ilustrativa existente aplicada ao hero; desenho de três posições do siso; esquema próprio do siso incluso, dente vizinho e canal mandibular; retrato; reserva de caso e de avaliações. |
| Obrigado, Privacidade, 404 e erro | Sem novas imagens, conforme a análise. |

As reservas de casos não criam resultados fictícios nem alteram os dados estruturados para declarar avaliações inexistentes. Formulários e FAQs continuam sem fotografias de fundo. As mudanças de formação e de endereço presentes na versão atual do projeto foram preservadas.

## Como trocar as reservas pelas imagens definitivas

1. Coloque as imagens em `public/images/reais/`, de preferência WebP, com nomes descritivos.
2. Abra `lib/media-replacements.ts`.
3. Acrescente a chave do espaço, o caminho público da foto e uma descrição alternativa. A substituição vale para todas as ocorrências daquela chave.

```ts
export const mediaReplacements = {
  "doctor-portrait": {
    src: "/images/reais/dr-adriano-retrato.webp",
    alt: "Dr. Adriano Rocha Germano no consultório",
    caption: "",
  },
  "facade-joao-pessoa": {
    src: "/images/reais/fachada-joao-pessoa.webp",
    alt: "Entrada do consultório de João Pessoa",
    caption: "Entrada do consultório em João Pessoa.",
  },
};
```

Sem substituição configurada, aparece o SVG com o texto do material pendente. Com substituição configurada, esse texto e a legenda de pendência deixam de aparecer. O conteúdo descritivo de um caso ou de uma avaliação deve ser preenchido também nos componentes/dados próprios; trocar a imagem sozinha não preenche a narrativa clínica.

| Chave | Material | Proporção prevista |
|---|---|---|
| `doctor-portrait` | Retrato do Dr. Adriano | 4:5 |
| `doctor-consultation` | Doutor em consulta, explicando alternativas | 4:3 |
| `doctor-examination` | Doutor em avaliação clínica | 4:3 |
| `doctor-planning` | Doutor planejando com outro profissional | 4:3 |
| `doctor-congress` | Doutor em evento/atividade acadêmica, com contexto e ano | 4:3 |
| `facade-joao-pessoa` / `facade-natal` | Fachada de cada consultório | 4:3 |
| `reception-joao-pessoa` / `reception-natal` | Recepção de cada consultório | 4:3 |
| `reception` | Imagem de recepção usada na página Sobre | 4:3 |
| `case-implants` | Caso real de implantes | 4:3 |
| `case-bone` | Caso real de reconstrução óssea | 4:3 |
| `case-atm` | Caso real de DTM/ATM | 4:3 |
| `case-orthognathic` | Caso real de ortognática | 4:3 |
| `case-sleep` | Material de acompanhamento de apneia | 4:3 |
| `case-wisdom` | Caso real de siso | 4:3 |
| `reviews-patients` | Material real de avaliações de pacientes | 20:7 |
| `reviews-colleagues` | Material real de relatos de colegas | 20:7 |
| `certificate` | Reserva disponível se não houver certificado configurado | 4:3 |

O certificado do Board já fornecido continua em `public/credenciais/certificado-board-adriano-rocha-germano-2026.png`, configurado em `lib/site.ts`. A reserva de certificado não o substitui enquanto o documento verdadeiro estiver disponível.

## Ilustrações educativas

Arquivos em `public/images/diagrams/`: `air.svg`, `implant.svg`, `layers.svg`, `joint.svg`, `alignment.svg`, `wisdom.svg`, `wisdom-positions.svg` e `bite.svg`.

São desenhos conceituais, com legendas em HTML para leitura no celular. Não são exames ou representações de resultados individuais. Podem ser refinados com o profissional sem alterar o layout. O script `scripts/create-editorial-diagrams.mjs` registra sua construção vetorial e também os dois banners de reserva de avaliações. Executá-lo novamente sobrescreve apenas esses arquivos gerados.

## Fotografias pendentes

A tentativa com o **imagegen integrado** retornou `429 usage_limit_reached`. Nenhuma fotografia nova foi gerada nesta etapa, e não foi utilizada API externa paga.

- Hero dedicado de sisos: usa por enquanto `/images/editorial/consulta-contexto.webp`, já existente.
- Refeição na página de implantes: mantém por enquanto a fotografia editorial já existente.
- As ideias de apoio de sisos e ortognática foram atendidas com desenhos vetoriais, estendendo a linguagem gráfica do site. Há prompts raster dessas ideias caso se queira produzir variantes posteriormente.

O conjunto exato de prompts tentados está em `docs/03-produto/prompts-imagens-pendentes-2026-09-12.json`.

## Verificação

Lint, TypeScript e build de produção executados. Revisão de carregamento e geometria nas nove páginas principais, incluindo layout de celular em 390 px. A revisão não enviou formulários nem acionou links de WhatsApp.
