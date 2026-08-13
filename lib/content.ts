/**
 * Data da última revisão editorial do conteúdo clínico. Conteúdo de saúde é
 * YMYL: o Google pondera recência explícita. Quando uma página for revisada
 * sozinha, defina `lastReviewed` só nela.
 */
export const contentLastReviewed = "2026-08-11";

/**
 * Opções do formulário das páginas de tratamento.
 *
 * Roteiam por INTENÇÃO DE CONTATO, nunca por estado de saúde. A versão
 * anterior pedia declarações em primeira pessoa ("Tenho dor…", "Já tenho
 * diagnóstico…"), que são dado pessoal sensível pela LGPD (Art. 5º, II) e
 * exigiriam consentimento específico e destacado (Art. 11). A área clínica já
 * é conhecida pela página onde a pessoa está; o quadro clínico fica para a
 * conversa, fora do formulário.
 */
export const neutralFormOptions = [
  "Quero entender como funciona a avaliação.",
  "Quero saber o que levar na primeira consulta.",
  "Prefiro explicar meu caso pelo WhatsApp.",
  "Outro assunto.",
];

export type TreatmentContent = {
  slug: string;
  lastReviewed?: string;
  /** Trecho do `intro` que recebe destaque visual. Precisa existir no texto. */
  introHighlight?: string;
  navLabel: string;
  eyebrow: string;
  title: string;
  intro: string;
  note: string;
  motif: "air" | "implant" | "layers" | "joint" | "alignment";
  visualSummary: {
    kicker: string;
    title: string;
    cues: [string, string, string];
  };
  recognitionTitle: string;
  recognitionIntro: string;
  situations: string[];
  educationEyebrow: string;
  educationTitle: string;
  educationBody: string[];
  educationPoints: string[];
  processTitle: string;
  processIntro: string;
  process: Array<{ title: string; text: string }>;
  faqs: Array<{ question: string; answer: string }>;
  formQuestion: string;
  formOptions: string[];
  whatsappMessage: string;
  metadata: {
    title: string;
    description: string;
  };
};

export const treatments: Record<string, TreatmentContent> = {
  "apneia-do-sono": {
    slug: "apneia-do-sono",
    introHighlight: "para entender quando isso é relevante",
    navLabel: "Apneia do sono",
    eyebrow: "Respiração e sono",
    title: "Dormir a noite inteira não significa, necessariamente, descansar bem.",
    intro:
      "Em alguns casos, a estrutura dos maxilares e das vias aéreas participa do problema. A avaliação buco-maxilo-facial integra histórico, exames e outros profissionais para entender quando isso é relevante.",
    note:
      "A cirurgia não é a solução para toda apneia. A indicação depende do diagnóstico e de avaliação multidisciplinar.",
    motif: "air",
    visualSummary: {
      kicker: "Sono + via aérea",
      title: "Entender onde a passagem de ar encontra resistência.",
      cues: ["Ronco", "Pausas respiratórias", "Sono não reparador"],
    },
    recognitionTitle: "Sinais que merecem uma investigação cuidadosa",
    recognitionIntro:
      "Um sinal isolado não fecha diagnóstico, mas o conjunto pode indicar a necessidade de avaliação especializada.",
    situations: [
      "Ronco frequente relatado por quem dorme por perto.",
      "Pausas respiratórias percebidas durante o sono.",
      "Sono não reparador mesmo após várias horas.",
      "Cansaço ou sonolência durante o dia.",
      "Diagnóstico de apneia com dúvida sobre fatores anatômicos.",
      "Dificuldade de adaptação a tratamentos já indicados.",
    ],
    educationEyebrow: "Entender o mecanismo",
    educationTitle: "Respiração, anatomia e sono precisam ser analisados juntos.",
    educationBody: [
      "A posição dos maxilares, o espaço das vias aéreas e outros fatores podem influenciar a passagem de ar durante o sono.",
      "A avaliação não substitui o acompanhamento do médico do sono. Ela acrescenta a análise facial e esquelética quando existe uma possível participação anatômica.",
    ],
    educationPoints: [
      "Histórico e sintomas.",
      "Exames de sono disponíveis.",
      "Análise facial e das vias aéreas.",
      "Integração com outros profissionais.",
    ],
    processTitle: "A decisão começa pelo diagnóstico, não pela cirurgia.",
    processIntro:
      "Cada etapa reduz incerteza antes que qualquer possibilidade de tratamento seja discutida.",
    process: [
      { title: "Escuta clínica", text: "Entender sintomas, tratamentos anteriores e impacto na rotina." },
      { title: "Exames", text: "Analisar estudos do sono e imagens quando forem necessários." },
      { title: "Integração", text: "Relacionar os achados com a avaliação de outros profissionais." },
      { title: "Plano individual", text: "Explicar possibilidades, limites e próximos passos aplicáveis ao caso." },
    ],
    faqs: [
      {
        question: "Todo ronco significa apneia do sono?",
        answer:
          "Não. O ronco pode ter diferentes causas. O diagnóstico de apneia depende de avaliação clínica e exames apropriados.",
      },
      {
        question: "Qual é a relação do cirurgião buco-maxilo-facial com a apneia?",
        answer:
          "O cirurgião avalia fatores faciais e esqueléticos que podem participar da obstrução das vias aéreas, sempre dentro de uma investigação mais ampla.",
      },
      {
        question: "Cirurgia é sempre necessária?",
        answer:
          "Não. Existem diferentes formas de tratamento e a cirurgia é considerada apenas para casos selecionados, depois de diagnóstico e planejamento.",
      },
      {
        question: "Quais exames devo levar?",
        answer:
          "Leve estudos do sono, exames de imagem, relatórios e informações de tratamentos anteriores que já possuir. A equipe orientará se algo adicional for necessário.",
      },
    ],
    formQuestion: "Como podemos ajudar?",
    formOptions: neutralFormOptions,
    whatsappMessage:
      "Olá, gostaria de informações sobre avaliação relacionada à apneia do sono.",
    metadata: {
      title: "Tratamento da Apneia do Sono em João Pessoa",
      description:
        "Entenda quando a anatomia facial pode estar relacionada à apneia do sono e como funciona a avaliação buco-maxilo-facial.",
    },
  },
  "implantes-dentarios": {
    slug: "implantes-dentarios",
    introHighlight: "a posição ideal, a saúde geral e a futura reabilitação",
    navLabel: "Implantes dentários",
    eyebrow: "Implantes dentários",
    title: "Um implante bem planejado começa antes do procedimento.",
    intro:
      "A avaliação considera a condição óssea, a posição ideal, a saúde geral e a futura reabilitação. Quando existe perda óssea, o planejamento também pode envolver técnicas de reconstrução.",
    note:
      "A indicação, a quantidade de etapas e o tempo de tratamento variam conforme as condições de cada pessoa.",
    motif: "implant",
    visualSummary: {
      kicker: "Base + posição + prótese",
      title: "Planejar o implante como parte da futura reabilitação.",
      cues: ["Osso disponível", "Posição 3D", "Futura prótese"],
    },
    recognitionTitle: "Quando vale solicitar uma avaliação",
    recognitionIntro:
      "O planejamento começa pela necessidade funcional e pelas condições que sustentam a futura reabilitação.",
    situations: [
      "Perda de um ou mais dentes.",
      "Uso de prótese com desejo de avaliar outras possibilidades.",
      "Dente com prognóstico desfavorável já avaliado.",
      "Implante anterior que precisa ser reavaliado.",
      "Informação de que pode faltar osso.",
      "Busca por uma segunda avaliação antes de decidir.",
    ],
    educationEyebrow: "Planejamento integrado",
    educationTitle: "O implante é uma parte de um plano maior.",
    educationBody: [
      "Além da presença de osso, é preciso analisar posição, volume, gengiva, saúde geral e como será construída a futura prótese.",
      "Essa visão conjunta ajuda a definir sequência, necessidade de reconstrução e cuidados de acompanhamento.",
    ],
    educationPoints: [
      "Condição óssea e gengival.",
      "Posição tridimensional.",
      "Relação com a futura prótese.",
      "Manutenção a longo prazo.",
    ],
    processTitle: "Da avaliação ao acompanhamento",
    processIntro:
      "O plano é explicado por etapas, sem transformar a consulta em promessa de procedimento.",
    process: [
      { title: "Avaliação", text: "Entender a necessidade, o histórico e as expectativas funcionais." },
      { title: "Diagnóstico", text: "Analisar exames e as condições dos tecidos de suporte." },
      { title: "Planejamento", text: "Definir posição, sequência e relação com a reabilitação." },
      { title: "Acompanhamento", text: "Orientar cuidados e avaliar a evolução em cada fase." },
    ],
    faqs: [
      {
        question: "Como saber se posso receber um implante?",
        answer:
          "A possibilidade depende da avaliação clínica, dos exames e de fatores locais e gerais. A consulta organiza essas informações antes da indicação.",
      },
      {
        question: "A falta de osso impede o implante?",
        answer:
          "Nem sempre. Em casos selecionados, técnicas de reconstrução podem fazer parte do plano. A viabilidade precisa ser avaliada individualmente.",
      },
      {
        question: "O implante e a prótese são feitos no mesmo momento?",
        answer:
          "Isso varia. Condição óssea, estabilidade, tipo de reabilitação e outras características determinam se o tratamento pode ou não combinar etapas.",
      },
      {
        question: "Quanto tempo dura o tratamento?",
        answer:
          "Não existe um prazo único. O tempo depende das etapas necessárias, da resposta biológica e do planejamento definido para o caso.",
      },
    ],
    formQuestion: "Como podemos ajudar?",
    formOptions: neutralFormOptions,
    whatsappMessage:
      "Olá, gostaria de informações sobre avaliação para implantes dentários.",
    metadata: {
      title: "Implantes Dentários em João Pessoa",
      description:
        "Entenda como funciona a avaliação para implantes dentários e quando a reconstrução óssea pode fazer parte do planejamento.",
    },
  },
  "reconstrucao-ossea": {
    slug: "reconstrucao-ossea",
    introHighlight: "podem criar novas possibilidades em casos selecionados",
    navLabel: "Reconstrução óssea",
    eyebrow: "Reconstrução óssea",
    title: "Ouviu que não há osso suficiente para implante? Isso não encerra a avaliação.",
    intro:
      "Técnicas de reconstrução podem criar novas possibilidades em casos selecionados. A viabilidade, a técnica e as etapas dependem da avaliação clínica e dos exames de cada pessoa.",
    note:
      "Uma nova avaliação não garante que a reconstrução será possível. Ela permite entender limites e alternativas com mais clareza.",
    motif: "layers",
    visualSummary: {
      kicker: "Volume + suporte",
      title: "Reconstruir estrutura antes de pensar na reabilitação.",
      cues: ["Área deficiente", "Ganho de volume", "Tratamento em etapas"],
    },
    recognitionTitle: "Situações que podem exigir um planejamento mais avançado",
    recognitionIntro:
      "Perda óssea tem diferentes causas e extensões. O ponto de partida é compreender o contexto.",
    situations: [
      "Informação de que não existe osso suficiente.",
      "Perda do dente há muitos anos.",
      "Uso prolongado de prótese total.",
      "Perda óssea após doença periodontal.",
      "Implante anterior sem evolução adequada.",
      "Perda óssea relacionada a trauma.",
    ],
    educationEyebrow: "Devolver estrutura",
    educationTitle: "Reconstruir não é aplicar a mesma técnica em todos os casos.",
    educationBody: [
      "Volume, qualidade óssea, região envolvida, saúde geral e objetivo da reabilitação mudam o planejamento.",
      "Por isso, a técnica só pode ser discutida depois que os exames e as condições individuais forem analisados.",
    ],
    educationPoints: [
      "Volume e qualidade óssea.",
      "Extensão da área.",
      "Objetivo da reabilitação.",
      "Número possível de etapas.",
    ],
    processTitle: "Planejamento antes de procedimento",
    processIntro:
      "O tratamento pode envolver uma ou mais fases, sempre explicadas antes da decisão.",
    process: [
      { title: "Consulta", text: "Reunir histórico, tratamentos anteriores e objetivo da reabilitação." },
      { title: "Exames", text: "Avaliar volume, qualidade e anatomia da região." },
      { title: "Estratégia", text: "Comparar possibilidades e explicar limites de cada caminho." },
      { title: "Etapas", text: "Organizar execução, recuperação e momento da reabilitação." },
    ],
    faqs: [
      {
        question: "Quem perdeu muito osso ainda pode receber implante?",
        answer:
          "Alguns casos podem se beneficiar de reconstrução, mas a possibilidade depende da extensão, das condições locais e da saúde geral.",
      },
      {
        question: "Toda reconstrução usa a mesma técnica?",
        answer:
          "Não. Existem abordagens diferentes, escolhidas conforme região, volume necessário, tecidos e objetivo do tratamento.",
      },
      {
        question: "O implante é colocado junto com a reconstrução?",
        answer:
          "Em alguns casos isso pode ser considerado; em outros, as etapas precisam ser separadas. A decisão depende da estabilidade e do planejamento.",
      },
      {
        question: "Como funciona a recuperação?",
        answer:
          "A recuperação varia com a extensão e a técnica. As orientações e os marcos de acompanhamento são definidos individualmente.",
      },
    ],
    formQuestion: "Como podemos ajudar?",
    formOptions: neutralFormOptions,
    whatsappMessage:
      "Olá, gostaria de informações sobre reconstrução óssea.",
    metadata: {
      title: "Reconstrução Óssea em João Pessoa",
      description:
        "Saiba quando a reconstrução óssea pode ser indicada, como o caso é planejado e quais etapas podem fazer parte do tratamento.",
    },
  },
  "dtm-atm": {
    slug: "dtm-atm",
    introHighlight: "pode orientar medidas conservadoras",
    navLabel: "DTM e ATM",
    eyebrow: "DTM e ATM",
    title: "Dor, estalos ou limitação da mandíbula pedem um diagnóstico cuidadoso.",
    intro:
      "O tratamento depende da causa, do tempo de evolução e das alterações encontradas. A avaliação pode orientar medidas conservadoras e, em casos selecionados, procedimentos cirúrgicos.",
    note:
      "Estalo ou dor isolados não determinam cirurgia. O tratamento é construído a partir do diagnóstico.",
    motif: "joint",
    visualSummary: {
      kicker: "Articulação + movimento",
      title: "Descobrir o que limita ou provoca dor na mandíbula.",
      cues: ["Dor", "Estalos", "Abertura limitada"],
    },
    recognitionTitle: "Quando os sintomas interferem na função",
    recognitionIntro:
      "A ATM participa de movimentos cotidianos. Sintomas persistentes ou limitação merecem ser compreendidos.",
    situations: [
      "Dor ou desconforto próximo à articulação.",
      "Estalos acompanhados de dor ou limitação.",
      "Travamento da mandíbula.",
      "Dificuldade para abrir a boca.",
      "Dor ao mastigar.",
      "Sintomas que persistem ou retornam.",
    ],
    educationEyebrow: "Cuidado em etapas",
    educationTitle: "A melhor abordagem depende do que está causando o problema.",
    educationBody: [
      "DTM é um conjunto de alterações que pode envolver articulação, músculos e outros fatores. ATM é a articulação temporomandibular.",
      "A avaliação organiza histórico, exame clínico e imagens quando necessárias para definir se o cuidado será conservador, cirúrgico ou compartilhado.",
    ],
    educationPoints: [
      "Histórico e impacto funcional.",
      "Avaliação dos movimentos.",
      "Exames quando necessários.",
      "Resposta aos cuidados anteriores.",
    ],
    processTitle: "Cirurgia é uma possibilidade, não um destino obrigatório.",
    processIntro:
      "A linha de cuidado acompanha a resposta e avança somente quando os critérios justificam.",
    process: [
      { title: "Entender", text: "Relacionar sintomas, histórico e impacto na função." },
      { title: "Avaliar", text: "Examinar movimentos, articulação e exames disponíveis." },
      { title: "Tratar", text: "Orientar medidas conservadoras quando forem indicadas." },
      { title: "Reavaliar", text: "Acompanhar a resposta e considerar outros procedimentos em casos selecionados." },
    ],
    faqs: [
      {
        question: "Qual é a diferença entre DTM e ATM?",
        answer:
          "ATM é a articulação que conecta a mandíbula ao crânio. DTM é o termo usado para alterações que podem envolver essa articulação, músculos e estruturas relacionadas.",
      },
      {
        question: "Todo problema de ATM precisa de cirurgia?",
        answer:
          "Não. Muitos casos são tratados de forma conservadora. Procedimentos cirúrgicos são considerados apenas quando o diagnóstico e os critérios do caso indicam.",
      },
      {
        question: "Quais exames podem ser necessários?",
        answer:
          "A necessidade varia. Exames de imagem podem complementar o exame clínico quando há suspeita de alteração estrutural.",
      },
      {
        question: "Já fiz tratamento e continuo com sintomas. Posso buscar outra avaliação?",
        answer:
          "Sim. Levar informações sobre tratamentos anteriores e exames ajuda a compreender a evolução e discutir próximos passos.",
      },
    ],
    formQuestion: "Como podemos ajudar?",
    formOptions: neutralFormOptions,
    whatsappMessage:
      "Olá, gostaria de informações sobre avaliação e tratamento de DTM ou ATM.",
    metadata: {
      title: "Tratamento de DTM e ATM em João Pessoa",
      description:
        "Dor, estalos e limitação da mandíbula precisam de diagnóstico adequado. Entenda as possibilidades de tratamento conservador e cirúrgico.",
    },
  },
  "cirurgia-ortognatica": {
    slug: "cirurgia-ortognatica",
    introHighlight: "em casos selecionados",
    navLabel: "Cirurgia ortognática",
    eyebrow: "Função e equilíbrio",
    title: "Cirurgia ortognática é uma jornada de função, planejamento e cuidado.",
    intro:
      "O tratamento reposiciona os maxilares em casos selecionados e costuma ser integrado à ortodontia. Cada fase é planejada para melhorar função, estabilidade e equilíbrio facial.",
    note:
      "A indicação depende de avaliação facial, funcional e ortodôntica. Nem toda alteração de mordida exige cirurgia.",
    motif: "alignment",
    visualSummary: {
      kicker: "Mordida + equilíbrio facial",
      title: "Reposicionar os maxilares com planejamento integrado.",
      cues: ["Função", "Ortodontia", "Planejamento cirúrgico"],
    },
    recognitionTitle: "Situações que podem levar a uma avaliação",
    recognitionIntro:
      "A aparência pode fazer parte da percepção, mas a avaliação começa pela função e pela relação entre os maxilares.",
    situations: [
      "Dificuldade para mastigar ou encaixar a mordida.",
      "Diferença importante entre os maxilares.",
      "Assimetria facial associada a alteração funcional.",
      "Preparo ortodôntico com indicação cirúrgica.",
      "Dificuldades funcionais relacionadas à posição dos maxilares.",
      "Busca por segunda avaliação do planejamento.",
    ],
    educationEyebrow: "Tratamento integrado",
    educationTitle: "Cirurgião e ortodontista planejam partes da mesma jornada.",
    educationBody: [
      "O preparo ortodôntico organiza os dentes para a nova relação dos maxilares. O planejamento cirúrgico define movimentos, objetivos funcionais e cuidados.",
      "A integração entre profissionais ajuda a manter cada etapa conectada ao resultado funcional esperado.",
    ],
    educationPoints: [
      "Análise facial e da mordida.",
      "Planejamento ortodôntico.",
      "Planejamento cirúrgico.",
      "Acompanhamento após a cirurgia.",
    ],
    processTitle: "Uma jornada explicada antes de começar",
    processIntro:
      "Entender as etapas reduz incerteza e ajuda o paciente a participar das decisões.",
    process: [
      { title: "Diagnóstico", text: "Avaliar função, face, mordida e exames." },
      { title: "Preparo", text: "Integrar o planejamento com a ortodontia." },
      { title: "Cirurgia", text: "Executar os movimentos definidos para o caso." },
      { title: "Recuperação", text: "Acompanhar função, adaptação e finalização ortodôntica." },
    ],
    faqs: [
      {
        question: "Para que serve a cirurgia ortognática?",
        answer:
          "Ela corrige relações inadequadas entre os maxilares em casos selecionados, buscando melhorar função, estabilidade e equilíbrio facial.",
      },
      {
        question: "Preciso usar aparelho antes da cirurgia?",
        answer:
          "Na maioria dos planejamentos existe participação da ortodontia, mas a sequência e a duração são definidas individualmente.",
      },
      {
        question: "O resultado é apenas estético?",
        answer:
          "Não. A avaliação considera mastigação, mordida, fala, respiração e outras funções, além das mudanças faciais esperadas.",
      },
      {
        question: "Como funciona a recuperação?",
        answer:
          "A recuperação ocorre por fases e varia conforme os movimentos, a resposta individual e o plano. As orientações são explicadas antes do procedimento.",
      },
    ],
    formQuestion: "Como podemos ajudar?",
    formOptions: neutralFormOptions,
    whatsappMessage:
      "Olá, gostaria de informações sobre avaliação para cirurgia ortognática.",
    metadata: {
      title: "Cirurgia Ortognática em João Pessoa",
      description:
        "Conheça as indicações, o planejamento e as etapas da cirurgia ortognática, do preparo à recuperação.",
    },
  },
};

/**
 * Na home a pessoa escolhe a ÁREA sobre a qual quer conversar — categoria de
 * serviço, do mesmo jeito que aparece no menu. "Dor, estalos ou limitação da
 * mandíbula" saiu porque descrevia sintoma, não área.
 */
export const homeFormOptions = [
  "Implantes dentários.",
  "Reconstrução óssea.",
  "DTM e ATM.",
  "Apneia do sono.",
  "Cirurgia ortognática.",
  "Outro assunto.",
];

export const dentistFormOptions = [
  "Encaminhar um caso de implantes ou reconstrução.",
  "Encaminhar um caso de DTM ou ATM.",
  "Encaminhar um caso de cirurgia ortognática.",
  "Encaminhar um caso relacionado à apneia.",
  "Discutir um caso antes do encaminhamento.",
];
