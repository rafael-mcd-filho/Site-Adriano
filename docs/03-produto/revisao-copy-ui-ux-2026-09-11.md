# Segunda revisão de copy, UI e UX

Implementação local concluída em 11 de setembro de 2026. Escopo: Home, cinco tratamentos, Para Dentistas, confirmação, mensagens de erro, navegação e componentes compartilhados. A política de privacidade foi lida para avaliar coerência com o fluxo; permanece demonstrativa, sem validação jurídica nesta entrega.

## Diagnóstico editorial

A primeira revisão já reconhecia os sintomas, mas voltava rapidamente à linguagem do consultório. Avaliação, planejamento e indicação apareciam com frequência maior que os objetivos cotidianos do paciente. A nova revisão dá mais espaço ao que a pessoa evita, ao que gostaria de recuperar e ao motivo concreto para procurar orientação.

O objetivo persuasivo é mostrar o valor da consulta e do cuidado adequado ao caso. Os sintomas não são apresentados como prova de que o leitor precisa de cirurgia. A análise abaixo é qualitativa; aumento de conversão depende de medição após a publicação e a configuração dos contatos.

| Página e público | Dor ou dificuldade trabalhada | Desejo e motivo para agir |
| --- | --- | --- |
| Home: pessoa que percebe um problema, mas pode não saber o tratamento | Comer, sorrir ou dormir deixou de ser simples; evitar alimentos, dor e cansaço | Identificar a área de cuidado e entender o próximo passo. Nova abertura: “Comer, sorrir ou dormir bem deixou de ser simples?” |
| Implantes: pessoa com perda dentária ou incômodo com prótese | Escolher sempre um lado para mastigar, insegurança com a prótese e atenção constante ao espaço do dente | Reabilitar a mastigação e buscar mais conforto nas refeições e no sorriso. Nova abertura: “A falta de dentes mudou seu jeito de comer e sorrir?” |
| DTM/ATM: pessoa com dor, estalos ou travamento | Evitar alimentos, bocejar com dor, receio de travamento e tentativas anteriores | Voltar a realizar movimentos cotidianos com mais conforto. A investigação ajuda a orientar o cuidado, com alternativas conservadoras e cirurgia apenas quando indicada. |
| Reconstrução óssea: pessoa que ouviu que falta osso para implantes | Frustração com a interrupção do plano de reabilitação e dúvida se restam alternativas | Receber uma explicação sobre viabilidade, limites e possibilidades; reconstrução não é garantia de implante futuro. |
| Ortognática: pessoa com alterações de mordida ou indicação do ortodontista | Esforço para mastigar, percepção da face e insegurança sobre cirurgia, aparelho e recuperação | Entender mudanças possíveis e organizar a jornada com participação do ortodontista, sem impor um padrão de aparência. |
| Apneia: pessoa que investiga ou já trata apneia obstrutiva | Cansaço durante o dia, dificuldade de atenção e preocupação de quem dorme ao lado | Buscar melhor descanso e disposição, entendendo quando os maxilares participam do quadro e mantendo o acompanhamento do sono. |
| Para Dentistas: profissional que precisa discutir ou encaminhar um caso | Dúvida clínica e necessidade de integrar a etapa especializada ao plano em andamento | Alinhar avaliação, conduta e continuidade do acompanhamento. Removidas promessas não demonstradas de canal separado e retorno garantido do paciente. |

Os cinco tratamentos passaram de seis para quatro situações principais. Dúvidas adicionais continuam nas objeções e no FAQ. As introduções, orientações da consulta e encerramentos foram revisados; os CTAs específicos e as mensagens fortes do briefing foram preservados. Os cartões de compartilhamento acompanham as novas aberturas.

Confirmação e erros agora explicam os próximos passos de forma direta, sem afirmar que um horário está confirmado ou que uma falha foi registrada sem evidência.

## Análise visual e mudanças aplicadas

| Problema encontrado | Mudança implementada |
| --- | --- |
| Brilho sobre a navegação e links pouco contrastados | Header branco opaco, texto navy sólido e estado ativo preenchido, sem halo. Tipografia da navegação ampliada. |
| Verde insuficiente para texto pequeno branco | Verde principal alterado para `#0f7a49`. Contraste calculado de 5,38:1. |
| Ícone e texto mudavam de posição no hover | Botões com ícones fixos, geometria estável e transições discretas de cor/sombra. |
| Muitos cards sucessivos no celular | Sintomas em listas abertas, objeções separadas por linhas, áreas da Home em linhas com pequenas ilustrações, etapas em trilha vertical. |
| Orientações práticas alongavam a página | “O que levar à primeira consulta” passou a ser um bloco expansível. As explicações principais permanecem abertas. |
| Espaços grandes vazios de foto | Assinatura gráfica no hero e certificado real na seção de autoridade. No celular, a assinatura ocupa uma faixa compacta depois do texto e CTA. |
| Molduras orgânicas recortavam legendas das ilustrações | Contorno externo padronizado com cantos arredondados; as formas ficam dentro dos desenhos. Legendas preservadas integralmente. |
| Menu mobile exigia rolagem longa para chegar ao CTA | Links gerais em duas colunas e tratamentos em linhas compactas; CTA e credenciais acessíveis no fechamento. |
| Excesso de movimento e interrupção | Faixa de confiança estática, retirada do pop-up de saída, entrada curta e desenhos com uma execução da animação. Preferência por movimento reduzido preservada. |

Os fundos agora alternam branco, areia suave, azul claro e navy para sinalizar mudanças de assunto. A identificação usa espaço aberto; etapas usam uma trilha; autoridade usa documento real; formulário mantém superfície própria. Bordas ficam concentradas nos elementos que precisam de agrupamento, em vez de contornar cada parágrafo.

Contraste calculado com os valores finais: links do header 10,93:1, item ativo 11,94:1, CTA verde 5,38:1, texto de corpo sobre branco 5,91:1 e credenciais do menu 11,31:1. A referência para texto normal é 4,5:1, conforme [WCAG 2.2 — contraste mínimo](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html). Isso não equivale a uma certificação de acessibilidade de todo o site.

## Ajustes funcionais de UX

- O menu fecha ao mudar de celular para desktop e libera novamente a rolagem.
- Header e menu encaminham para a Home quando a página atual não tem formulário.
- Ícones, rótulos e identificação do canal acompanham o destino real: WhatsApp configurado ou formulário.
- O botão da página de confirmação tem um destino válido mesmo sem WhatsApp configurado.
- O formulário informa indisponibilidade antes do preenchimento e fica desabilitado quando não existe destino de envio. Não há falsa confirmação nem solicitação enviada durante os testes.
- FAQ, abertura das orientações da consulta, menu, Escape e links internos foram conferidos no navegador.

## Oportunidades visuais que dependem de material real

1. **Foto profissional do Dr. Adriano:** é o principal elemento visual ainda ausente para aproximar o visitante do profissional. A assinatura gráfica é uma solução provisória; não representa uma fotografia.
2. **Fotos reais do atendimento e consultório:** podem contextualizar consulta, chegada e ambiente quando houver material adequado. É preferível usar imagens próprias a preencher o site com fotos genéricas.
3. **Depoimentos ou casos autorizados:** podem fortalecer a prova, se forem fornecidos com origem e autorização. Nada foi inventado para completar essas seções.

O certificado já funciona como prova documental acessível. O total de 29 avaliadores continua como informação fornecida pelo cliente; o número não está escrito na imagem do certificado.

## Pendências para a conversão funcionar após publicação

- Número real do WhatsApp e destino de envio do formulário.
- Endereço, contato e horários reais; os dados demonstrativos continuam identificados.
- Dados finais para a política de privacidade.
- Foto e eventual material de prova social.

As alterações estão no projeto local. Não houve publicação, alteração de DNS ou envio de mensagens.

## Verificação

- Páginas principais e de apoio conferidas em 1440px e 320px; páginas principais também conferidas em 390px. Sem transbordamento horizontal e com um H1 por página.
- Header conferido em 1100px, próximo à transição para menu mobile, sem sobreposição entre marca, navegação e CTA.
- Em 390 × 844, o CTA principal das páginas de tratamento aparece integralmente na primeira tela.
- Verificação visual da Home, lista de tratamentos, trilha de ortognática, primeira consulta, ilustração de apneia e menu mobile.
- FAQ, orientações expansíveis, abertura/fechamento do menu, Escape e transição para desktop conferidos.
- `npm run build`: aprovado, com TypeScript e geração das 25 páginas/rotas estáticas previstas no build.
- `npm run lint` e `git diff --check`: aprovados.
- Certificado carregado e conferido visualmente no celular; ilustrações dos cinco tratamentos com molduras de 20px e legendas sem recorte pela borda.
- Nenhum erro ou aviso retornado pelo console na conferência final do navegador.

## Arquivos principais desta segunda revisão

- `lib/content.ts`, `lib/og.tsx`: conteúdo dos tratamentos e compartilhamento.
- `app/page.tsx`, `app/para-dentistas/page.tsx`, `app/obrigado/page.tsx`, `app/not-found.tsx`, `app/global-error.tsx`: Home, encaminhamento e mensagens de apoio.
- `app/globals.css`: contraste, tipografia, fundos, bordas, botões, leitura e responsividade.
- `components/header.tsx`, `components/footer.tsx`, `components/audience-cards.tsx`, `components/location-section.tsx`: navegação e conteúdo compartilhado.
- `components/doctor-portrait.tsx`, `components/trust-marquee.tsx`, `components/button-content.tsx`, `components/whatsapp-button.tsx`, `components/floating-whatsapp.tsx`, `components/contact-form.tsx`: identidade, prova e contato.
- `components/treatment/treatment-hero.tsx`, `treatment-journey.tsx`, `treatment-consultation.tsx`, `treatment-contact.tsx`, `treatment-shell.tsx`: jornada e leitura dos tratamentos.

As mudanças anteriores existentes no projeto foram preservadas. Nenhum commit foi criado.

## Ajustes após o retorno visual do cliente

Esta etapa substitui os raios e tratamentos de fundo descritos na revisão inicial acima.

- Removido o conflito que deixava o hero de Apneia com texto branco sobre fundo claro.
- Breadcrumbs visíveis removidos de tratamentos, dentistas e privacidade; dados estruturados preservados.
- Raio único de 12px para interface: menu, FAQ, formulários, botões e molduras. Removido o arredondamento parcial das seções. Círculos funcionais e formas das ilustrações permanecem próprios do desenho.
- Selos dos heros sem cápsulas, com 28px de separação até os CTAs; lista vertical espaçada no celular.
- Ícone do WhatsApp padronizado e sem cápsula branca nos CTAs correspondentes. O destino de fallback continua sendo o formulário enquanto o número real não está configurado.
- Hero branco, destaque azul sólido, seção de avaliação navy e autoridade em branco. Todas as páginas de tratamento e dentistas usam o mesmo contraste explícito.
- Ondas antes/depois da seção de avaliação e antes do contato; na home, após apresentação e antes do contato. Fundos vetoriais leves de contornos faciais e linhas fluidas em seções selecionadas. Fundos decorativos omitidos em telas pequenas.
- Formulário com nome, WhatsApp e mensagem opcional; origem da página, campanha e data no payload. Contrato e limites em `formulario-integracao.md`.

Conferência em navegador: home, cinco tratamentos, dentistas e privacidade em larguras efetivas de 1440, 390 e 320px, sem transbordamento horizontal. Raio de 12px, ausência de breadcrumbs e remoção dos radios verificados nas páginas. Capturas do hero mobile, onda de transição, autoridade e contato; FAQ e menu mobile com Escape funcionais. Fundos e textos claros/escuros verificados também nos outros tratamentos. Build, lint, `git diff --check` e teste de entrega HTTP local do formulário passaram. Nenhum lead foi enviado a terceiros.

### Destaque da faixa de confiança

Após solicitação do cliente, a faixa da home passou a ter texto branco de 18px (17px no celular), ícones de 22px e rolagem horizontal contínua de 48 segundos por ciclo. Botão Pausar/Retomar, pausa ao passar o mouse sobre o conteúdo e pausa fora da tela. A cópia visual é ocultada de leitores de tela. A preferência de movimento reduzido mostra o conjunto completo em uma lista estática. Conferidos visualmente desktop e celular, ciclo com conjuntos de mesma largura, ausência de transbordamento e funcionamento da pausa/retomada; lint e build passaram.
