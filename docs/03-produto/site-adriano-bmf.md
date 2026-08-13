# Especificação do Site — Cirurgia Buco-Maxilo-Facial (Dr. Adriano)

> Documento-base histórico. Para implementação, prevalecem especificacao-ux-copy-visual-todas-as-paginas.md e decisoes-confirmadas-e-formularios.md. Atualização confirmada: implantes no escopo; DTM e ATM com tratamento conservador e cirúrgico conforme o caso; atendimento particular sem convênios; hospitais não serão divulgados; conversão por WhatsApp e formulário.

**Plugue Marketing Solutions** · Agosto de 2026
Documento de construção. Autossuficiente — não exige leitura de outros arquivos.

> Documento relacionado: ../02-estrategia/plano-google-meta-ads-bmf-joao-pessoa.md (estratégia, dados
> de demanda e campanhas). Este aqui trata **só do site**.

---

## 1. Contexto mínimo para quem vai construir

### Quem é o cliente

**Adriano** — cirurgião buco-maxilo-facial em João Pessoa/PB.

| Item | Informação |
| --- | --- |
| Nome completo | ***A COLETAR*** |
| CPF/CNPJ informado | 91405963468 |
| Praça | João Pessoa / PB e região metropolitana |
| Fase do negócio | Início |
| Ferramenta atual | **Apenas WhatsApp** — não tem site |
| **CRO-PB e especialidade registrada** | ***A COLETAR — BLOQUEIA A PUBLICAÇÃO*** |
| **Convênios atendidos** | ***A COLETAR — BLOQUEIA UMA SEÇÃO*** |
| Hospital onde opera | *A coletar* |
| Instagram | *A verificar se existe e está ativo* |

### Portfólio

Implantes dentários e faciais · cirurgia ortognática · reconstrução óssea
avançada maxilofacial com retalhos microcirúrgicos · cirurgia da ATM · prótese da
ATM · cirurgia de tumores benignos e dos sisos · cirurgia da apneia do sono.

### Pontos fortes declarados no briefing

Tratamento humanizado, sólida evidência científica, experiência clínica, boa
formação, tecnologias modernas, equipe treinada.

> **Leitura crítica:** "experiência e humanização" é o que todo cirurgião diz. O
> que diferencia de fato, e que o Código de Ética permite anunciar, é a
> **titulação acadêmica formal** — mestrado, doutorado, docência, residência,
> hospital. **Por isso o currículo é item bloqueante:** sem ele, o eixo de
> autoridade fica genérico e a página perde a única alavanca forte disponível.

### O posicionamento do site

**"O cirurgião que resolve o que a clínica comum não opera."**

Isso vem de um mapeamento de concorrência local:

| Concorrente | Praça | O que faz | Opera ATM? |
| --- | --- | --- | --- |
| Dr. Luécio Melo | João Pessoa | LP de DTM/ATM, **59 anúncios no Google**, 150+ avaliações 5★. Implantodontista, trata com placa e medicação | **Não** |
| Dr. Antonio Carlos Carvalho | João Pessoa | Ortodontista e ortopedia facial, criativo de sintoma no Meta | **Não** |
| OrthoFocus | João Pessoa | LP de ortognática com foco estético, 8 anúncios | Ortognática apenas |

**Nenhum concorrente local opera ATM nem coloca prótese de ATM.** O site precisa
posicionar Adriano no degrau cirúrgico — não disputar o paciente que está
começando tratamento conservador.

### Tom de voz

Técnico, sóbrio e explicativo. O paciente de alta complexidade está assustado e
quer competência. Nada de linguagem promocional.

---

## 2. REGRAS DO CFO — leitura obrigatória antes de escrever qualquer texto

Publicidade odontológica é regida pelo **Código de Ética Odontológica
(CFO-118/2012)** e pela **Resolução CFO-196/2019**. A sanção vai de advertência a
suspensão do exercício, e **a responsabilidade é pessoal do cirurgião**.

### Proibido em qualquer página

| Elemento | Base |
| --- | --- |
| Preço, parcelamento, "a partir de", gratuidade | Art. 44, I |
| Promessa ou garantia de resultado | Art. 44, I e V |
| Imagens durante o procedimento, instrumental identificável, tecido biológico | CFO-196/2019 e Art. 44, XII |
| **Diagnóstico dirigido ao leitor** — afirmar que quem lê tem a condição | Art. 44, V |
| Anunciar especialidade não registrada | Art. 24 e Art. 44, II |
| Criticar técnica de outro profissional | Art. 44, IV |
| Cupom, compra coletiva, promoção | Art. 44, XIV |

### Zona cinzenta — antes e depois

A Resolução 196/2019 permite imagens de diagnóstico e resultado com TCLE, caso
próprio, nome e CRO. Mas o Art. 44, XII do Código ainda veda "antes, durante e
depois" como artifício de captação.

> **Decisão de projeto: não usar antes e depois** até que ele traga orientação
> formal do CRO-PB. Nenhuma página depende disso.

### Obrigatório em todas as páginas

**Nome completo + número do CRO-PB**, visíveis. Sem isso a página nasce
irregular.

### Permitido e recomendado

- Formação acadêmica *stricto sensu*, titulação e docência
- Áreas de atuação e procedimentos, precedidos do título da especialidade
  registrada
- **Convênios atendidos** — expressamente autorizado pelo Art. 43, §1º, IV
- Explicação das condições e dos sintomas, em linguagem acessível
- Depoimentos em texto, **sem identificação do paciente**

### Checklist de cada bloco de texto

1. Tem nome e CRO na página?
2. Menciona preço, parcela ou gratuidade?
3. Promete ou sugere resultado certo?
4. Tem imagem de procedimento em andamento?
5. Afirma que o leitor tem a condição, ou apenas descreve a condição?
6. O procedimento citado está dentro da especialidade registrada?

---

## 3. LGPD — dado de saúde é dado sensível

Sintoma relatado é **dado pessoal sensível** (Lei 13.709/2018, Art. 5º, II).

**Consequências para o site:**

1. **Política de privacidade obrigatória**, informando quais dados são coletados,
   para quê, por quanto tempo e como o titular exerce seus direitos.
2. **Aviso no WhatsApp** na primeira interação, antes de perguntar sintoma.
3. **Não subir lista de pacientes** para criar público semelhante em plataforma
   de anúncio. Usar apenas públicos de engajamento e de visita.

### Aviso sugerido para o WhatsApp

> "Para te orientar melhor, vamos pedir algumas informações sobre seus sintomas.
> Esses dados são usados apenas para o seu atendimento e ficam sob sigilo
> profissional. Tudo bem seguir?"

---

## 4. Arquitetura

```
DOMÍNIO
├── /                            HOME · o profissional
│
├── FASE 1 — sem concorrente local mapeado
│   ├── /apneia-do-sono
│   └── /reconstrucao-ossea
│
├── FASE 2 — terreno disputado, entra depois
│   ├── /cirurgia-atm
│   └── /cirurgia-ortognatica
│
└── FASE 2
    └── /para-dentistas          rede de encaminhamento
```

### Por que essa ordem

Apneia e reconstrução **não têm nenhum concorrente local anunciando**. ATM e
ortognática têm. Começar pelo terreno livre traz resultado mais cedo e mais
barato, enquanto a conta amadurece.

### Origem do tráfego de cada página

| Página | De onde vem quem chega |
| --- | --- |
| **Home** | Busca pelo nome · quem foi indicado por um colega e está conferindo · Perfil da Empresa no Google · bio do Instagram |
| **Apneia** | Google Ads · Meta (criativo de sintoma) |
| **Reconstrução óssea** | Google Ads · Meta |
| **Cirurgia de ATM** | Google Ads (termos cirúrgicos) · Meta |
| **Ortognática** | Google Ads · Meta |
| **Para dentistas** | Meta (campanha de dentistas) · contato direto · material de visita |

---

## 5. PÁGINA 1 — Home

**URL:** `/`
**Objetivo:** apresentar o profissional e dar credibilidade. Distribui para as
páginas de condição.
**Quem chega:** busca pelo nome, indicação, Perfil da Empresa no Google, bio.

### Seções, em ordem

| # | Seção | Conteúdo |
| --- | --- | --- |
| 1 | **Topo** | Nome completo · especialidade registrada · **CRO-PB nº** · foto em consultório |
| 2 | **Quem é** | Cirurgião buco-maxilo-facial. Texto curto e sóbrio |
| 3 | **Formação e titulação** | Graduação, especialização, mestrado, doutorado, residência, docência, hospitais. **É o eixo mais forte permitido** |
| 4 | **O que trata** | Blocos clicáveis para cada condição, levando às páginas respectivas |
| 5 | **Onde atende** | Endereço, hospital, mapa, horário |
| 6 | **Convênios atendidos** | *Só se ele atender. Item bloqueado até confirmação* |
| 7 | **Como funciona a primeira consulta** | Passo a passo. Reduz o receio |
| 8 | **Depoimentos** | Em texto, sem identificação |
| 9 | **Rodapé** | Nome completo, **CRO-PB**, endereço, política de privacidade |

### O que NÃO pode ter
Foto de procedimento · antes e depois · qualquer número de cirurgias realizadas ·
promessa · preço.

### CTA
WhatsApp presente, discreto. A home distribui; a conversão forte fica nas páginas
de condição.

---

## 6. ESTRUTURA PADRÃO das páginas de condição

As quatro páginas de condição seguem **a mesma estrutura de 10 seções**. Muda o
conteúdo, não o esqueleto.

| # | Seção | O que traz |
| --- | --- | --- |
| 1 | **Abertura pelo sintoma** | Descreve o que a pessoa sente, na linguagem dela. **Em terceira pessoa** — ver regra abaixo |
| 2 | **Sinais para se reconhecer** | 6 a 8 sintomas listados |
| 3 | **O que é a condição** | Explicação simples e honesta |
| 4 | **Por que exige um especialista** | O que diferencia o tratamento cirúrgico |
| 5 | **Quem vai te atender** | Formação, titulação, docência, **CRO-PB** |
| 6 | **Como funciona a avaliação** | Passo a passo da primeira consulta |
| 7 | **Convênios atendidos** | *Condicionado à confirmação* |
| 8 | **Depoimentos** | Em texto, sem identificar paciente |
| 9 | **Perguntas frequentes** | Incluir tempo de recuperação e cobertura |
| 10 | **WhatsApp fixo** | Conversão única da página. Sem formulário longo |

### REGRA DE REDAÇÃO — terceira pessoa

A política de Atributos Pessoais do Meta reprova anúncio que **afirme** que a
pessoa tem uma condição de saúde. Como o texto da página alimenta o criativo,
a mesma regra vale aqui por consistência.

| Evitar | Preferir |
| --- | --- |
| "Você sofre com dor na mandíbula?" | "Dor na mandíbula tem causa — e tem tratamento." |
| "Você tem apneia do sono" | "Ronco e cansaço ao acordar podem ter origem na estrutura da face." |

> **Calibragem observada em campo:** um concorrente local roda hoje um anúncio
> ativo que abre com *"Dor no ouvido? Pode ser a ATM"* — segunda pessoa,
> aprovado. A regra real é mais estreita: reprova **afirmar** que a pessoa tem a
> condição; **perguntar** costuma passar. A terceira pessoa fica como padrão de
> segurança, mas não é dogma.

---

## 7. PÁGINA 2 — Apneia do sono · FASE 1

**URL:** `/apneia-do-sono`
**Prioridade:** **primeira a construir.** Nenhum concorrente local mapeado.

### Sintomas para a seção 2
Ronco alto e frequente · pausas na respiração durante o sono · acordar cansado
mesmo dormindo muitas horas · sonolência ao longo do dia · dor de cabeça matinal
· irritabilidade e falta de concentração · queixo retraído · relato do parceiro
sobre engasgos noturnos.

### Ângulo da abertura
Ronco e cansaço são tratados como "sono ruim", mas podem ter **origem
estrutural na face** — e isso tem solução cirúrgica.

### Headline sugerida
> *"Ronco e cansaço ao acordar nem sempre são só sono ruim. Podem ter origem na
> estrutura da face."*

### Cuidado específico
Apneia é condição médica com múltiplas causas. **Não afirmar que a cirurgia é a
solução** — explicar que existe indicação cirúrgica em determinados casos, e que
o diagnóstico é multidisciplinar.

---

## 8. PÁGINA 3 — Reconstrução óssea e implantes complexos · FASE 1

**URL:** `/reconstrucao-ossea`
**Prioridade:** **segunda a construir.** Nenhum concorrente local mapeado.

### Quem chega aqui
Quem **já ouviu de outro profissional** que "não tem osso suficiente para
implante". Chega frustrado, com uma negativa nas costas.

### Sintomas e situações para a seção 2
Foi informado que não tem osso suficiente · perdeu dente há muitos anos ·
usa prótese total e quer implante · teve perda óssea por doença periodontal ·
implante que falhou · perda óssea por trauma · reabsorção da maxila.

### Ângulo da abertura
Perda óssea **não elimina** a possibilidade de implante — existe reconstrução.

### Headline sugerida
> *"Ouviu que não tem osso suficiente para implante? Perda óssea não elimina a
> possibilidade."*

### Cuidado específico
Não criticar o profissional que deu a negativa anterior — **Art. 44, IV veda
criticar técnica de colega**. O enquadramento é "existe outra abordagem", nunca
"o outro estava errado".

---

## 9. PÁGINA 4 — Cirurgia e prótese de ATM · FASE 2

**URL:** `/cirurgia-atm`
**Prioridade:** fase 2. **Terreno disputado — exige ângulo específico.**

### O problema competitivo

Dr. Luécio Melo domina o terreno de DTM em João Pessoa: LP madura, 59 anúncios no
Google, 150+ avaliações 5★. **Mas ele trata com placa e medicação — não opera.**

**Esta página não pode ser uma página genérica de "dor na mandíbula".** Entrar de
frente nesse terreno é comprar briga cara com desvantagem de reputação.

### O ângulo correto

Falar com **quem já tentou o tratamento conservador e não resolveu**, e com quem
tem indicação cirúrgica.

### Headline sugerida
> *"Quando a placa não resolveu: cirurgia e prótese de ATM em João Pessoa."*

### Sintomas e situações para a seção 2
Já usou placa miorrelaxante sem melhora · travamento da mandíbula · estalos com
dor persistente · limitação para abrir a boca · dor que retornou após tratamento
· desgaste articular em exame de imagem · indicação cirúrgica recebida de outro
profissional.

### Cuidado específico
Não desqualificar o tratamento conservador — ele é correto para a maioria dos
casos. O enquadramento é de **degrau seguinte**, não de alternativa melhor.

> Isso importa também porque esses profissionais são a **rede de encaminhamento**
> pretendida. A página não pode soar como disputa.

---

## 10. PÁGINA 5 — Cirurgia ortognática · FASE 2

**URL:** `/cirurgia-ortognatica`
**Prioridade:** fase 2. Concorrência média — OrthoFocus, com foco estético.

### Diferenciação
O concorrente local trabalha o ângulo estético ("perfil perfeito"). A
diferenciação de Adriano é o **ângulo funcional**: mastigação, respiração, fala,
dor.

### Sintomas e situações para a seção 2
Mordida que não fecha · queixo muito retraído ou projetado · dificuldade de
mastigar · assimetria facial · respiração pela boca · desgaste dentário por má
oclusão · tratamento ortodôntico que não resolveu.

### Headline sugerida
> *"Quando a mordida não fecha e o queixo não acompanha, o problema costuma ser
> ósseo — e não se resolve só com aparelho."*

### SEÇÃO OBRIGATÓRIA — Convênio

A pesquisa mostrou que **boa parte da busca da região sobre ortognática é sobre
cobertura de plano de saúde**: `unimed cobre cirurgia ortognática`,
`ortognatica hapvida`, `cirurgia ortognática convênio`.

É a dúvida mais frequente e praticamente sem resposta na internet local. O
Art. 43, §1º, IV **autoriza expressamente** anunciar convênios.

**Esta seção pode ser o maior diferencial da página** — desde que ele atenda
convênio. Deve explicar como funciona a cobertura, não quanto custa.

### Sobre o tempo
Ortognática exige preparo ortodôntico prévio. A página deve explicar isso
honestamente — evita frustração e qualifica o lead.

---

## 11. PÁGINA 6 — Para o cirurgião-dentista · FASE 2

**URL:** `/para-dentistas`
**Objetivo:** converter colega em fonte de encaminhamento.
**Quem chega:** campanha de dentistas no Meta, contato direto, material de visita.

### Por que existe

A frente de encaminhamento tem verba de mídia e nenhum destino além do WhatsApp.
Um colega avaliando para quem mandar um caso **quer ler antes de falar**.

### Público
Clínicos gerais, ortodontistas, implantodontistas e protesistas de João Pessoa.

### Seções, em ordem

| # | Seção | Conteúdo |
| --- | --- | --- |
| 1 | **Abertura** | Dirigida ao colega, não ao paciente |
| 2 | **Quais casos recebo** | Lista objetiva: ATM cirúrgica, ortognática, reconstrução, apneia, tumores, sisos complexos, trauma |
| 3 | **O paciente volta para você** | **A mensagem central.** Após o atendimento, o paciente é restituído ao dentista que encaminhou, com relatório do que foi feito. É o que o Art. 23 do Código determina — e é o medo número um de quem encaminha |
| 4 | **Como é o retorno do caso** | O que o relatório traz e em quanto tempo |
| 5 | **Formação e técnica** | Titulação, planejamento digital, hospitais. Tom entre pares |
| 6 | **Como encaminhar** | Passo a passo simples |
| 7 | **Canal direto** | WhatsApp **separado** do número de paciente |

### Tom
Entre pares. Nada de linguagem de paciente. Aqui vale detalhe técnico que na
página de paciente seria excessivo.

### O que NÃO pode ter
Nenhuma referência, direta ou indireta, a concorrentes locais. Nada que soe como
disputa por paciente.

---

## 12. Requisitos técnicos comuns

| Item | Especificação |
| --- | --- |
| Carregamento | Menos de 2 segundos |
| Responsivo | Prioridade mobile |
| Conversão | Clique no WhatsApp como evento em Google Ads e Meta |
| Pixel | Meta em todas as páginas |
| Tag | Google Ads / GA4 em todas as páginas |
| **Política de privacidade** | Obrigatória — dado de saúde é sensível |
| **Nome e CRO-PB** | **Rodapé de todas as páginas, sem exceção** |
| Formulário | Não usar. A conversão é WhatsApp |
| Imagens | Consultório e equipe. **Nunca procedimento** |

### Públicos de remarketing a criar
Visitantes de cada página de condição, 180 dias, separados por condição.

---

## 13. Perfil da Empresa no Google

Fora do site, mas afeta diretamente o resultado dele.

| Item | Especificação |
| --- | --- |
| Categoria principal | **Cirurgião bucomaxilofacial** — conferir o identificador técnico, não só o nome exibido |
| Categorias secundárias | Por procedimento |
| Link do site | Aponta para a **home**, não para página de condição |
| Fotos | Consultório e equipe. Nunca procedimento |
| Descrição | Com nome e CRO |
| **Avaliações** | **Prioridade alta** — o concorrente local tem 150+ com média 5,0. Perfil zerado vira objeção na comparação |

**Cuidado nas respostas a avaliação:** não confirmar que a pessoa é paciente nem
mencionar o procedimento. Isso viola sigilo e o Art. 44, VI. Responder de forma
genérica.

---

## 14. O que precisa ser coletado antes de construir

| # | Item | Responsável | Status |
| --- | --- | --- | --- |
| 1 | **Nome completo** | Cliente | **BLOQUEIA TUDO** |
| 2 | **Número do CRO-PB e especialidade registrada** | Cliente | **BLOQUEIA A PUBLICAÇÃO** |
| 3 | **Atende convênio? Quais?** | Cliente | **BLOQUEIA 2 SEÇÕES** |
| 4 | **Currículo completo** — graduação, especialização, mestrado, doutorado, residência, docência, hospitais | Cliente | **BLOQUEIA O EIXO DE AUTORIDADE** |
| 5 | Domínio — registrar ou usar existente | Cliente | Bloqueia o início |
| 6 | Fotos profissionais e do consultório | Cliente | Alta |
| 7 | Endereço completo e horário de atendimento | Cliente | Alta |
| 8 | Número de WhatsApp de paciente | Cliente | Alta |
| 9 | Número de WhatsApp para colegas *(separado)* | Cliente | Fase 2 |
| 10 | Hospital onde opera | Cliente | Média |
| 11 | Depoimentos autorizados, sem identificação | Cliente | Média |
| 12 | Parecer do CRO-PB sobre antes e depois | Cliente | Só se quiser usar |

---

## 15. Ordem de construção

| Ordem | Página | Fase | Por quê |
| --- | --- | --- | --- |
| 1º | **Home** | 1 | Sem ela o domínio não funciona e a busca pelo nome não tem destino |
| 2º | **Apneia do sono** | 1 | Nenhum concorrente local mapeado |
| 3º | **Reconstrução óssea** | 1 | Nenhum concorrente local mapeado |
| 4º | **Cirurgia de ATM** | 2 | Terreno disputado, exige ângulo cirúrgico bem construído |
| 5º | **Cirurgia ortognática** | 2 | Com a seção de convênio, que é o diferencial |
| 6º | **Para dentistas** | 2 | Destrava a frente de maior retorno do plano |

---

*Plugue Marketing Solutions · Especificação de construção · Agosto de 2026*
