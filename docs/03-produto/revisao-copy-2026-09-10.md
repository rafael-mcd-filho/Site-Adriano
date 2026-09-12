# Revisão da copy — Dr. Adriano Rocha Germano

Revisão editorial e implementação: 10 de setembro de 2026.

As seis páginas foram revisadas a partir do projeto local e do briefing fornecido pelo cliente. A direção visual, os componentes, as animações e o fluxo de contato foram preservados. As alterações anteriores que já estavam no índice do Git foram mantidas.

## Mudanças por página

| Página | Abertura e narrativa | CTA principal |
| --- | --- | --- |
| Home | Parte de dor na mandíbula, dentes ausentes e dificuldade para mastigar. Apresenta a filosofia de cuidado, as áreas e o funcionamento da consulta. | Quero entender meu caso |
| Implantes dentários | Parte da perda de dentes e do desconforto com a prótese. Conecta os objetivos de reabilitação a osso, gengiva, mordida, futura prótese e manutenção. Inclui as etapas do tratamento. | Quero saber se posso fazer implante |
| DTM e ATM | Reconhece dor, estalos, travamento e impacto na rotina. Explica a diferença entre DTM e ATM, a investigação das causas e as possibilidades conservadoras. Dá destaque à ausência de indicação cirúrgica automática. | Quero investigar minha dor na mandíbula |
| Reconstrução óssea | Reconhece a frustração de ouvir que falta osso. Explica viabilidade, enxerto, cicatrização e reavaliação, sem garantir implante futuro. | Quero avaliar minhas possibilidades |
| Cirurgia ortognática | Começa pela mordida e pela mastigação. Explica função, estrutura, mudanças faciais, papel do ortodontista, preparo, cirurgia e recuperação. | Quero entender se tenho indicação |
| Apneia do sono | Começa pelo cansaço apesar das horas de sono, ronco e pausas respiratórias. Explica a contribuição dos maxilares na apneia obstrutiva e o cuidado multidisciplinar. | Quero avaliar meu caso |

DTM e ATM continuam na rota local `/cirurgia-atm`. O redirecionamento permanente já existente de `/dtm-atm` foi preservado e verificado. A navegação passou a apresentar “DTM e ATM”, compatível com o escopo conservador e cirúrgico do briefing.

Implantes e ortognática apresentam explicação e etapas antes das objeções. DTM, reconstrução e apneia esclarecem as dúvidas iniciais antes da abordagem clínica. Os títulos, as orientações para consulta e os FAQs são específicos de cada serviço.

## Mensagens preservadas

- “Antes de falar em cirurgia, precisamos entender o seu caso.” é o posicionamento central da Home e do rodapé.
- “Cirurgia é uma possibilidade, não um destino obrigatório.” recebeu destaque na página de DTM e ATM, conforme solicitado no briefing.
- “A cirurgia não é a solução para toda apneia.” recebeu destaque na explicação da abordagem.
- “Um implante bem planejado começa antes do procedimento.” foi mantida como mensagem forte de método, depois da identificação com a perda dentária.
- “Dormir a noite inteira não significa, necessariamente, descansar bem.” foi preservada como abertura da seção de sintomas de apneia.
- O raciocínio “Ouviu que não há osso suficiente para implante? Isso não encerra a avaliação.” foi preservado entre headline e introdução da reconstrução óssea.
- O título existente sobre cirurgião e ortodontista planejarem a mesma jornada foi mantido na ortognática.

## Identidade e autoridade incorporadas

Informações fornecidas diretamente pelo cliente nesta conversa:

- Dr. Adriano Rocha Germano.
- Cirurgião Bucomaxilofacial.
- CRO-PB 12753 e CRO-RN 1980.
- [Instagram oficial informado](https://www.instagram.com/dr.adrianorgermano/).
- Domínio informado: `dradrianorgermano.com.br`, incorporado ao endereço padrão do site, aos metadados e ao arquivo de configuração de exemplo.

O certificado enviado identifica Dr. Adriano Rocha Germano, certificação pelo Board do Colégio Brasileiro de CTBMF (FBCOMS) e participação como membro ativo da banca de examinadores em 2026. A imagem original foi incluída em `public/credenciais/` e vinculada aos blocos de autoridade da Home, dos tratamentos e da página para dentistas.

A informação de que integra um grupo de 29 profissionais aptos a atuar como avaliadores foi fornecida expressamente pelo cliente e incorporada com referência temporal a 2026. Esse total não está escrito na imagem do certificado e não foi confirmado em uma relação pública durante esta revisão. Sua origem está registrada também em comentário junto ao conteúdo. O número de registro 642 do certificado não foi usado como registro de CRO.

O nome fictício, os registros fictícios, os “14 anos” e as formações de demonstração foram substituídos ou removidos. Os depoimentos de demonstração foram retirados das seis páginas; não foram criados novos relatos, avaliações ou resultados de pacientes.

## Dados ainda pendentes

- Foto profissional: o marcador visual existente foi preservado.
- Endereço completo, referência de localização, telefone, WhatsApp e horários exatos: ainda dependem de dados reais de atendimento. João Pessoa foi preservada como cidade do briefing.
- Configuração do destino do formulário: o fluxo existente depende de `FORM_WEBHOOK_URL`. Não foram enviados contatos de teste.
- Formação acadêmica detalhada, residência, outras titulações e tempo de atuação: não foram acrescentados sem informações correspondentes.
- Relatos reais de pacientes e autorização de uso, caso o cliente deseje incluir prova social posteriormente.
- Relação ou comunicado que documente o total de 29 avaliadores, para complementar a rastreabilidade da informação fornecida pelo cliente.

O modo de demonstração continua ativo por padrão para os dados de atendimento ainda provisórios. Nome, registros e credenciais fornecidos não recebem mais rótulo de demonstração. A configuração do domínio não realiza publicação, transferência de domínio ou alteração de DNS.

## Ajustes de UX e conteúdo compartilhado

- Textos e CTAs contextualizados, incluindo nomes acessíveis dos botões.
- Orientações para consulta que admitem a necessidade de investigação complementar, sem prometer diagnóstico ou prazo completo já na primeira consulta.
- Microcopy que diferencia contato, agendamento e decisão por um procedimento.
- Nova seção “Como funciona” na Home, substituindo os depoimentos fictícios e atendendo à âncora já existente no menu móvel.
- Cards de etapas para implantes e ortognática, reutilizando os estilos de consulta.
- Texto e CTA antes do retrato no hero em telas menores.
- Largura do mapa corrigida para evitar transbordamento horizontal no celular.
- Metadados, cartões de compartilhamento e `llms.txt` compatíveis com a revisão e a identidade recebida.
- Retirada da atribuição automática de revisão clínica ao profissional no schema: esta entrega é uma revisão editorial, não comprovação de aprovação clínica pelo Dr. Adriano.

## Arquivos alterados nesta revisão

| Arquivo | Alteração |
| --- | --- |
| `.env.example` | Domínio e Instagram fornecidos; observações de configuração. |
| `app/page.tsx` | Copy, credenciais e narrativa da Home; retirada de depoimentos fictícios; seção de etapas do contato. |
| `app/globals.css` | Ordem do hero móvel e largura do mapa. |
| `app/llms.txt/route.ts` | Identidade real, credenciais, certificado, Instagram e aviso de demonstração atualizado. |
| `app/para-dentistas/page.tsx` | Atualização pontual da identidade e autoridade compartilhadas. |
| `lib/content.ts` | Copy completa dos cinco tratamentos, FAQs, CTAs, etapas e metadados. |
| `lib/site.ts` | Nome, CROs, credenciais, origem do total de avaliadores, links e descrição global. |
| `lib/og.tsx` | Copy dos seis cartões sociais. |
| `components/header.tsx` | CTA de entendimento do caso e registros reais. |
| `components/footer.tsx` | Posicionamento central e link do Instagram. |
| `components/audience-cards.tsx` | CTAs do paciente. |
| `components/doctor-portrait.tsx` | Identidade real e marcador da foto pendente. |
| `components/location-section.tsx` | Texto e CTA de localização. |
| `components/trust-marquee.tsx` | Registros reais e exames quando necessários. |
| `components/whatsapp-button.tsx` | Nome acessível acompanha o CTA e seu destino. |
| `components/treatment-page.tsx` | Ordem de conteúdo por serviço e títulos de FAQ. |
| `components/treatment/treatment-authority.tsx` | Autoridade comprovada pelo documento e informações do cliente. |
| `components/treatment/treatment-consultation.tsx` | Orientações e CTA específicos de cada página. |
| `components/treatment/treatment-contact.tsx` | Microcopy do formulário. |
| `components/treatment/treatment-objections.tsx` | Rótulo alinhado às dúvidas antes da decisão. |
| `components/treatment/treatment-shell.tsx` | Retirada da atribuição não comprovada de revisão clínica. |
| `components/treatment/treatment-journey.tsx` | Novo componente de etapas, usando estilos existentes. |
| `public/credenciais/certificado-board-adriano-rocha-germano-2026.png` | Cópia da imagem original fornecida pelo cliente. |
| `docs/03-produto/revisao-copy-2026-09-10.md` | Este registro de alterações e pendências. |

## Verificação

- `npm run build`: aprovado, incluindo compilação TypeScript e geração estática das páginas.
- `npm run lint`: aprovado.
- `git diff --check`: aprovado.
- Seis páginas conferidas no navegador em 390 × 844 e 1440 × 1000: sem transbordamento horizontal, um H1 por página e CTAs completos.
- FAQ expandido e destino do CTA para `#contato` conferidos no navegador. O destino é o formulário enquanto o WhatsApp não estiver configurado.
- Rotas das seis páginas, certificado, `llms.txt` e sitemap responderam HTTP 200; `/dtm-atm` chega ao conteúdo por redirecionamento.
- Nenhum erro ou aviso de console retornado durante a conferência das páginas.
- Alterações implementadas e verificadas localmente, sem publicação na Vercel ou no domínio informado.

## Referências editoriais consultadas

O briefing e o código existente orientaram o escopo e o posicionamento. As URLs da versão Vercel, o domínio e o Instagram não puderam ser consultados pela ferramenta de pesquisa nesta sessão; a revisão de implementação foi feita no projeto local.

Para conferir a redação clínica geral, foram consultadas fontes primárias:

- [NIDCR: DTM, sintomas, diagnóstico e opções de cuidado](https://www.nidcr.nih.gov/health-info/tmd).
- [NHLBI: diagnóstico de apneia do sono](https://www.nhlbi.nih.gov/health/sleep-apnea/diagnosis) e [tratamento](https://www.nhlbi.nih.gov/health/sleep-apnea/treatment).
- [FDA: informações para pacientes sobre implantes dentários](https://www.fda.gov/medical-devices/dental-devices/dental-implants-what-you-should-know).
- [AAOMS: enxertos ósseos](https://myoms.org/what-we-do/extractions-and-dentoalveolar-surgery/bone-grafts/).
- [AAOMS: cirurgia ortognática](https://myoms.org/what-we-do/corrective-jaw-surgery/) e [recuperação](https://myoms.org/what-we-do/corrective-jaw-surgery/recovery-from-orthognathic-surgery/).

Essas referências sustentam a linguagem educativa geral; não comprovam resultados ou a experiência individual do profissional. As fontes dos dados pessoais e da certificação estão discriminadas acima.
