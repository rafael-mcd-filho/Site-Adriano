# Reestruturação de conversão — análise de estrutura, ordem e conteúdo

Data: 12 de setembro de 2026
Escopo: Home, cinco páginas de tratamento, Para dentistas, confirmação e a página Sobre que ainda não existe.
Natureza: análise e arquitetura recomendada. Nenhuma alteração de código foi feita nesta entrega.

Medições de profundidade citadas ao longo do documento foram tiradas do projeto rodando em `localhost:3000`, em 390 × 844 (celular) e 1440 × 900 (desktop), em 12/09/2026.

---

## 0. Diagnóstico geral

### 0.1 O que o site já faz melhor que o mercado local

A auditoria competitiva do projeto mapeou o padrão da praça: promessa de transformação, "solução definitiva", tecnologia descrita por adjetivo e antes/depois. O site foge disso por decisão editorial, e essa decisão é um ativo, não um custo. Três coisas já estão certas e não devem ser mexidas:

1. **A tese central** — "antes de falar em cirurgia, precisamos entender o seu caso" — é o posicionamento correto para um cirurgião que vive de casos complexos e de encaminhamento. Ela qualifica o lead e desarma o público que chega desconfiado de quem promete demais.
2. **A arquitetura por condição**, com uma rota por intenção de busca, em vez de uma página institucional recebendo todo o tráfego.
3. **O antiupsell** ("a cirurgia não é a solução para toda apneia", "cirurgia é uma possibilidade, não um destino obrigatório"). É o elemento mais persuasivo do site inteiro para este público, e a maior parte dos concorrentes não consegue dizer isso.

### 0.2 Os cinco problemas que travam conversão hoje

**1. Prova social zero.** `testimonials` está vazio nas cinco rotas, e `TreatmentProof` retorna `null`. Não existe uma avaliação, uma nota, um relato ou um número de pacientes em nenhuma página. O site pede que o visitante confie apenas na palavra do próprio site. Em decisão cirúrgica, esse é o maior buraco da estrutura atual — maior que qualquer questão de ordem de seções.

**2. A prova de autoridade mais forte do projeto está escondida.** "Em 2026, integra o grupo de 29 profissionais no Brasil habilitados a atuar como avaliadores desse Board" é uma afirmação de categoria única. Hoje ela aparece como parágrafo comum, sem destaque, depois da lista de credenciais, na terceira dobra da Home e na sexta dobra das páginas de tratamento. É guardar a melhor carta para o fim do baralho.

**3. A autoridade chega tarde nas páginas de tratamento.** No celular, a seção do Dr. Adriano começa em **6,2 telas de rolagem** (DTM/ATM). Entre o hero e ela, o visitante lê sintomas, consequência, objeções e método assinados por ninguém em particular. Em conteúdo de saúde, a pergunta "quem está me dizendo isso?" vem antes de "isso faz sentido?".

**4. Zona morta de conversão no meio da página.** As páginas de tratamento têm CTA no hero (tela 0,3), na seção de consulta (tela ~7,7) e no fecho (tela ~10,4). Entre a tela 1 e a tela 7 existe apenas o botão flutuante. O momento de maior disposição para agir — logo depois de entender o método — não tem botão nenhum.

**5. Nenhum caminho para quem não está pronto hoje.** Decisão de cirurgia ortognática ou reconstrução leva semanas ou meses. O site tem uma única saída: falar agora. Quem não está pronto sai sem deixar rastro e sem motivo para voltar.

### 0.3 Bloqueios que não são de estrutura

Estes itens limitam o teto de conversão mais do que qualquer reordenação de seção. Estão aqui porque nenhuma recomendação abaixo funciona sem eles:

| Pendência | Efeito hoje |
|---|---|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` vazio | **Todos** os botões de WhatsApp são âncoras para `#contato`. O canal principal de conversão do projeto não existe. |
| Foto profissional | Marca pessoal sem rosto. O monograma "ARG" ocupa o lugar do ativo de conversão mais importante de um site de profissional. |
| Endereço, telefone e horários reais | Modo demonstração ativo, `robots` em `noindex`. O site não recebe tráfego orgânico. |
| Currículo completo | A auditoria competitiva já apontou: os concorrentes publicam residência, mestrado, docência e instituições. Hoje o site tem CROs e o Board. É menos do que a praça mostra. |
| Avaliações do Google | Sem Perfil da Empresa ativo, não há como usar a prova social mais barata e menos sensível eticamente. |

### 0.4 Restrições que condicionam as recomendações

O briefing do projeto já registra as vedações de publicidade odontológica aplicáveis: nada de preço, promoção, garantia de resultado, diagnóstico dirigido ao visitante, comparação depreciativa, imagem de procedimento e **antes/depois**. Toda recomendação de "casos clínicos" e "prova social" abaixo respeita isso, e os formatos propostos foram escolhidos justamente por caberem dentro dessas regras. Antes da publicação, o material de prova deve passar pela validação do próprio cirurgião e, havendo dúvida, do CRO-PB — isso vale especialmente para relatos de pacientes e descrições de casos.

Pela LGPD, sintoma é dado sensível. As recomendações preservam a decisão já tomada no projeto: o formulário roteia por **intenção de contato**, nunca por estado de saúde.

---

## 1. Home

### 1.1 Estrutura atual

| # | Seção | Início (celular) | Altura |
|---|---|---|---|
| 1 | Hero: identidade, H1, três selos, dois CTAs | 0,1 tela | 932 px |
| 2 | Faixa de confiança animada (4 atributos) | 1,2 | 80 px |
| 3 | `#sobre` — "Ser ouvido faz parte de ser bem cuidado" + credenciais + certificado | 1,3 | 1.478 px |
| 4 | `#areas` — cinco cards de tratamento | 3,0 | 1.318 px |
| 5 | `#sua-rotina` — faixa editorial com foto | 4,6 | 620 px |
| 6 | `#publicos` — cards paciente / dentista | 5,3 | 1.588 px |
| 7 | `#processo` — "Como funciona", três cards | 7,2 | 663 px |
| 8 | `#duvidas` — nove perguntas em acordeão | 8,0 | 1.268 px |
| 9 | `#contato` — fecho + formulário | 9,5 | 1.511 px |
| 10 | `#local` — mapa, endereço, horários | 11,3 | 1.031 px |

Total: 14 telas de rolagem no celular, 10,5 no desktop.

### 1.2 Problemas de conversão

**A Home é uma página de roteamento, e o roteamento começa na terceira tela.** A função principal desta página é fazer a pessoa encontrar a própria condição e ir para a rota certa. Entre o hero e os cards de área existe uma seção de 1.478 px cujo título — "Ser ouvido faz parte de ser bem cuidado" — é uma promessa de postura, não uma informação verificável. É o bloco mais caro da página em atenção e o menos acionável.

**A seção de autoridade não se parece com autoridade.** Ela abre com uma frase sobre acolhimento, segue com dois parágrafos de filosofia de atendimento e só então lista as credenciais. O visitante que chegou por indicação e digitou o nome no Google quer, nesta ordem: nome, especialidade, registro, formação, o que ele faz, prova. Está tudo lá, na ordem inversa da dúvida.

**Não existe prova social em lugar nenhum.** Nem nota, nem relato, nem contagem.

**Não existe tratamento visível de objeção.** As nove perguntas do FAQ são boas e a ordem delas (logística primeiro) está certa. Mas acordeão fechado é conteúdo invisível: quem não clica não lê. As três objeções que mais travam agendamento — "vou sair de lá com cirurgia marcada?", "quanto custa?", "preciso de encaminhamento?" — estão todas colapsadas.

**A bifurcação paciente/dentista custa 1.588 px no meio do funil do paciente.** É útil, mas está exatamente onde o paciente deveria estar avançando para a decisão, e oferece a ele um caminho que não é o dele.

**A faixa editorial `#sua-rotina` não faz trabalho de conversão.** É ritmo visual com foto ilustrativa e um link para `#processo`. Custa 620 px numa página de 14 telas.

**A faixa de confiança carrega atributos, não provas.** "Avaliação antes da indicação", "Opções explicadas com clareza" são afirmações do próprio anunciante. Logo abaixo do hero, o que reduz incerteza é fato verificável: registro, certificação, banca, cidade.

### 1.3 O que eu manteria

- O H1 e a abertura do hero. "Comer, sorrir ou dormir bem deixou de ser simples?" funciona: fala do sintoma na linguagem da pessoa e cobre as cinco rotas sem citar procedimento.
- O bloco `#areas` inteiro — os cards, as três pistas por card (`visualSummary.cues`) e os rótulos de ação contextualizados ("Entender o cuidado da apneia", "Conhecer minhas possibilidades"). É a melhor peça de UX da Home.
- O `#processo` de três passos, com correção de posição.
- A ordem dos nove FAQs: logística antes de clínica.
- A seção de localização no fim, com o mapa.
- O par de CTAs do hero (ação principal + "encontrar o que me incomoda"), que atende os dois estados de consciência que chegam aqui.

### 1.4 O que eu removeria

- **`#sua-rotina` (faixa editorial).** Sai da Home. O papel dela — consequência emocional — já é feito pelo fecho em `#contato`, e nas páginas de tratamento ela tem função real. Aqui é rolagem.
- **A versão longa de `#sobre`.** Não some: encolhe para um bloco compacto, e o conteúdo completo migra para a nova página `/sobre`.
- **Os atributos genéricos da faixa de confiança.** Trocados por fatos.
- **A versão em cards de `#publicos`.** Vira uma faixa de uma linha.

### 1.5 O que eu mudaria de posição

| Seção | De | Para | Motivo |
|---|---|---|---|
| `#areas` | 4ª | **3ª** | É o trabalho principal da Home. Ganha 1,7 tela de antecipação no celular. |
| `#sobre` (compacto) | 3ª | **4ª** | Autoridade continua alta, logo após o roteamento, sem bloquear quem já sabe o que quer. |
| `#processo` | 7ª | **6ª** | Responder "como funciona a consulta" antes de pedir contato, não depois. |
| `#publicos` | 6ª | **10ª**, compacto | Público diferente, decisão diferente. Sai do meio do funil do paciente. |
| `#local` | 10ª | mantém no fim | Correto no fim, mas o endereço resumido sobe para `#processo`. |

### 1.6 Estrutura final recomendada

1. **Hero** — identidade, H1 de sintoma, três credenciais duras, CTA principal, CTA "encontrar o que me incomoda", linha de contexto (particular · João Pessoa · orientação antes de decidir).
2. **Faixa de prova** — CRO-PB 12753 · Certificação Board FBCOMS 2026 · Banca de examinadores · João Pessoa · *(nota do Google, quando existir)*. Estática e legível, não animada.
3. **`#areas` — "O que trouxe você até aqui?"** — cinco cards, inalterados.
4. **`#sobre` compacto** — foto, nome, especialidade, registro, três credenciais, o dado "1 de 29" em destaque, certificado, link "Conhecer a formação completa" → `/sobre`.
5. **`#casos` — "Os casos que chegam aqui" *(nova)*** — quatro a seis tipos de situação conduzidos, em linguagem de situação e não de procedimento, sem imagem de paciente. É onde a complexidade fica demonstrada sem promessa.
6. **`#processo` — "Como funciona a primeira consulta"** — três passos + linha compacta de local, horário e caráter particular.
7. **`#prova` — avaliações e relatos *(nova)*** — bloco de prova social. Formato e fontes na seção 7.
8. **`#objecoes` — "O que costuma travar a decisão" *(nova)*** — quatro objeções abertas, visíveis, em texto corrido. Ver 1.7.
9. **`#duvidas`** — FAQ em acordeão, com as nove perguntas atuais menos as que subirem para `#objecoes`.
10. **`#publicos` compacto** — uma faixa, duas frases, dois links: "Sou paciente" / "Sou dentista e quero discutir um caso".
11. **`#contato`** — fecho emocional + WhatsApp + formulário.
12. **`#local`** — mapa, endereço, horários, CTA de localização.

### 1.7 Justificativa de cada alteração

**Áreas antes de Sobre.** A Home recebe três tipos de visitante: quem busca o nome (indicação), quem busca a condição e quem vem de anúncio. Só o primeiro precisa da biografia antes de qualquer coisa — e esse visitante tem o menu, a faixa de prova e o link para `/sobre`. Os outros dois precisam encontrar a própria condição. Colocar o roteamento em terceiro atende a maioria sem abandonar a minoria.

**Sobre compacto com link para a página cheia.** Biografia longa numa Home cobra o preço da rolagem de todos para servir a alguns. Numa página própria, ela serve exatamente quem a procurou, ranqueia para busca por nome e vira o destino do link da bio do Instagram.

**"1 de 29" com tratamento visual próprio.** É o único dado do projeto que nenhum concorrente da praça pode copiar. Não é promessa de resultado: é fato sobre a posição do profissional dentro da própria especialidade — exatamente o tipo de prova que as regras de publicidade permitem e que o público de caso complexo entende. Deve vir sempre com ano e fonte, e precisa ser confirmado documentalmente antes de ir ao ar.

**Seção de casos.** O posicionamento do projeto é "casos que exigem avaliação especializada". Hoje o site afirma isso e não mostra. Uma lista de tipos de caso conduzidos — "reabilitação interrompida por falta de osso", "dor articular que não respondeu ao tratamento conservador", "mordida que o aparelho sozinho não resolve" — demonstra escopo e complexidade sem tocar em imagem, resultado ou promessa. É a versão eticamente segura do portfólio.

**Processo antes de prova e de objeção.** A sequência final é: entendi o que existe (áreas) → sei quem conduz (sobre) → vejo que ele lida com casos como o meu (casos) → sei o que acontece se eu marcar (processo) → outras pessoas confirmam (prova) → minhas últimas travas são respondidas (objeções e FAQ) → ação. Cada bloco responde a dúvida que o bloco anterior abre.

**Objeções abertas antes do FAQ.** As quatro perguntas que mais impedem o agendamento merecem estar visíveis: "Vou sair da consulta com uma cirurgia marcada?" (não), "Preciso de encaminhamento de outro dentista?" (não), "Como funciona o atendimento particular?" (a equipe informa o valor da consulta antes de marcar), "E se já me disseram outra coisa?" (segunda opinião é motivo legítimo de consulta). O acordeão continua para o resto.

**Públicos compacto e no fim.** O dentista tem um item no menu, um link no rodapé e uma página própria. Ele não precisa de 1.588 px no meio da leitura do paciente.

---

## 2. Páginas de tratamento

Cinco rotas com o mesmo esqueleto e duas variantes de ordem. A análise vale para as cinco; as diferenças por rota estão em 2.8.

### 2.1 Estrutura atual

**Variante A — apneia, DTM/ATM, reconstrução:**
Hero → Faixa → Dor → Consequência (editorial) → Objeções → Método → Autoridade → Prova (vazia) → Primeira consulta → FAQ → Contato

**Variante B — implantes, ortognática:**
Hero → Faixa → Dor → Consequência → Método → Jornada → Objeções → Autoridade → Prova (vazia) → Primeira consulta → FAQ → Contato

Profundidade medida em DTM/ATM, celular 390 px: dor 1,2 · consequência 1,9 · objeções 2,7 · método 4,4 · **autoridade 6,2** · consulta 7,7 · FAQ 9,1 · contato 10,4. Total: 13,7 telas. Em implantes no desktop, a autoridade cai exatamente na metade da página.

### 2.2 Problemas de conversão

**Reconhecimento demais antes de qualquer resposta.** Dor (1,2) e consequência (1,9) somam quase 1,5 tela dizendo à pessoa o que ela já sabe: que dói, que incomoda, que atrapalha. Reconhecimento é necessário, mas tem rendimento decrescente rápido — e aqui ocupa o dobro do espaço que precisaria.

**Autoridade na metade da página.** Em 6,2 telas, boa parte do tráfego já saiu. Quem ficou leu quatro seções de conteúdo clínico sem saber quem assina.

**Prova social ausente, e o componente que existe não resolveria.** `TreatmentProof` só renderiza se `testimonials` tiver conteúdo, e está vazio nas cinco rotas. O formato previsto é depoimento genérico sobre atendimento. Numa página de reconstrução óssea, o que reduz risco não é "fui bem atendido" — é evidência de que casos como o daquela pessoa já foram conduzidos.

**Nenhum CTA entre a tela 1 e a tela 7,7.** O método é o ponto alto da página: é onde a pessoa entende por que aquele profissional pensa diferente. Sair dali sem oferecer o próximo passo desperdiça o pico.

**Jornada só existe em duas rotas.** Implantes e ortognática têm `journey`. Apneia, DTM/ATM e reconstrução não. As três que não têm são justamente aquelas em que a pessoa mais precisa saber "o que acontece depois que eu marco" — porque nas três o desfecho é incerto por natureza.

**O link secundário do hero é fraco.** "Como funciona a consulta" é o segundo melhor CTA possível nesta página — atende quem não está pronto para falar mas quer saber no que está se metendo — e está como link de texto simples.

**As páginas não se conversam.** Só implantes ↔ reconstrução têm `crossLink`. Quem chega em DTM/ATM com uma questão de mordida, ou em apneia com um caso esquelético, não encontra a ponte.

### 2.3 O que eu manteria

- O H1 em forma de pergunta sobre o sintoma, com `titleHighlight`. É a melhor abertura possível para tráfego de busca por sintoma.
- O `primaryCta` específico por página ("Quero saber se posso fazer implante", "Quero investigar minha dor na mandíbula"). Já está certo e é raro na praça.
- A `note` do hero ("Sem compromisso com cirurgia", "Você não precisa chegar decidido a operar"). É reversão de risco na primeira dobra, e funciona.
- O bloco de método inteiro, incluindo o `methodHighlight`. É o diferencial legítimo do projeto.
- O bloco de objeções no formato crença → realidade, sem desqualificar quem atendeu antes.
- O bloco de primeira consulta, especialmente o `preparation` que desobriga ("para marcar, basta a dor que você sente"). É um dos melhores textos do site.
- Os seis FAQs e o critério de não repetir o que as objeções já responderam.
- A lógica das duas variantes de ordem — objeções antes do método para quem chega com ideia formada; depois da jornada para quem tem ansiedade de processo. Está bem pensada e deve ser preservada.

### 2.4 O que eu removeria

- **A seção de consequência como bloco autônomo.** O texto é bom e continua existindo; o que sai é a seção separada de 620 a 706 px. Ele vira o fecho da própria seção de sintomas, em parágrafo destacado. Economia: cerca de uma tela no celular.
- **O componente `TreatmentProof` no formato atual.** Substituído por um bloco de prova com conteúdo real (seção 7) e, onde couber, por um bloco de casos (seção 8).

### 2.5 O que eu mudaria de posição

| Seção | De | Para | Motivo |
|---|---|---|---|
| Autoridade (versão compacta) | tela 6,2 | **tela 1,1** | Responde "quem está falando" antes do conteúdo clínico. |
| Autoridade (versão completa) | tela 6,2 | mantém, após os casos | Continua fazendo o trabalho pesado antes do fecho. |
| Consequência | seção própria | dentro da seção de dor | Um bloco de reconhecimento, não dois. |
| Faixa de destaques | tela 1,1 | funde com a autoridade compacta | Um elemento de credibilidade forte em vez de dois fracos. |

### 2.6 Estrutura final recomendada

1. **Hero** — H1 de sintoma, intro, três selos, CTA principal, CTA secundário "Ver como funciona a consulta" (botão, não link), nota de não compromisso.
2. **Faixa de autoridade compacta** — foto, nome, CRO, Certificação Board, "1 de 29", link "conhecer a formação" → `/sobre`. Funde o que hoje são a faixa de destaques e a primeira metade do bloco de autoridade.
3. **Dor + consequência** — sintomas em lista com ícones, fechando com o parágrafo de consequência destacado. Uma seção, não duas.
4. **Objeções** *(variante A)* — mantém a posição atual para apneia, DTM/ATM e reconstrução.
5. **Método** — mecanismo, `methodHighlight`, pontos de avaliação, motivo visual.
6. **Jornada** — três etapas, **nas cinco rotas**.
7. **Objeções** *(variante B)* — implantes e ortognática mantêm aqui.
8. **CTA intermediário contextual *(novo)*** — faixa curta, uma pergunta e um botão. Ver 2.7.
9. **Casos conduzidos *(novo, onde se aplica)*** — ver seção 8 e o quadro em 2.8.
10. **Autoridade completa** — credenciais, `authorityBody` específico da rota, certificado, contexto do Board.
11. **Prova social específica da condição *(nova)*** — ver seção 7.
12. **Primeira consulta** — como funciona, o que será esclarecido, preparação que desobriga, nota, CTA.
13. **FAQ** — seis perguntas.
14. **Contato** — fecho emocional, WhatsApp, formulário.

### 2.7 O CTA intermediário

Vem logo depois da jornada, no ponto de maior compreensão e menor ansiedade da página. Não repete o rótulo do hero.

| Rota | Pergunta | Rótulo do botão |
|---|---|---|
| Implantes | "Seu osso e sua mordida comportam um implante? É exatamente isso que a avaliação responde." | Quero saber se é possível no meu caso |
| Reconstrução | "A resposta que você recebeu vale para a região que você precisa reabilitar?" | Quero revisar essa informação |
| DTM/ATM | "Sua dor já foi investigada, ou só tratada?" | Quero investigar a origem da dor |
| Ortognática | "Aparelho, cirurgia ou os dois? A diferença está na posição dos maxilares." | Quero entender qual é o meu caso |
| Apneia | "Os seus maxilares participam da sua apneia? Isso precisa ser avaliado junto com o exame do sono." | Quero avaliar essa parte do quadro |

### 2.8 Diferenças por rota

| Rota | Jornada | Bloco de casos | Observação |
|---|---|---|---|
| **Implantes** | já tem | **Sim, prioritário** | A objeção é "é possível no meu caso?". Casos conduzidos respondem isso melhor que qualquer texto. |
| **Reconstrução óssea** | **criar** | **Sim, prioritário** | A pessoa chega com uma negativa de outro profissional. Ver que negativas assim já foram revistas é o argumento mais forte disponível. |
| **Cirurgia ortognática** | já tem | **Sim** | A dúvida é de processo e de mudança facial. Descrever percursos completos (preparo, cirurgia, recuperação, ajuste) reduz o medo do desconhecido. Sem imagem, sem simulação, sem promessa de aparência. |
| **DTM e ATM** | **criar** | **Não** | Dor é subjetiva e o desfecho é variável. Narrar casos aqui vira promessa de alívio. A prova certa nesta rota é a descrição da linha de cuidado e a insistência no conservador. |
| **Apneia do sono** | **criar** | **Não** | O desfecho depende da equipe do sono. Um caso aqui sugeriria que a cirurgia resolve apneia, contradizendo o próprio conteúdo da página. |

Pontes a criar entre rotas (`crossLink`): DTM/ATM ↔ ortognática, apneia ↔ ortognática, ortognática ↔ implantes.

---

## 3. Página Sobre — a que falta

Hoje não existe `/sobre`. A biografia é uma âncora na Home (`/#sobre`), e o menu aponta para ela. Isso deixa três coisas na mesa:

1. **Busca por nome.** Quem recebe uma indicação digita "Adriano Rocha Germano". Uma página dedicada ranqueia para isso melhor que uma âncora.
2. **Link da bio do Instagram.** O perfil profissional precisa de um destino que apresente o profissional, não de uma home de condições.
3. **Sinal de autoria qualificada em conteúdo de saúde.** Uma página `Person` com formação, credenciais e `sameAs` é o sinal mais direto que se pode dar ao Google num tema sensível.

### 3.1 Estrutura atual resumida

Seção `#sobre` da Home: título sobre acolhimento, dois parágrafos de filosofia de atendimento, duas credenciais, contexto do Board, link para o certificado, link para as áreas. Cerca de 1.478 px no celular.

### 3.2 Problemas de conversão

Além dos já citados: a seção responde "como ele atende" antes de "quem ele é", invertendo a ordem da dúvida de quem está em modo de verificação. E o certificado — a prova documental mais forte do site — aparece como imagem lateral sem explicação do que significa. A maioria dos pacientes não sabe o que é um Board, nem por que a banca de examinadores importa.

### 3.3 O que eu manteria

Os dois parágrafos sobre como a consulta começa pela história da pessoa. É bom texto e tem função: migra para a metade inferior da nova página, depois das credenciais.

### 3.4 O que eu removeria da Home

A versão longa, conforme 1.4.

### 3.5 O que muda de posição

Todo o conteúdo biográfico migra para `/sobre`. A Home fica com o resumo e o link. A âncora `#sobre` continua existindo, apontando para o bloco compacto, para não quebrar os links do menu.

### 3.6 Estrutura recomendada para `/sobre`

1. **Hero** — foto profissional, nome completo, especialidade, CRO-PB e CRO-RN, uma frase de posicionamento, CTA discreto.
2. **Faixa de credenciais duras** — Certificação Board FBCOMS 2026 · banca de examinadores · 1 de 29 no Brasil · áreas de atuação · João Pessoa.
3. **O que é essa certificação, e por que ela importa para você** *(nova)* — três a quatro parágrafos explicando o Board do Colégio Brasileiro de CTBMF, o que é a banca de examinadores e o que isso diz sobre a formação. Sem esse texto, a maior prova do site continua sendo um documento que o paciente não sabe ler.
4. **Formação e titulação** — graduação, residência, títulos, docência, associações, congressos. **Depende de material do cliente.**
5. **Certificado** — documento ampliável, com legenda e ano.
6. **Como ele conduz uma avaliação** — o texto que hoje está na Home.
7. **Planejamento e recursos utilizados** — nomear o que é usado e explicar a função ("tomografia de feixe cônico serve para medir volume ósseo antes de definir a posição do implante"). Nunca "tecnologia de ponta". **Depende de material do cliente.**
8. **Atuação em conjunto** — relação com dentistas, ortodontistas e médicos do sono; link para `/para-dentistas`.
9. **Prova social**.
10. **Áreas de atuação** — cinco links.
11. **Contato** — formulário e WhatsApp.

### 3.7 Justificativa

A página Sobre é a única do site cujo visitante já está convencido do problema e está avaliando **a pessoa**. Não precisa de dor, nem de mecanismo, nem de objeção clínica: precisa de densidade de prova. É também a página que mais se beneficia de fotografia real — do profissional e do consultório.

Detalhe técnico que acompanha: schema `Person` com `hasCredential`, `alumniOf` e `sameAs`, além do `MedicalWebPage`.

---

## 4. Para dentistas

### 4.1 Estrutura atual

Hero → Faixa → "Quando conversar" (dores do profissional) → Objeções → "Atuação conjunta" (lista de casos) → Autoridade → Fluxo em quatro etapas → FAQ → Contato.

### 4.2 Problemas de conversão

**A página perdeu a espinha.** A revisão de setembro removeu, com razão, a promessa "seu paciente continua sendo seu" — era um compromisso sobre comportamento futuro que o site não pode garantir. Mas nada ocupou o lugar dela, e o medo que ela endereçava é o medo número um do encaminhador. O substituto correto não é outra promessa: é a **descrição do protocolo de devolutiva** — o que é comunicado, em que momento, por qual canal. Processo é verificável; promessa não é.

**Falta o escopo negativo.** O que mais tranquiliza um clínico é saber o que o cirurgião **não** vai fazer: não assume a reabilitação protética, não conduz a ortodontia, não segue com o paciente depois da etapa cirúrgica. Hoje isso está implícito em "planejamento com seu dentista". Implícito não tranquiliza.

**Nenhuma prova de que outros dentistas já encaminham.** É a página onde a prova social é mais fácil e menos sensível: depoimento de colega não é depoimento de paciente, não envolve dado de saúde e não esbarra nas mesmas restrições. Duas ou três frases de dentistas encaminhadores, com nome e CRO, valem mais aqui do que qualquer credencial.

**A autoridade é a mesma da página de paciente.** O colega avalia outra coisa: produção acadêmica, banca, docência, tipo de caso, recursos de planejamento. O bloco deveria ser reescrito para esse leitor.

**Sem canal profissional separado.** O briefing prevê e continua pendente. Um dentista não quer entrar na mesma fila do paciente.

### 4.3 O que eu manteria

Hero, aviso de não enviar dados identificáveis por canal aberto (bom, correto e raro), lista de tipos de caso, fluxo de quatro etapas, FAQ profissional e o formulário com o aviso sobre dados do paciente.

### 4.4 O que eu removeria

Nada estrutural. A seção de objeções pode encolher para três itens, cedendo espaço ao protocolo de devolutiva.

### 4.5 O que mudaria de posição

A autoridade sobe: vem logo depois de "quando conversar", antes das objeções. O colega decide pela formação antes de se preocupar com o processo.

### 4.6 Estrutura final recomendada

1. Hero — canal profissional, CTA "Discutir um caso", aviso de dados.
2. Faixa de credenciais — em registro técnico (Board, banca, docência, publicações quando houver).
3. Quando conversar — as quatro situações clínicas.
4. **Autoridade técnica** *(sobe)* — formação, banca, recursos de planejamento, tipos de caso.
5. **Escopo: o que recebo e o que devolvo** *(nova)* — duas colunas explícitas.
6. **Protocolo de devolutiva** *(nova)* — o que é informado ao encaminhador, quando e como. Substitui a promessa removida por processo descritível.
7. Objeções — três itens.
8. Fluxo em quatro etapas.
9. **Prova entre colegas** *(nova)* — relatos de dentistas encaminhadores, com nome e CRO, mediante autorização.
10. FAQ profissional.
11. Contato — com canal profissional dedicado quando existir.

### 4.7 Justificativa

Um dentista encaminha por confiança técnica e por previsibilidade de relacionamento. A página cobre bem a primeira e é vaga na segunda. Escopo explícito e protocolo de devolutiva resolvem isso sem prometer nada que dependa da decisão do paciente. E a prova entre pares, nesta página, é o argumento mais eficiente do site inteiro — porque o leitor sabe avaliar quem está falando.

---

## 5. Demais páginas

### 5.1 `/obrigado`

Estrutura atual: hero de confirmação, três passos do que vai acontecer, CTA de WhatsApp, retorno ao site. A ordem está certa; faltam três acréscimos de baixo custo, porque esta é a página de maior engajamento do funil e hoje ela encerra a conversa:

- **"Salve o número"** — instrução para adicionar o contato da equipe à agenda, para que a mensagem de retorno não chegue de desconhecido. Reduz perda de lead na etapa mais cara.
- **"Enquanto isso"** — dois ou três links úteis: como funciona a consulta, o que levar, Instagram.
- **Reforço do prazo** — "horário comercial" já está; vale dizer em quanto tempo, quando o dado existir.

### 5.2 `/politica-de-privacidade`

Sem alterações de conversão. Precisa dos dados finais do controlador antes de publicar.

### 5.3 O que não recomendo criar

- Página de convênios — não se aplica, e já está vedada no escopo.
- Blog, nesta fase. Sem rotina de produção definida, blog parado envelhece o site. Se houver produção, o formato certo para esta especialidade é conteúdo de decisão ("o que perguntar antes de aceitar uma indicação de cirurgia"), não conteúdo de volume.
- Página de tecnologia separada. O conteúdo cabe em `/sobre`.

---

## 6. Sistema de CTAs

### 6.1 O problema atual

Nas páginas de tratamento, o mesmo rótulo (`primaryCta`) aparece três vezes: hero, primeira consulta e fecho. Na Home, "Quero entender meu caso" aparece no cabeçalho, no hero, nos cards de público, no fecho e no rodapé. Quem não clicou no primeiro não clica no terceiro idêntico — botão repetido não adiciona persuasão, só ocupa espaço.

### 6.2 Escada de compromisso

O rótulo escala junto com o que a pessoa já sabe. Quanto mais fundo na página, mais concreto o convite pode ser:

| Profundidade | Estado do visitante | Rótulo |
|---|---|---|
| Hero | Não sabe se é o lugar certo | "Quero entender meu caso" / `primaryCta` da rota |
| Hero, secundário | Não quer falar ainda | "Ver como funciona a consulta" |
| Após o método | Entendeu o raciocínio | "Quero saber se isso se aplica a mim" |
| Após casos e prova | Confia no profissional | "Quero uma avaliação do meu caso" |
| Após a primeira consulta | Sabe o que vai acontecer | **"Quero agendar minha avaliação"** — única ocorrência da palavra agendar |
| FAQ | Tem uma dúvida específica | "Tenho outra dúvida" |
| Flutuante | Qualquer momento | "Falar com a equipe" |

### 6.3 Recomendações adicionais

- **Barra fixa no celular**, com duas ações (contato + "como funciona"), em vez apenas do botão flutuante. Em páginas de 13 a 14 telas, o custo de rolar de volta é real. A barra deve sumir quando o formulário entra em cena, como o botão flutuante já faz.
- **Clique para ligar.** O público de implantes e prótese tende a ser mais velho e a preferir telefone. Hoje o telefone só aparece como texto na seção de localização. Quando o número real existir, ele deve ser um link `tel:` no cabeçalho e na localização.
- **Nunca usar "agendar" nos CTAs de topo.** O formulário não confirma horário, e o site já diz isso. Prometer agendamento no botão e negar no texto é atrito desnecessário.

---

## 7. Prova social — o que é possível e onde entra

### 7.1 Hierarquia de fontes, da mais segura à mais sensível

1. **Avaliações do Google (Perfil da Empresa).** Conteúdo de terceiro, em plataforma pública, não produzido pelo anunciante. É a fonte mais defensável e a mais reconhecida pelo visitante. **Prioridade máxima**, e hoje o perfil sequer está ativo. *(Observação técnica: não declarar `aggregateRating` no schema com avaliações do próprio site — o Google ignora ou penaliza review markup autodeclarado para negócio local. A nota deve ser exibida como conteúdo, com link para o perfil.)*
2. **Relatos de pacientes em texto, sem identificação e com autorização registrada.** É o que o plano de comunicação do projeto já previa. Devem falar de **experiência de atendimento e de compreensão do caso**, nunca de resultado de procedimento.
3. **Relatos de dentistas encaminhadores, com nome e CRO.** Baixa sensibilidade, alta persuasão — na página profissional.
4. **Números de atividade**, se verificáveis: tempo de atuação, casos conduzidos por área, profissionais parceiros. Só com base real; contador inventado destrói mais do que constrói.
5. **Antes e depois: fora.** Vedado na publicidade odontológica e já bloqueado no briefing do projeto.

### 7.2 Onde cada bloco entra

| Página | Posição | Formato |
|---|---|---|
| Home | Entre "como funciona a consulta" e as objeções | Nota do Google + três relatos curtos + link para o perfil |
| Tratamentos | Entre autoridade completa e primeira consulta | Dois a três relatos **daquela condição** + nota |
| Sobre | Depois da formação | Bloco maior, com mais relatos |
| Para dentistas | Antes do FAQ | Relatos de colegas, com nome e CRO |
| Hero (todas) | Linha discreta abaixo dos selos | Só a nota e a contagem, a partir de 10 avaliações |

**Por que depois da autoridade e antes do processo.** Credencial responde "ele é qualificado?"; prova social responde "ele é bom com gente como eu?". As duas juntas formam um bloco de confiança. Colocar prova antes da credencial inverte a ordem em que este público decide — em cirurgia, título vem antes de opinião.

### 7.3 Enquanto não houver material

Não preencher com relato inventado — o projeto acertou em esvaziar os depoimentos de demonstração. O espaço pode ser ocupado temporariamente pelo bloco de casos (seção 8) e pela explicação do Board (3.6), que são prova documental e de escopo.

---

## 8. Casos clínicos — formato compatível e onde vale

### 8.1 O formato

Antes e depois está vedado. Imagem de procedimento, instrumental e tecido também. O que resta, e funciona:

**Narrativa de condução, sem imagem e sem identificação:**

> **A situação** — o que a pessoa trazia quando chegou.
> **O que a avaliação encontrou** — o achado que mudou a leitura do caso.
> **O que foi discutido** — as opções apresentadas, inclusive as descartadas.
> **Como seguiu** — a conduta adotada, em linguagem de processo.

Três regras não negociáveis: nenhum dado que identifique a pessoa, nenhuma afirmação de resultado garantido, e nota visível de que cada caso é individual e que a conduta depende de avaliação.

Esse formato faz o que o antes/depois faria — demonstrar capacidade — sem prometer repetição de resultado. Para casos complexos ele é inclusive mais persuasivo: mostra raciocínio clínico, que é exatamente o que o posicionamento do site vende.

### 8.2 Onde vale e onde não vale

- **Reconstrução óssea — vale muito.** A pessoa chega com uma negativa. Ver que negativas semelhantes foram revistas é o argumento central da página.
- **Implantes — vale muito.** A objeção é de viabilidade pessoal.
- **Ortognática — vale.** O medo é de processo e de face. Narrar o percurso completo reduz o desconhecido. Sem simulação de aparência.
- **DTM/ATM — não vale.** Dor é subjetiva; caso vira promessa de alívio.
- **Apneia — não vale.** O desfecho é multidisciplinar; um caso aqui contradiz o próprio texto da página.
- **Home — versão coletiva.** Não casos individuais, mas "os tipos de caso que chegam aqui". Demonstra escopo sem entrar no terreno do resultado.

### 8.3 Dependência

Este bloco só existe com material do próprio cirurgião: casos reais, desidentificados por ele, redigidos e aprovados por ele. Não é conteúdo que se escreva a partir do site.

---

## 9. O site parece "mais uma clínica odontológica"?

Não. E o risco real é o oposto.

A direção editorial é sóbria, o tom é técnico e a recusa em prometer resultado já separa este site da praça de João Pessoa mapeada na auditoria. O problema não é parecer comercial demais — é parecer **institucional demais e impessoal**. Hoje o site transmite "aqui se pensa direito" e ainda não transmite "existe uma pessoa específica aqui, e ela já fez isso muitas vezes".

Três coisas fecham essa distância, em ordem de impacto:

**1. Fotografia real.** É o item isolado de maior efeito. O monograma "ARG" no lugar do rosto, numa marca pessoal, é uma ausência que o visitante sente sem saber nomear. As fotos ilustrativas de fundo recém-adicionadas aos heros ajudam no clima visual, mas fotografia genérica com legenda "imagem ilustrativa" é justamente o que faz um site parecer mais uma clínica. Ela não substitui o retrato do profissional, e quanto mais tempo ficar sozinha no lugar dele, mais o site se parece com os concorrentes que ele está tentando não imitar.

**2. "1 de 29" como manchete de credibilidade.** É o fato mais raro do projeto e está tratado como nota de rodapé.

**3. Evidência de que casos complexos passam por ali.** Seção de casos e prova social. Sem isso, "casos que exigem avaliação especializada" é uma afirmação sobre si mesmo.

Um quarto item, mais barato: **um bloco de critérios**. "O que orienta a conduta aqui" — os critérios de indicação e, principalmente, os de **não** indicação. Nenhum concorrente publica quando não opera. Publicar isso é diferenciação construída sobre método, que é a única que este mercado permite.

---

## 10. Ordem de implementação

### Antes de tudo — sem isso, nada acima é medível

1. Número real do WhatsApp e `FORM_WEBHOOK_URL`. Hoje o canal principal não existe.
2. Endereço, telefone e horários reais; sair do modo demonstração e liberar indexação.
3. Perfil da Empresa no Google ativo e recebendo avaliações.

### Fase 1 — estrutura, sem depender de material novo

4. Home: mover `#areas` para a terceira posição; encolher `#sobre`; remover `#sua-rotina`; compactar `#publicos` e mandá-lo para o fim.
5. Home: criar a seção de objeções abertas, extraindo do FAQ as quatro que travam decisão.
6. Tratamentos: fundir dor e consequência em uma seção.
7. Tratamentos: faixa de autoridade compacta logo após o hero.
8. Tratamentos: CTA intermediário depois da jornada.
9. Tratamentos: criar `journey` para apneia, DTM/ATM e reconstrução.
10. Escada de rótulos de CTA em todas as páginas.
11. Faixa de confiança: trocar atributos por fatos verificáveis.
12. `/obrigado`: "salve o número" e links de espera.
13. Pontes entre rotas (`crossLink`) nos três pares indicados.

### Fase 2 — depende de material do cliente

14. Fotografia profissional e do consultório. **Maior impacto isolado da lista.**
15. `/sobre` como página própria, com currículo completo e a explicação do que é a certificação Board.
16. Blocos de prova social nas cinco rotas, na Home, em `/sobre` e em `/para-dentistas`.
17. Blocos de casos em reconstrução, implantes e ortognática.
18. `/para-dentistas`: escopo explícito, protocolo de devolutiva, prova entre colegas, canal profissional separado.
19. Barra fixa de contato no celular e clique para ligar.

### Fase 3 — medição

20. Definir o circuito de retorno: registrar quais contatos viraram consulta e quais viraram caso. A métrica principal definida na auditoria — consultas qualificadas por visitante — não existe sem esse registro manual da equipe, e sem ela qualquer teste A/B mede clique, não paciente.
21. Só então testar, uma variável por vez: proposta do hero, posição da autoridade, ordem das objeções.

---

## 11. O que preciso do cliente

Em ordem de bloqueio:

1. Número de WhatsApp para pacientes, e outro para dentistas se houver.
2. Destino do formulário (e-mail ou webhook).
3. Endereço, telefone, horários.
4. **Fotografia profissional** — retrato e, se possível, consultório e atendimento.
5. Currículo completo: graduação, residência, títulos, docência, associações, congressos, publicações.
6. Perfil da Empresa no Google ativo, para viabilizar avaliações.
7. Confirmação documental do dado "29 avaliadores no Brasil".
8. Relatos de pacientes com autorização registrada, se houver.
9. Relatos de dentistas encaminhadores, com nome e CRO.
10. Casos para as narrativas de condução — desidentificados, redigidos e aprovados por ele.
11. Descrição dos recursos de planejamento efetivamente utilizados.
12. Validação ética de tudo que for prova (relatos e casos) antes da publicação.

---

## 12. Resumo

| | Hoje | Recomendado |
|---|---|---|
| **Home** | Hero → faixa → sobre longo → áreas → editorial → públicos → processo → FAQ → contato → local | Hero → faixa de prova → **áreas** → sobre compacto → **casos** → processo → **prova social** → **objeções abertas** → FAQ → públicos compacto → contato → local |
| **Tratamentos** | Hero → faixa → dor → consequência → (objeções/método) → autoridade → prova vazia → consulta → FAQ → contato | Hero → **autoridade compacta** → dor+consequência → (objeções/método) → **jornada em todas** → **CTA intermediário** → **casos** → autoridade completa → **prova** → consulta → FAQ → contato |
| **Sobre** | Não existe | Página própria: hero com foto → credenciais → **o que é o Board** → formação → certificado → método → recursos → atuação conjunta → prova → áreas → contato |
| **Dentistas** | Hero → faixa → quando → objeções → atuação → autoridade → fluxo → FAQ → contato | Hero → faixa técnica → quando → **autoridade** → **escopo** → **devolutiva** → objeções → fluxo → **prova entre colegas** → FAQ → contato |

As três mudanças que mais devem alterar o resultado, se fosse para escolher apenas três:

1. **Foto real e `/sobre` com currículo.** Marca pessoal sem rosto e sem formação compete em desvantagem com concorrentes que publicam as duas coisas.
2. **Prova social em todas as páginas, começando pelas avaliações do Google.** É o buraco mais visível da estrutura atual.
3. **Autoridade compacta no topo das páginas de tratamento e CTA intermediário depois do método.** Resolve, de uma vez, a pergunta "quem é" chegando tarde e o pico de interesse sem botão.
