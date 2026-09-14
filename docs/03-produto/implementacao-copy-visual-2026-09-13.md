# Implementação de copy e visual — 13/09/2026

Implementa os quatro conjuntos de ajustes aprovados nas capturas enviadas pelo cliente.

## Entregue

- Home: autoridade com três credenciais e três critérios, avaliações após as áreas, CTA depois do processo, FAQ com três perguntas, localizações sem mapas incorporados.
- Sobre: currículo agrupado em Formação, Experiência e Reconhecimento, âncoras de navegação, correções factuais e reserva explícita para a fala pessoal real do doutor.
- Para dentistas: H1 e CTAs próprios, responsabilidades concretas, seis situações de encaminhamento e formulário profissional. Cabeçalho, rodapé e botão flutuante acompanham esse público.
- Tratamentos: duas dúvidas práticas abertas e três ou quatro perguntas no FAQ, autoridade curta e contextual, CTAs próprios sempre visíveis após autoridade, mesmo sem relatos.
- Apneia: esclarecimento da integração com o cuidado do sono e consulta possível antes dos exames adicionais.
- ATM: fatores associados e caminhos conservadores, acompanhamento e cirurgia sem pressupor escalada automática.
- Ortognática: quatro etapas com participação do ortodontista, cirurgião e equipe.
- Implantes: três cenários (um dente, vários dentes, prótese removível).
- Reconstrução: perda localizada versus extensa; conteúdo sobre casos hospitalares em expansão acessível.
- Siso: decisão por histórico, exame e imagem, hero exclusivo e reserva para panorâmica real anotada.
- Celular: faixa de credenciais estática em duas colunas, retratos e reservas mais compactos, textos e margens reduzidos. Superfície clara na segunda metade da seção de decisão.
- Contato final: seletor de João Pessoa ou Natal, com número correto e origem preservada na mensagem. Navegação por teclado, Escape e devolução do foco.
- Sem FORM_WEBHOOK_URL, o formulário não é exibido; os canais de WhatsApp continuam disponíveis. A variante profissional mantém o contrato do webhook, incluindo profissão e objetivo no campo message, com validação no servidor.
- Linha editorial nas seis páginas clínicas, com nome, CRO e data da atualização.

## Materiais reais pendentes

Os placeholders continuam visíveis por solicitação do cliente. Substituições centralizadas em lib/media-replacements.ts. Fotos do doutor, atendimentos, consultórios, avaliações, casos e exames precisam de materiais reais. Não foram inventados depoimentos, documentos ou resultados. O certificado já fornecido foi preservado.

A fala pessoal está reservada na página Sobre. Não há frase atribuída ao profissional sem fornecimento/validação.

A confirmação de revisão clínica fica em lib/editorial.ts. Até ser registrada pelo responsável, a página mostra **atualização editorial**, sem afirmar que o doutor revisou o novo texto. Preencher clinicalReviews[slug].date após essa validação também habilita reviewedBy/lastReviewed no schema.

## Hero de siso

Gerado com a ferramenta integrada image_gen; composição ilustrativa, sem retratar o consultório ou um paciente real.
Arquivo final: public/images/heroes/hero-siso-v1.webp (1672 × 941, aproximadamente 55 kB).
Origem: C:/Users/adami/.codex/generated_images/01a095de-2f61-7db3-8810-5bd2e6c4738c/exec-2dfb9672-3f9a-4cc6-80fb-d9b7cda8c71f.png.
Conversão para WebP com sharp, qualidade 85, sem alteração de composição.

Prompt:

> Use case: photorealistic-natural. Asset type: wide background hero photo for a Brazilian oral and maxillofacial surgeon's wisdom tooth information page. Primary request: quiet editorial still life of a neutral ivory dental jaw model with intact teeth and one partially impacted third molar, sitting on the RIGHT HALF of a clean dental planning desk; a softly out-of-focus radiograph light panel behind, no legible patient data, no person. Left half is dark navy negative space for white website headline. Premium clinical atmosphere, navy shadows, desaturated blue and warm ivory, soft directional daylight. Realistic materials and credible proportions, natural texture, restrained composition, horizontal landscape 16:9. No tools in mouth, blood, procedure, before/after, labels, text, logos or watermarks. This is an illustrative scene, not a clinical result or real clinic.

## Referências clínicas usadas na revisão editorial

- [NIDCR — DTM](https://www.nidcr.nih.gov/health-info/tmd)
- [AAOMS — manejo de terceiros molares](https://aaoms.org/wp-content/uploads/2024/03/management_third_molar_white_paper.pdf)
- [AAOMS — exames de imagem para sisos](https://myoms.org/what-we-do/wisdom-teeth-management/advanced-imaging-for-wisdom-teeth-management/)
- [AAOMS — cirurgia ortognática](https://myoms.org/what-we-do/corrective-jaw-surgery/)
- [AAOMS — implantes e próteses](https://myoms.org/what-we-do/dental-implant-surgery/how-do-dental-implants-work/)
- [AASM — encaminhamento para avaliação cirúrgica da apneia](https://aasm.org/wp-content/uploads/2022/03/Referral_OSA_Surgical_Consultation_Guideline_at_a_Glance.pdf)

## Verificação

Build de produção, ESLint, TypeScript e testes de contato com webhook exclusivamente local. Navegação e geometria nas nove páginas, em desktop e larguras de celular; verificação de CTAs, etapas, perguntas, âncoras e imagens. Conferência de contraste e foco do seletor de consultórios. Não foram enviados contatos reais.

Na mesma configuração mobile da auditoria anterior, a Home caiu de aproximadamente 12.200 para 9.600 px. As páginas de tratamento ficaram próximas de 11.000 px, variando conforme os novos cenários e as reservas de materiais. A redução vem de edição de conteúdo, compactação de espaços e remoção do formulário indisponível; o resultado não é uma medida de conversão.

