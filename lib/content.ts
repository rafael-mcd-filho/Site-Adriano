import type { PainIcon } from "@/components/pain-list";

/**
 * Data da última atualização editorial. Não representa revisão ou aprovação
 * clínica pelo profissional. Quando uma página mudar sozinha, defina
 * `lastReviewed` só nela para manter a compatibilidade com o schema existente.
 */
export const contentLastReviewed = "2026-09-13";

/**
 * Opções do formulário das páginas de tratamento.
 *
 * Roteiam por INTENÇÃO DE CONTATO, nunca por estado de saúde. Pedir declaração
 * em primeira pessoa ("Tenho dor…", "Já tenho diagnóstico…") coleta dado
 * pessoal sensível pela LGPD (Art. 5º, II) e exigiria consentimento específico
 * e destacado (Art. 11). A área clínica já é conhecida pela página onde a
 * pessoa está; o quadro clínico fica para a conversa, fora do formulário.
 */
export const neutralFormOptions = [
  "Quero entender como funciona a avaliação.",
  "Quero saber o que acontece na primeira consulta.",
  "Prefiro explicar meu caso pelo WhatsApp.",
  "Outro assunto.",
];

/**
 * Escada de compromisso dos CTAs.
 *
 * O rótulo muda quando a pessoa avançou de etapa mental, nunca por variedade:
 * repetir o mesmo botão três vezes não persuade, e trocar o texto sem que nada
 * tenha mudado na cabeça do leitor só confunde. A palavra "avaliação" só
 * aparece depois que a página explicou o que ela é.
 */
export const ctaLadder = {
  /** Fim da seção de decisão: a pessoa entendeu o raciocínio. */
  method: "Quero saber se isso se aplica ao meu caso",
  /** Fim do bloco de confiança: credencial e prova já foram lidas. */
  trust: "Quero conversar sobre uma avaliação",
  /** Fim da primeira consulta: ajuda a esclarecer uma dúvida antes de marcar. */
  consultation: "Tirar uma dúvida antes de marcar",
  /** Atalho flutuante, o degrau de menor compromisso da página. */
  floating: "Falar com a equipe",
} as const;

export type Faq = { question: string; answer: string };

/**
 * Relato de paciente ou de colega.
 *
 * Só entra com origem e autorização verificadas. Enquanto a lista estiver
 * vazia, o bloco de prova não renderiza — um espaço vazio é melhor do que um
 * depoimento inventado, e publicidade em saúde não comporta o segundo.
 */
export type Review = {
  text: string;
  /** Como o autor pode ser identificado sem expor dado de saúde. */
  author: string;
  /** Origem verificável: "Google", "Enviado por e-mail em 00/00", etc. */
  source?: string;
};

export const patientReviews: Review[] = [];
export const colleagueReviews: Review[] = [];

/**
 * Caso conduzido, no formato que as regras de publicidade comportam:
 * situação, avaliação, opções, decisão e acompanhamento — sem imagem, sem
 * identificação e sem sugerir que o mesmo desfecho se repete.
 *
 * Depende de material real do cirurgião. Enquanto `clinicalCase` estiver
 * indefinido na rota, o cartão não aparece.
 */
export type ClinicalCase = {
  title: string;
  situation: string;
  evaluation: string;
  options: string;
  decision: string;
  followUp: string;
};

/**
 * As dúvidas práticas que travam o agendamento. Ficam ABERTAS dentro da
 * primeira consulta, não no acordeão. Cada página usa apenas as perguntas que
 * ainda não foram respondidas nos blocos de preparo e de decisão.
 */
export const consultaEncaminhamento: Faq = {
  question: "Preciso de encaminhamento de outro profissional?",
  answer:
    "Você pode marcar diretamente. Se já tem um profissional acompanhando o caso, a comunicação entre os dois ajuda a integrar o cuidado.",
};

export const consultaExames: Faq = {
  question: "Preciso chegar com exames em mãos?",
  answer:
    "Não. Os exames que você já tem adiantam a conversa. Os que faltarem são solicitados depois da avaliação, e apenas quando acrescentam informação ao seu caso.",
};

export const consultaParticular: Faq = {
  question: "Como funciona o atendimento particular?",
  answer:
    "O atendimento é particular, sem convênios. A equipe informa o valor da consulta antes de agendar. Custos e condições do tratamento são apresentados conforme o plano, antes de você decidir.",
};

export const consultaSegundaOpiniao: Faq = {
  question: "Posso procurar só para ouvir uma segunda opinião?",
  answer:
    "Pode. Esclarecer uma indicação que você já recebeu é um motivo legítimo de consulta. A análise pode confirmar a orientação anterior ou apontar outras possibilidades.",
};

export type TreatmentContent = {
  slug: string;
  lastReviewed?: string;
  navLabel: string;
  eyebrow: string;
  motif: "air" | "implant" | "layers" | "joint" | "alignment" | "wisdom";

  /* ── Bloco 1 — hero ─────────────────────────────────────────────────── */
  title: string;
  /** Trecho do `title` destacado no H1. Precisa existir no texto. */
  titleHighlight?: string;
  intro: string;
  /** Três selos curtos abaixo do H1. Método e credencial, nunca resultado. */
  heroBadges: [string, string, string];
  /** Rótulo do botão primário, específico da intenção da página. */
  primaryCta: string;
  /** Convite específico após os critérios de decisão e a autoridade. */
  methodCta?: string;
  trustCta: string;
  note: string;

  /* ── Bloco 2 — "Isso parece com o seu caso?" ─────────────────────────
     Sintomas e consequência vivem na MESMA seção. Eram duas, e as duas
     respondiam a mesma pergunta do visitante — reconhecimento —, o que fazia
     a página gastar uma tela e meia antes de oferecer qualquer resposta. */
  /** Abre a seção na voz da página. O padrão do componente é o genérico. */
  painKicker?: string;
  painTitle: string;
  /** Em linguagem de vida real, não de prontuário. */
  painItems: string[];
  /**
   * Um ícone por item de `painItems`, na mesma ordem. Nomes válidos em
   * `components/pain-list.tsx`. Serve para a pessoa achar o sintoma dela de
   * relance, em vez de ler quatro parágrafos iguais.
   */
  painIcons?: readonly PainIcon[];
  /**
   * Foto do bloco editorial. Decidido aqui, e não por `motif` dentro do
   * componente: motivo visual é linguagem gráfica, foto é escolha editorial —
   * amarrar uma na outra obriga a inventar um motivo para trocar de imagem.
   */
  painImage?: "consultation" | "sleep";
  storyEyebrow?: string;
  consequenceTitle: string;
  /**
   * Agitação factual: o que muda de OPÇÕES com o tempo. Nunca medo fabricado
   * nem urgência inventada — publicidade em saúde não comporta isso, e o
   * público desta especialidade já desconfia de quem promete demais.
   */
  consequenceText: string;

  /* ── Bloco 3 — "Como avaliamos e decidimos o caminho" ────────────────
     Método e objeções clínicas numa seção só. Separados, o leitor recebia
     duas vezes o mesmo assunto: o que é avaliado e o que não decorre do que
     ele já ouviu. `objectionsTitle` vira subtítulo dentro do bloco. */
  objectionsKicker?: string;
  objectionsTitle: string;
  objections: Array<{ belief: string; reality: string }>;

  /**
   * Pergunta que antecede o CTA intermediário, no fim da seção de decisão.
   * O botão usa `methodCta` para traduzir a intenção específica de cada rota.
   */
  midCtaQuestion: string;

  methodEyebrow: string;
  methodTitle: string;
  methodTitleHighlight?: string;
  methodBody: string[];
  /**
   * Trecho de `methodBody` que recebe o marca-texto.
   *
   * Um por página, e sempre na frase que desarma — "em casos selecionados",
   * "nem toda alteração precisa de cirurgia". São as frases que fazem a pessoa
   * continuar lendo, e passavam despercebidas no meio do parágrafo. Grifar
   * mais de uma anula as duas; grifar promessa, em saúde, é outro problema.
   */
  methodHighlight?: string;
  methodPoints: string[];
  /** Contexto técnico complementar, aberto apenas por quem precisa dele. */
  methodDetails?: { title: string; text: string };
  /** Cenários de indicação; as etapas cronológicas continuam em `journey`. */
  decisionPaths?: {
    title: string;
    items: Array<{ title: string; text: string }>;
  };
  crossLink?: { label: string; href: string };
  /* ── Bloco 4 — "Como funciona o tratamento" ──────────────────────────
     Obrigatória nas seis rotas: a pergunta "e depois que eu marco?" é a que
     mais adia contato nas páginas em que o desfecho é incerto. O caso
     conduzido, quando existir, entra como cartão DENTRO desta seção — não
     como um bloco de portfólio à parte. */
  journey: {
    kicker?: string;
    title: string;
    intro: string;
    steps: Array<{ title: string; text: string }>;
  };

  /** Só com material real, desidentificado e aprovado pelo cirurgião. */
  clinicalCase?: ClinicalCase;

  /* ── Bloco 5 — "Por que confiar nessa avaliação" ─────────────────────
     Credencial e prova social numa seção só: a primeira responde "ele é
     qualificado?", a segunda "ele é bom com gente como eu?". Separadas,
     viravam dois blocos grandes dizendo a mesma coisa em registros
     diferentes. */
  /**
   * Parágrafo de contexto do bloco de autoridade. Nome, registro e credenciais
   * continuam vindo de `siteConfig` — só a atuação relevante PARA ESTA página
   * muda, para que as seis rotas apresentem o contexto pertinente ao paciente.
   */
  authorityBody?: string;
  /** Conduta relevante à rota; não representa uma nova credencial. */
  authorityFocus: string;

  /* ── Bloco 6 — "Sua primeira consulta" ───────────────────────────────
     Processo e dúvidas práticas juntos. As perguntas que decidem o
     agendamento ficam abertas aqui; o acordeão fica com o que sobra. */
  consultationKicker?: string;
  /**
   * O bloco que antecede o botão final.
   *
   * Era uma lista do que levar — tomografia, relatórios, medicamentos —, e
   * ficava exatamente entre o texto e o CTA. A última coisa que a pessoa lia
   * antes de decidir era uma lista de tarefas, e quem não tem os exames em
   * mãos adia. Agora o bloco desobriga: o exame que existir adianta a
   * conversa, e o que não existir não impede a avaliação.
   */
  preparation: { title: string; text: string };
  consultationTitle: string;
  consultationIntro: string;
  consultationOutcome: string;
  consultationNote: string;

  /** Duas ou três perguntas essenciais, abertas dentro da primeira consulta. */
  consultationQuestions: Faq[];

  /* ── Bloco 7 — contato ──────────────────────────────────────────────── */
  /**
   * Dúvidas residuais que influenciam o agendamento. O FAQ não é depósito de objeção: o
   * que impede a conversão está aberto nos blocos principais, e repetir aqui
   * o que a seção de decisão ou a primeira consulta já responderam gasta um
   * lugar que faltará para a pergunta de alguém.
   */
  faqs: Faq[];
  faqTitle: string;
  closingTitle: string;
  closingText: string;

  /**
   * Relatos desta rota. Sem eles, o bloco de confiança usa `patientReviews`.
   * Só preencher quando houver material real e pertinente à experiência desta
   * página — selecionar à força um relato por rota produz prova artificial.
   */
  reviews?: Review[];
  proofKicker?: string;
  proofTitle?: string;

  visualSummary: {
    kicker: string;
    title: string;
    cues: [string, string, string];
  };
  formQuestion: string;
  formOptions: string[];
  /** Copy do formulário de contato do fecho. */
  contactForm?: {
    eyebrow?: string;
    title?: string;
    description?: string;
  };
  whatsappMessage: string;
  metadata: {
    title: string;
    description: string;
  };
};

export const treatments: Record<string, TreatmentContent> = {
  "apneia-do-sono": {
    authorityFocus: "Avaliação dos maxilares integrada ao cuidado do sono",
    methodCta: "Quero entender o papel dos meus maxilares",
    trustCta: "Quero entender se os maxilares participam do meu quadro",
    slug: "apneia-do-sono",
    navLabel: "Apneia do sono",
    eyebrow: "Apneia do sono em João Pessoa",
    motif: "air",
    title: "Você dorme várias horas e ainda acorda cansado?",
    titleHighlight: "ainda acorda cansado",
    intro:
      "Ronco, cansaço e pausas na respiração merecem investigação. Se você investiga ou já trata apneia obstrutiva, a avaliação buco-maxilo-facial esclarece se a posição dos maxilares participa da dificuldade para respirar durante o sono.",
    heroBadges: ["Em conjunto com a equipe do sono", "Maxilares e respiração", "João Pessoa"],
    primaryCta: "Quero avaliar meu caso",
    note: "Uma avaliação que se soma ao cuidado com sua equipe do sono.",

    painKicker: "Como têm sido suas noites?",
    painTitle: "Dormir a noite inteira não significa, necessariamente, descansar bem.",
    painItems: [
      "Levanta da cama sem disposição e sente que já começa o dia cansado.",
      "Precisa lutar contra o sono para acompanhar uma reunião ou uma conversa.",
      "Quem dorme ao seu lado relata ronco alto, pausas na respiração ou despertares com engasgo.",
      "Já trata apneia, mas as dificuldades com o tratamento ainda atrapalham suas noites.",
    ],
    painIcons: ["bateria", "cafe", "som", "cama"],
    painImage: "sleep",
    storyEyebrow: "O que você quer recuperar",
    consequenceTitle: "O que você quer recuperar é a disposição para viver o dia",
    consequenceText:
      "Trabalhar com atenção e sentir que a noite trouxe descanso: conte como o cansaço limita seu dia. Ronco e cansaço, sozinhos, não confirmam apneia. A investigação médica e os exames do sono orientam o cuidado.",

    midCtaQuestion:
      "Em que momento a avaliação dos maxilares pode ajudar no seu cuidado do sono?",
    objectionsKicker: "Antes de pensar em cirurgia",
    objectionsTitle: "O que vale esclarecer antes de pensar em cirurgia.",
    objections: [
      {
        belief: "Roncar significa que tenho apneia?",
        reality: "Ronco e apneia podem ocorrer juntos, mas o diagnóstico depende de avaliação médica e do estudo do sono indicado para o caso."
      },
      {
        belief: "Não me adaptei ao CPAP. Qual é o próximo passo?",
        reality: "Converse com sua equipe do sono sobre ajustes e alternativas. A dificuldade de uso, por si só, não define uma indicação cirúrgica."
      },
      {
        belief: "Vou precisar deixar meu médico do sono?",
        reality: "O acompanhamento continua. A análise dos maxilares complementa esse cuidado e as decisões são discutidas com os profissionais envolvidos."
      }
    ],

    methodEyebrow: "O papel da avaliação buco-maxilo-facial",
    methodTitle: "Os maxilares são uma parte da avaliação do sono.",
    methodTitleHighlight: "uma parte da avaliação",
    methodBody: [
      "O Dr. Adriano avalia a posição dos maxilares e sua relação com a passagem de ar. Essa análise é combinada ao histórico, aos estudos do sono e à resposta aos tratamentos. O objetivo é esclarecer a contribuição da estrutura da face na apneia obstrutiva.",
      "CPAP, medidas clínicas e aparelhos intraorais estão entre as opções, conforme a indicação. A cirurgia dos maxilares é discutida em casos selecionados, com benefícios, riscos e alternativas avaliados em conjunto com a equipe do sono."
    ],
    methodHighlight: "A cirurgia dos maxilares é discutida em casos selecionados",
    methodPoints: [
      "Sintomas, rotina do sono e condições de saúde.",
      "Polissonografia ou outros estudos do sono já realizados.",
      "Posição dos maxilares e relação com a passagem de ar.",
      "Tratamentos em uso, dificuldades e resposta ao acompanhamento.",
    ],
    journey: {
      kicker: "Cuidado multidisciplinar",
      title: "Quem participa e como as decisões se conectam.",
      intro: "A investigação do sono e a avaliação dos maxilares se complementam. O acompanhamento continua após a escolha do tratamento.",
      steps: [
        {
          title: "1. Investigação do sono",
          text: "O médico reúne sintomas, histórico e o estudo do sono indicado. Leve resultados e informações dos tratamentos que já utiliza."
        },
        {
          title: "2. Avaliação dos maxilares",
          text: "O cirurgião examina a face e a relação dos maxilares com a via aérea. Os achados são discutidos com a equipe do sono."
        },
        {
          title: "3. Decisão e resposta ao cuidado",
          text: "As opções são apresentadas com seus limites e riscos. A equipe acompanha a resposta e indica as reavaliações necessárias."
        }
      ]
    },
    authorityBody:
      "Na apneia obstrutiva, o Dr. Adriano analisa a participação dos maxilares na passagem de ar e integra seus achados ao acompanhamento com o médico e os demais profissionais do sono.",
    consultationQuestions: [consultaEncaminhamento, consultaParticular],
    preparation: {
      title: "Você pode marcar antes de ter todos os exames.",
      text: "Leve estudos do sono e relatórios que já tiver. Sem eles, a consulta inicial pode começar; o diagnóstico e uma eventual indicação cirúrgica dependem de completar a investigação do sono."
    },
    consultationTitle: "Suas noites e o que já tentou entram na conversa.",
    consultationIntro: "Conte como acorda e o que dificulta o tratamento. A consulta inclui o exame da face e a análise dos estudos disponíveis.",
    consultationOutcome: "Quais aspectos dos maxilares merecem atenção, o que falta investigar e quais próximos passos discutir com sua equipe do sono.",
    consultationNote: "Mantenha seu acompanhamento durante essa avaliação.",
    faqTitle: "Antes de marcar a avaliação do sono.",
    faqs: [
      {
        question: "Ainda não tenho diagnóstico. Por onde começar?",
        answer: "A investigação da apneia é conduzida por um médico, com o estudo do sono indicado. Você pode buscar a consulta buco-maxilo-facial para esclarecer o papel dos maxilares, e essa avaliação será integrada à investigação necessária."
      },
      {
        question: "Já uso CPAP. Devo interromper para ser avaliado?",
        answer: "Mantenha o tratamento e o acompanhamento que já faz. Qualquer mudança é decidida com a equipe responsável pelo seu sono."
      },
      {
        question: "Se houver cirurgia, o acompanhamento do sono termina?",
        answer: "O acompanhamento continua para verificar a resposta e ajustar o cuidado. A necessidade de outras medidas depende da evolução individual; a cirurgia não garante a resolução da apneia."
      }
    ],
    closingTitle: "Entenda o que pode estar por trás de noites sem descanso.",
    closingText: "Converse com a equipe sobre a avaliação dos maxilares e sua participação no cuidado da apneia.",
    /* Sem relato aprovado: o bloco de confiança omite a prova social. */
    visualSummary: { kicker: "Sono e respiração", title: "Entender a respiração para orientar o cuidado do sono.", cues: ["Ronco", "Pausas respiratórias", "Cansaço ao acordar"] },
    formQuestion: "Como podemos ajudar?",
    formOptions: neutralFormOptions,
    contactForm: {
      title: "Converse sobre a avaliação do sono.",
      description: "A equipe informa horários, valor da consulta e o que levar."
    },
    whatsappMessage: "Olá, vi a página sobre apneia do sono e gostaria de saber como funciona a avaliação buco-maxilo-facial.",
    metadata: { title: "Apneia do Sono em João Pessoa", description: "Ronco, pausas na respiração e cansaço ao acordar? Entenda o papel dos maxilares na apneia do sono e da avaliação multidisciplinar em João Pessoa." },
  },

  "reconstrucao-ossea": {
    methodDetails: {
      title: "Quando a perda envolve trauma, lesão ou reconstrução extensa",
      text: "Perdas extensas podem exigir planejamento hospitalar e técnicas avançadas, inclusive microcirúrgicas em situações selecionadas. A análise considera os tecidos disponíveis, a saúde geral e o objetivo funcional. A indicação, a equipe e as etapas são definidas individualmente."
    },
    decisionPaths: {
      title: "Perdas diferentes pedem planejamentos diferentes.",
      items: [
        {
          title: "Perda localizada",
          text: "Uma área limitada é avaliada em relação ao suporte necessário para a futura prótese. Um enxerto pode ser considerado conforme os tecidos e a indicação."
        },
        {
          title: "Perda extensa",
          text: "Uma área ampla pode envolver osso e outros tecidos, com maior necessidade de reconstrução e de integração entre as etapas do cuidado."
        }
      ]
    },
    authorityFocus: "Reconstrução orientada pelo objetivo da reabilitação",
    methodCta: "Quero revisar minhas possibilidades",
    trustCta: "Quero entender o que a falta de osso significa",
    slug: "reconstrucao-ossea",
    navLabel: "Reconstrução óssea",
    eyebrow: "Reconstrução óssea em João Pessoa",
    motif: "layers",
    title: "Ouviu que não há osso suficiente para implante?",
    titleHighlight: "não há osso suficiente",
    intro: "Se o plano de repor os dentes parou nessa resposta, vale esclarecer o motivo. Em casos selecionados, a reconstrução óssea pode criar suporte para futuros implantes. A avaliação explica as possibilidades e os limites do seu caso.",
    heroBadges: ["Avaliação da perda óssea", "Planejamento com seu dentista", "João Pessoa"],
    primaryCta: "Quero avaliar minhas possibilidades",
    note: "Traga os exames que já tem. A primeira decisão é esclarecer suas possibilidades.",

    painKicker: "Onde o seu plano parou?",
    painTitle: "Você queria uma solução para os dentes. Ficou com mais perguntas.",
    painItems: [
      "A prótese incomoda ao comer, mas você ouviu que não há osso para um implante.",
      "Passaram-se anos desde a perda dos dentes e você não sabe quais opções ainda existem.",
      "Recebeu indicação de enxerto sem entender o que muda nas etapas e na recuperação.",
      "Tem receio de começar um tratamento sem saber o que será possível ao final.",
    ],
    painIcons: ["refeicao", "tempo", "camadas", "duvida"],
    storyEyebrow: "O que uma avaliação deve responder",
    consequenceTitle: "Uma resposta útil precisa explicar o que é possível e por quê",
    consequenceText: "A região da perda, os tecidos, sua saúde e a futura prótese ajudam a definir os caminhos. A avaliação pode identificar possibilidades ou confirmar limites, com os motivos e as alternativas explicados.",

    midCtaQuestion:
      "O que a falta de osso muda no seu plano de reabilitação?",
    objectionsKicker: "Sobre a falta de osso",
    objectionsTitle: "Pouco osso: o que essa informação permite concluir?",
    objections: [
      {
        belief: "Ainda vale avaliar se disseram que não tenho osso?",
        reality: "A consulta esclarece a região da perda e o objetivo da reabilitação. Pode identificar opções ou confirmar a orientação anterior, explicando os motivos."
      },
      {
        belief: "Reconstruir garante que poderei colocar implantes?",
        reality: "A indicação depende dos tecidos e da saúde geral. A cicatrização precisa ser acompanhada e a possibilidade de implante é reavaliada conforme as condições obtidas."
      },
      {
        belief: "Tudo é feito em uma única etapa?",
        reality: "Alguns casos exigem reconstrução, cicatrização e uma nova avaliação antes dos implantes. A sequência depende da região e do plano protético."
      }
    ],

    methodEyebrow: "Como o plano é construído",
    methodTitle: "Primeiro, a futura reabilitação. Depois, o que precisa ser reconstruído.",
    methodTitleHighlight: "a futura reabilitação",
    methodBody: [
      "A posição e a função da futura prótese orientam o que precisaria ser reconstruído. O Dr. Adriano e seu dentista relacionam esse objetivo ao exame da boca e à tomografia, quando indicada.",
      "Se houver indicação, a conversa inclui técnica, materiais, riscos e cicatrização. Quando reconstruir não for adequado, outras formas de reabilitação entram no plano. Cada etapa deve ter uma finalidade clara para você."
    ],
    methodHighlight: "Quando reconstruir não for adequado, outras formas de reabilitação entram no plano",
    methodPoints: [
      "Volume ósseo e extensão da região a reabilitar.",
      "Posição e função da futura prótese.",
      "Tecidos, saúde geral e medicamentos.",
      "Cicatrização e reavaliação antes da próxima etapa."
    ],
    crossLink: { label: "Entenda como a reconstrução se relaciona aos implantes", href: "/implantes-dentarios" },
    journey: {
      kicker: "Etapas do tratamento",
      title: "Reconstruir com um objetivo para a reabilitação.",
      intro: "A sequência e os intervalos dependem da região, da técnica e da cicatrização.",
      steps: [
        {
          title: "1. Definir a necessidade",
          text: "Exame, imagens e plano protético esclarecem o que falta e se há indicação de reconstruir."
        },
        {
          title: "2. Reconstruir e acompanhar",
          text: "O plano apresenta técnica, materiais, riscos e cuidados. Os retornos acompanham a cicatrização."
        },
        {
          title: "3. Reavaliar a reabilitação",
          text: "As condições obtidas são discutidas com seu dentista para retomar ou rever a etapa protética."
        }
      ]
    },
    authorityBody:
      "Quando a falta de osso limita a reabilitação, o Dr. Adriano avalia a região e discute com seu dentista o que pode ser reconstruído e qual função essa etapa terá.",
    consultationQuestions: [consultaEncaminhamento, consultaParticular],
    preparation: {
      title: "Os exames que você já tem são um ponto de partida.",
      text: "Leve tomografia e planos anteriores, se disponíveis. A avaliação inicial pode começar sem esses materiais; novos exames são indicados conforme a necessidade."
    },
    consultationTitle: "O que a falta de osso significa para você?",
    consultationIntro: "A consulta relaciona a região da perda, os tecidos e sua saúde ao que você pretende reabilitar.",
    consultationOutcome: "Quais caminhos avaliar, o que falta investigar e como reconstrução, cicatrização e prótese se conectariam no seu caso.",
    consultationNote: "Uma orientação anterior pode ser esclarecida nesta avaliação.",
    faqTitle: "Etapas e recuperação: antes de começar.",
    faqs: [
      {
        question: "De onde vem o material do enxerto?",
        answer: "O plano pode considerar osso do próprio paciente e materiais de outras origens. A escolha, a procedência e os cuidados são explicados conforme a técnica indicada."
      },
      {
        question: "Vou ficar sem dentes durante as etapas?",
        answer: "As opções provisórias dependem da área tratada e da proteção da cicatrização. O planejamento explica o que poderá ser utilizado no seu caso."
      },
      {
        question: "Como é o desconforto e a recuperação?",
        answer: "Pode haver dor, inchaço e restrições temporárias. Anestesia, cuidados e estimativa de recuperação são discutidos conforme a extensão da cirurgia."
      },
      {
        question: "Condições de saúde e medicamentos impedem a avaliação?",
        answer: "Você pode marcar e levar essas informações. Elas influenciam a indicação e os cuidados; quando necessário, o planejamento é integrado ao médico que acompanha você."
      }
    ],
    closingTitle: "Entenda suas possibilidades de reabilitação.",
    closingText: "Converse com a equipe para esclarecer a falta de osso, as alternativas e as etapas que poderiam fazer parte do seu plano.",
    /* Sem relato aprovado: o bloco de confiança omite a prova social. */
    visualSummary: { kicker: "Osso e reabilitação", title: "Reconstruir com um objetivo para os seus dentes.", cues: ["Perda óssea", "Enxerto ósseo", "Futura prótese"] },
    formQuestion: "Como podemos ajudar?",
    formOptions: neutralFormOptions,
    contactForm: {
      title: "Converse sobre suas possibilidades.",
      description: "A equipe informa horários, valor da consulta e o que levar."
    },
    whatsappMessage: "Olá, vi a página sobre reconstrução óssea e gostaria de saber como avaliar minhas possibilidades de reabilitação.",
    metadata: { title: "Reconstrução Óssea e Enxerto em João Pessoa", description: "Ouviu que não há osso suficiente para implante? Entenda como a reconstrução e o enxerto ósseo são avaliados em João Pessoa, com indicação individual." },
  },

  "cirurgia-atm": {
    authorityFocus: "Cuidados conservadores considerados na decisão sobre a ATM",
    methodCta: "Quero conversar sobre a dor na mandíbula",
    trustCta: "Quero avaliar minha dor e meus movimentos",
    slug: "cirurgia-atm",
    navLabel: "DTM e ATM",
    eyebrow: "DTM e ATM em João Pessoa",
    motif: "joint",
    title: "Sua mandíbula estala, dói ou parece travar?",
    titleHighlight: "estala, dói ou parece travar",
    intro: "Escolher o que comer por receio da dor ou evitar abrir a boca muda a rotina. A avaliação de DTM e ATM considera os sintomas, os movimentos e os fatores associados para orientar o cuidado.",
    heroBadges: ["Investigação da dor", "Cuidados além da cirurgia", "João Pessoa"],
    primaryCta: "Quero investigar minha dor na mandíbula",
    note: "Você pode buscar ajuda mesmo sem diagnóstico. A avaliação não pressupõe cirurgia.",

    painKicker: "O que a dor já mudou na sua rotina?",
    painTitle: "Quando mastigar, conversar ou bocejar traz desconforto.",
    painItems: [
      "Deixa alimentos de lado ou mastiga com cuidado porque a mandíbula dói.",
      "Sente dor perto do ouvido ao falar, bocejar ou abrir mais a boca.",
      "Percebe estalos com dor ou teme que a mandíbula trave durante uma refeição.",
      "Já usou placa ou tentou outros cuidados, mas o incômodo continua voltando.",
    ],
    painIcons: ["refeicao", "ouvido", "atividade", "tempo"],
    storyEyebrow: "O que você quer voltar a fazer",
    consequenceTitle: "Você quer voltar a fazer coisas simples sem pensar tanto na dor",
    consequenceText: "Uma refeição, uma conversa longa, um bocejo. A avaliação considera o que limita você e os fatores associados ao quadro. Dor persistente, por si só, não significa dano progressivo nem necessidade de cirurgia.",

    midCtaQuestion:
      "O que ainda precisa ser esclarecido sobre sua dor ou dificuldade de movimento?",
    objectionsKicker: "Sobre estalos, placas e cirurgia",
    objectionsTitle: "Já tentou aliviar a dor e ainda tem dúvidas?",
    objections: [
      {
        belief: "Todo estalo precisa de tratamento?",
        reality: "Estalos sem dor ou limitação são comuns e, em geral, não precisam de tratamento. Dor, travamento ou mudança de movimento merecem avaliação."
      },
      {
        belief: "Já usei placa e continuo com dor.",
        reality: "Conte como usou a placa e o que mudou. Essa experiência ajuda a rever o quadro e ajustar o plano, sem tornar a cirurgia o próximo passo automático."
      },
      {
        belief: "Por que minha mandíbula trava?",
        reality: "O travamento pode estar associado a alterações do movimento da articulação. O histórico e o exame ajudam a diferenciar as possibilidades; o sintoma isolado não define o diagnóstico."
      }
    ],

    methodEyebrow: "Avaliação do quadro e dos fatores associados",
    methodTitle: "Entender o quadro para escolher o cuidado.",
    methodTitleHighlight: "escolher o cuidado",
    methodBody: [
      "DTM reúne alterações da articulação e dos músculos da mastigação. Nem sempre há uma causa única identificável. A consulta avalia o tipo de quadro, os fatores associados e outras condições que podem provocar sintomas semelhantes.",
      "Muitos quadros começam com cuidados conservadores, como orientação de hábitos e fisioterapia, conforme a indicação. A resposta é acompanhada. Procedimentos na ATM ficam para situações selecionadas, após discussão dos benefícios, riscos e alternativas."
    ],
    methodHighlight: "Muitos quadros começam com cuidados conservadores",
    methodPoints: ["Histórico da dor e impacto na mastigação.", "Exame dos movimentos, músculos e articulações.", "Exames de imagem apenas quando necessários.", "Tratamentos anteriores e integração com outros profissionais."],
    journey: {
      kicker: "Mapa de decisão",
      title: "O cuidado muda conforme os achados.",
      intro: "São caminhos para situações diferentes. Persistência de um sintoma não significa avançar automaticamente para cirurgia.",
      steps: [
        {
          title: "Acompanhar e orientar",
          text: "Estalos sem dor ou limitação geralmente dispensam tratamento. Mudanças nos sintomas orientam a necessidade de reavaliação."
        },
        {
          title: "Cuidar e reavaliar",
          text: "Quando há indicação de cuidado conservador, o plano considera hábitos, função e recursos adequados ao quadro. O acompanhamento verifica a resposta."
        },
        {
          title: "Avaliar um procedimento",
          text: "Alterações articulares e sintomas selecionados podem justificar procedimentos. O diagnóstico, a evolução e as alternativas orientam essa decisão."
        }
      ]
    },
    authorityBody:
      "Na dor e na limitação de movimento da mandíbula, o Dr. Adriano avalia os músculos e a articulação, considera os cuidados conservadores e discute quando outros profissionais devem participar.",
    consultationQuestions: [consultaEncaminhamento, consultaParticular],
    preparation: {
      title: "O que já foi tentado ajuda a orientar a consulta.",
      text: "Leve a placa, os exames e as orientações anteriores que tiver. A falta desses materiais não impede a avaliação inicial."
    },
    consultationTitle: "O que piora a dor e o que ficou difícil fazer?",
    consultationIntro: "O histórico e o exame dos músculos, da articulação e dos movimentos ajudam a caracterizar o quadro. Imagens são solicitadas quando necessárias.",
    consultationOutcome: "Os fatores que merecem investigação, os cuidados a considerar e a necessidade de participação de outros profissionais.",
    consultationNote: "Sua experiência com os tratamentos anteriores faz parte do plano.",
    faqTitle: "Dúvidas antes da avaliação da mandíbula.",
    faqs: [
      {
        question: "Quanto tempo leva para melhorar? A dor pode voltar?",
        answer: "A resposta varia com o quadro, a conduta e os fatores envolvidos. Os sintomas podem oscilar, por isso o acompanhamento permite ajustar o cuidado. Não há prazo ou resultado igual para todos."
      },
      {
        question: "Dor de cabeça e zumbido também entram na conversa?",
        answer: "Conte essas queixas na consulta. Elas podem coexistir com DTM, mas têm outras causas possíveis. O exame ajuda a definir se outra avaliação é necessária."
      },
      {
        question: "Posso avaliar uma indicação de cirurgia que já recebi?",
        answer: "Sim. Leve a orientação anterior e os exames disponíveis. A consulta pode esclarecer a indicação, as alternativas e o que ainda precisa ser analisado."
      }
    ],
    closingTitle: "A mandíbula está limitando sua rotina?",
    closingText: "Converse com a equipe para avaliar sua dor, os movimentos e os cuidados que fazem sentido para o seu quadro.",
    /* Sem relato aprovado: o bloco de confiança omite a prova social. */
    visualSummary: { kicker: "Articulação e músculos", title: "Investigar a dor. Cuidar do movimento.", cues: ["Dor na mandíbula", "Estalos", "Travamento"] },
    formQuestion: "Como podemos ajudar?",
    formOptions: neutralFormOptions,
    contactForm: {
      title: "Converse sobre a avaliação da mandíbula.",
      description: "A equipe informa horários, valor da consulta e o que levar."
    },
    whatsappMessage: "Olá, vi a página sobre DTM e ATM e gostaria de saber como funciona a avaliação da mandíbula.",
    metadata: { title: "DTM e ATM: Dor na Mandíbula em João Pessoa", description: "Dor na mandíbula, estalos ou travamento? Conheça a avaliação de DTM e ATM em João Pessoa, os cuidados conservadores e quando a cirurgia é considerada." },
  },

  "cirurgia-ortognatica": {
    authorityFocus: "Planejamento cirúrgico em conjunto com o ortodontista",
    methodCta: "Quero entender se meu caso pede cirurgia",
    trustCta: "Quero entender minha indicação e as etapas",
    slug: "cirurgia-ortognatica",
    navLabel: "Cirurgia ortognática",
    eyebrow: "Cirurgia ortognática em João Pessoa",
    motif: "alignment",
    title: "Sua mordida não encaixa e mastigar exige esforço?",
    titleHighlight: "mordida não encaixa",
    intro: "Dificuldade para morder, esforço para fechar os lábios e incômodo com a face podem fazer parte da mesma preocupação. Cirurgião e ortodontista avaliam a posição dos dentes e dos maxilares para discutir as opções.",
    heroBadges: ["Integração com a ortodontia", "Função e estrutura facial", "João Pessoa"],
    primaryCta: "Quero entender se tenho indicação",
    note: "Você não precisa chegar decidido a operar. O primeiro passo é entender a indicação.",

    painKicker: "Onde o incômodo aparece?",
    painTitle: "O incômodo aparece na refeição, na foto e no espelho.",
    painItems: [
      "Precisa adaptar a forma de morder porque os dentes da frente não cortam bem os alimentos.",
      "Mastigar exige esforço ou os lábios não se fecham com conforto.",
      "A posição do queixo ou a diferença entre os lados da face incomoda você.",
      "Seu ortodontista falou em cirurgia e surgiram dúvidas sobre a mudança no rosto e a recuperação.",
    ],
    painIcons: ["refeicao", "fala", "rosto", "calendario"],
    storyEyebrow: "O que entra na conversa",
    consequenceTitle: "Mastigar melhor e se sentir bem com a própria face merecem uma conversa",
    consequenceText: "Mastigação e aparência entram na mesma conversa. A avaliação relaciona suas expectativas à estrutura dos maxilares e às mudanças possíveis. Tempo de aparelho, recuperação e trabalho também participam da decisão.",

    midCtaQuestion:
      "Aparelho, cirurgia ou os dois? A diferença está na posição dos maxilares, e ela precisa ser avaliada.",
    objectionsKicker: "Aparelho, face e recuperação",
    objectionsTitle: "E o aparelho, as mudanças no rosto e a volta à rotina?",
    objections: [
      {
        belief: "Toda mordida que não encaixa precisa de cirurgia?",
        reality: "Algumas alterações podem ser tratadas com ortodontia. A relação entre dentes e maxilares, a função e suas necessidades orientam a indicação."
      },
      {
        belief: "Meu rosto vai mudar?",
        reality: "Reposicionar os maxilares pode modificar a aparência. As mudanças são discutidas junto aos objetivos funcionais. Simulações ajudam na comunicação, sem garantir o resultado."
      },
      {
        belief: "Como vou organizar a recuperação?",
        reality: "Alimentação, higiene e retorno ao trabalho entram no planejamento. As estimativas dependem da cirurgia, da sua atividade e da evolução."
      }
    ],

    methodEyebrow: "O que orienta a indicação",
    methodTitle: "Cirurgião e ortodontista planejam a mesma jornada, cada um na sua etapa.",
    methodTitleHighlight: "a mesma jornada",
    methodBody: [
      "A cirurgia ortognática reposiciona os maxilares quando a alteração óssea justifica esse tratamento. A avaliação diferencia a posição dos dentes da estrutura dos maxilares e considera a mastigação, a face e suas expectativas.",
      "Nem toda alteração precisa de cirurgia. Havendo indicação, o Dr. Adriano e o ortodontista combinam as etapas e explicam os benefícios esperados, os riscos e as alternativas. Queixas de respiração ou fala podem exigir outros profissionais."
    ],
    methodHighlight: "Nem toda alteração precisa de cirurgia.",
    methodPoints: ["Relação entre os dentes e os maxilares.", "Mastigação, fechamento dos lábios e queixas funcionais.", "Análise facial, exames e documentação ortodôntica.", "Objetivos e sequência definidos com o ortodontista."],
    journey: {
      kicker: "A jornada completa",
      title: "Quatro etapas, com responsabilidades definidas.",
      intro: "Quando indicada, a cirurgia faz parte de um plano conjunto. A sequência e os intervalos são ajustados ao seu caso.",
      steps: [
        {
          title: "1. Ortodontia",
          text: "O ortodontista prepara a posição dos dentes para o plano combinado com o cirurgião. A necessidade e o tempo de aparelho são definidos individualmente."
        },
        {
          title: "2. Preparação cirúrgica",
          text: "O cirurgião analisa exames, movimentos planejados e condições de saúde. As equipes alinham a preparação; você recebe as orientações, os riscos e as alternativas."
        },
        {
          title: "3. Cirurgia e recuperação",
          text: "O cirurgião conduz o procedimento indicado e acompanha a recuperação, orientando alimentação, higiene e retorno às atividades."
        },
        {
          title: "4. Finalização ortodôntica",
          text: "O ortodontista realiza os ajustes finais da mordida. O acompanhamento com o cirurgião continua conforme a evolução."
        }
      ]
    },
    authorityBody:
      "O Dr. Adriano avalia a estrutura dos maxilares e planeja a etapa cirúrgica junto com o ortodontista. A integração permite definir o papel do aparelho, da cirurgia e do acompanhamento.",
    consultationQuestions: [consultaEncaminhamento, consultaParticular],
    preparation: {
      title: "Você pode avaliar antes de começar o aparelho.",
      text: "Se já faz ortodontia, leve a documentação disponível e o contato do profissional. Se ainda não começou, a consulta pode esclarecer como organizar as avaliações."
    },
    consultationTitle: "Sua mordida, suas expectativas e as opções.",
    consultationIntro: "Você conta o que incomoda para comer, na face e na ideia de operar. O exame relaciona essas questões aos dentes e aos maxilares.",
    consultationOutcome: "O que falta para definir a indicação, como o ortodontista participa e quais etapas precisariam entrar na sua rotina.",
    consultationNote: "Uma indicação anterior também pode ser discutida na consulta.",
    faqTitle: "Tempo, recuperação e planejamento da ortognática.",
    faqs: [
      {
        question: "Quanto tempo dura todo o tratamento?",
        answer: "O prazo inclui ortodontia, preparação, eventual cirurgia e finalização. As estimativas são feitas após a análise conjunta e podem mudar conforme a resposta ao tratamento."
      },
      {
        question: "Como é a recuperação e o afastamento do trabalho?",
        answer: "Pode haver inchaço, desconforto, alteração de sensibilidade e restrições de alimentação e atividade. O afastamento depende do procedimento, do trabalho e da evolução. O plano inclui essas orientações antes da cirurgia."
      },
      {
        question: "Vou ficar com a boca imobilizada?",
        answer: "A fixação, o uso de elásticos e as limitações de movimento dependem da técnica e do caso. A equipe explica os cuidados previstos para alimentação, higiene e movimentação."
      }
    ],
    closingTitle: "Antes de decidir sobre a cirurgia, entenda o que pode mudar para você.",
    closingText: "Converse sobre a indicação, a participação do ortodontista e as etapas para planejar sua decisão.",
    /* Sem relato aprovado: o bloco de confiança omite a prova social. */
    visualSummary: { kicker: "Mordida e face", title: "Planejar a função sem deixar suas expectativas de lado.", cues: ["Mastigação", "Posição dos maxilares", "Mudanças faciais"] },
    formQuestion: "Como podemos ajudar?",
    formOptions: neutralFormOptions,
    contactForm: {
      title: "Converse sobre a indicação.",
      description: "A equipe informa horários, valor da consulta e o que levar."
    },
    whatsappMessage: "Olá, vi a página sobre cirurgia ortognática e gostaria de entender como funciona a avaliação de indicação.",
    metadata: { title: "Cirurgia Ortognática em João Pessoa", description: "Mordida que não encaixa ou dificuldade para mastigar? Entenda a indicação, o papel do ortodontista e a jornada da cirurgia ortognática em João Pessoa." },
  },

  "implantes-dentarios": {
    decisionPaths: {
      title: "Qual situação se aproxima da sua?",
      items: [
        {
          title: "Falta um dente",
          text: "A posição do espaço, os dentes vizinhos e a gengiva orientam o planejamento do implante e da coroa."
        },
        {
          title: "Faltam vários dentes",
          text: "A distribuição dos espaços e a mordida ajudam a definir a prótese e o suporte necessário."
        },
        {
          title: "Uso prótese removível",
          text: "O plano avalia opções de suporte por implantes, higiene e o que poderá ser usado durante a transição."
        }
      ]
    },
    authorityFocus: "Etapa cirúrgica planejada a partir da futura prótese",
    methodCta: "Quero avaliar o suporte para implantes",
    trustCta: "Quero avaliar opções para repor meus dentes",
    slug: "implantes-dentarios",
    navLabel: "Implantes dentários",
    eyebrow: "Implantes dentários em João Pessoa",
    motif: "implant",
    title: "A falta de dentes mudou seu jeito de comer e sorrir?",
    titleHighlight: "comer e sorrir",
    intro: "Quando falta um dente ou a prótese incomoda, uma refeição simples pede adaptações. A avaliação esclarece se implantes podem fazer parte da reabilitação e como planejar os dentes que eles vão sustentar.",
    heroBadges: ["Avaliação para implantes", "Planejamento com seu dentista", "João Pessoa"],
    primaryCta: "Quero saber se posso fazer implante",
    note: "Conheça as opções e as etapas antes de decidir pelo tratamento.",

    painKicker: "O que ficou mais difícil?",
    painTitle: "O que você gostaria de voltar a fazer com mais conforto?",
    painItems: [
      "Mastigar sem precisar escolher sempre o mesmo lado da boca.",
      "Sentar à mesa com menos preocupação com o incômodo da prótese removível.",
      "Conversar e sorrir sem concentrar a atenção no espaço deixado por um dente.",
      "Encontrar uma opção para os dentes que você perdeu há anos.",
    ],
    painIcons: ["refeicao", "sopa", "sorriso", "tempo"],
    storyEyebrow: "Por onde o plano começa",
    consequenceTitle: "O plano começa pelo que faz falta no seu dia a dia",
    consequenceText: "Os alimentos que você evita, o conforto para falar e a prótese atual orientam seus objetivos. A avaliação relaciona essas necessidades ao osso, à gengiva e aos cuidados de manutenção.",

    midCtaQuestion:
      "Que tipo de reabilitação atende aos dentes que fazem falta para você?",
    objectionsKicker: "O que costuma travar a decisão",
    objectionsTitle: "Prótese removível, pouco osso ou medo de operar: vale conversar.",
    objections: [
      {
        belief: "Perdi o dente há muito tempo. Ainda posso avaliar?",
        reality: "Sim. O tempo de perda, as condições do osso e os dentes vizinhos ajudam a definir as opções e o preparo necessário."
      },
      {
        belief: "Pouco osso sempre exige enxerto?",
        reality: "O volume ósseo é analisado em relação ao implante e à futura prótese. Reconstrução entra na proposta quando houver necessidade e condições."
      },
      {
        belief: "Tenho receio da cirurgia.",
        reality: "Anestesia, desconforto esperado, recuperação, riscos e alternativas são explicados no planejamento para você decidir com clareza."
      }
    ],

    methodEyebrow: "Da necessidade à reabilitação",
    methodTitle: "Um implante bem planejado começa antes do procedimento.",
    methodTitleHighlight: "antes do procedimento",
    methodBody: [
      "O implante é o suporte; a prótese substitui o dente. O planejamento começa pela posição e pela função dos dentes que serão repostos, considerando a mordida, o osso e a gengiva.",
      "O Dr. Adriano integra a etapa cirúrgica ao trabalho do dentista responsável pela prótese. Exame, imagens quando indicadas e histórico de saúde orientam o plano. Você conhece as etapas e os cuidados antes de escolher como seguir."
    ],
    methodHighlight: "antes de escolher como seguir",
    methodPoints: ["Quantidade de osso e saúde da gengiva.", "Posição do implante em relação à futura prótese.", "Mordida, saúde geral e fatores de cicatrização.", "Higiene, manutenção e acompanhamento após a reabilitação."],
    crossLink: { label: "Pouco osso? Entenda quando considerar reconstrução óssea", href: "/reconstrucao-ossea" },
    journey: {
      kicker: "Etapas da reabilitação",
      title: "Da avaliação à prótese e à manutenção.",
      intro: "O plano explica o preparo, a cicatrização e as possibilidades provisórias para organizar sua rotina.",
      steps: [
        {
          title: "1. Planejar a reabilitação",
          text: "Cirurgião e dentista relacionam a futura prótese ao exame da boca e às imagens necessárias."
        },
        {
          title: "2. Preparar e realizar",
          text: "Quando indicado, o plano inclui preparo dos tecidos, eventual reconstrução, colocação do implante e acompanhamento da cicatrização."
        },
        {
          title: "3. Reabilitar e manter",
          text: "O dentista responsável realiza a prótese conforme as condições obtidas. Higiene e manutenção continuam após o tratamento."
        }
      ]
    },
    authorityBody:
      "Nos implantes, o Dr. Adriano conduz a avaliação cirúrgica em conjunto com o dentista responsável pela prótese. A posição e a função dos futuros dentes orientam esse planejamento.",
    consultationQuestions: [consultaEncaminhamento, consultaParticular],
    preparation: {
      title: "Leve as imagens que já tiver.",
      text: "Radiografia, tomografia e planos anteriores ajudam na conversa. Sem esses materiais, a consulta começa pelo exame; imagens adicionais são solicitadas conforme a necessidade."
    },
    consultationTitle: "O que falta para comer e sorrir com mais conforto?",
    consultationIntro: "Você conta o que incomoda e sua experiência com a prótese, se usa uma. O exame avalia as condições para a reabilitação.",
    consultationOutcome: "Quais opções considerar, se algum preparo é necessário e como a prótese, as etapas e os cuidados entram no plano.",
    consultationNote: "Perda dentária antiga também pode ser avaliada.",
    faqTitle: "Antes de planejar seus implantes.",
    faqs: [
      {
        question: "Vou ficar sem dente durante o processo?",
        answer: "As possibilidades de prótese provisória dependem da região e da necessidade de proteger a cicatrização. O planejamento explica o que pode ser usado em cada etapa do seu caso."
      },
      {
        question: "Quanto tempo leva até colocar a prótese?",
        answer: "O prazo depende do preparo da boca, da cicatrização e das condições do implante. A sequência é apresentada no planejamento e revista durante o acompanhamento."
      },
      {
        question: "Quais são os riscos e os cuidados depois?",
        answer: "Podem ocorrer infecção, dificuldade de cicatrização ou falha na integração, entre outros riscos. Saúde geral, tabagismo e condições locais influenciam o cuidado. Higiene e consultas de manutenção continuam necessárias."
      }
    ],
    closingTitle: "O que você gostaria de mudar na próxima vez que se sentar à mesa?",
    closingText: "Converse com a equipe para avaliar suas opções de reabilitação e entender as etapas antes de decidir.",
    /* Sem relato aprovado: o bloco de confiança omite a prova social. */
    visualSummary: { kicker: "Dentes e mastigação", title: "O implante sustenta a prótese. O plano considera sua rotina.", cues: ["Osso e gengiva", "Mastigação", "Futura prótese"] },
    formQuestion: "Como podemos ajudar?",
    formOptions: neutralFormOptions,
    contactForm: {
      title: "Converse sobre a reabilitação.",
      description: "A equipe informa horários, valor da consulta e o que levar."
    },
    whatsappMessage: "Olá, vi a página de implantes dentários e gostaria de saber como funciona a avaliação para o meu caso.",
    metadata: { title: "Implantes Dentários em João Pessoa", description: "Perdeu dentes ou sente incômodo com a prótese? Conheça a avaliação para implantes dentários em João Pessoa: osso, gengiva, mordida e futura reabilitação." },
  },


  "cirurgia-de-siso": {
    authorityFocus: "Análise da posição do siso e das estruturas próximas",
    methodCta: "Quero avaliar se a remoção é indicada",
    trustCta: "Quero saber se é caso de acompanhar ou remover",
    slug: "cirurgia-de-siso",
    navLabel: "Cirurgia de siso",
    eyebrow: "Cirurgia de siso em João Pessoa",
    motif: "wisdom",
    title: "Precisa mesmo tirar o siso?",
    titleHighlight: "Precisa mesmo tirar",
    intro:
      "Inflamações que voltam, dificuldade de higiene ou um dente incluso na radiografia merecem avaliação. Histórico, exame e imagem ajudam a decidir entre acompanhar e remover, considerando a posição do siso e os riscos do seu caso.",
    heroBadges: ["Indicação avaliada caso a caso", "Casos de maior complexidade", "João Pessoa"],
    primaryCta: "Quero saber se preciso tirar",
    note: "A indicação é avaliada para cada dente, com benefícios e riscos explicados.",

    painKicker: "O que está acontecendo com o seu?",
    painTitle: "Dor que volta, comida que entala, ou só a dúvida do raio-X.",
    painItems: [
      "A gengiva atrás do último dente incha e dói de tempos em tempos.",
      "Comida entala sempre no mesmo lugar e a escova não alcança.",
      "Você abre menos a boca ou sente a mandíbula travada quando inflama.",
      "Não dói nada, mas apareceu no raio-X e disseram para tirar.",
    ],
    painIcons: ["duvida", "refeicao", "atividade", "camadas"],
    storyEyebrow: "A pergunta que vem antes",
    consequenceTitle: "Primeiro, entender se há indicação de remover.",
    consequenceText:
      "Alguns sisos podem ser acompanhados. Infecção recorrente, cárie sem possibilidade de restauração, dano ao dente vizinho ou lesão associada podem justificar remoção. A decisão reúne sintomas, histórico, exame e imagem.",

    objectionsKicker: "O que costuma ser dito sobre siso",
    objectionsTitle: "O que vale esclarecer antes de decidir.",
    objections: [
      {
        belief: "Todo mundo tem que tirar os quatro?",
        reality: "A indicação é individual, por dente. Quantos remover e em qual momento depende dos achados e do planejamento."
      },
      {
        belief: "Se não dói, posso esquecer o siso?",
        reality: "A ausência de dor não substitui a avaliação. Quando a conduta é acompanhar, o profissional orienta os retornos e a necessidade de novas imagens."
      },
      {
        belief: "Pode haver dormência no lábio?",
        reality: "Alterações de sensibilidade são um risco a discutir. Se a imagem sugere proximidade com o canal da mandíbula, a tomografia pode ajudar no planejamento quando trouxer informação relevante."
      }
    ],

    midCtaQuestion:
      "Seu siso precisa ser removido ou pode ser acompanhado?",

    methodEyebrow: "O que decide a conduta",
    methodTitle: "A decisão reúne histórico, exame e imagem.",
    methodTitleHighlight: "histórico, exame e imagem",
    methodBody: [
      "A consulta começa pelos episódios de dor ou inflamação, pela higiene e pelo exame da boca. A radiografia ajuda a avaliar o siso, o dente vizinho e as estruturas próximas. A tomografia é considerada quando uma informação adicional pode mudar o planejamento.",
      "Nem todo siso precisa sair. Acompanhamento e remoção são discutidos conforme os achados e os riscos. Quando há indicação cirúrgica, a posição, as raízes e a saúde geral orientam o preparo e os cuidados."
    ],
    methodHighlight: "Nem todo siso precisa sair",
    methodPoints: [
      "Histórico de inflamação, dor e dificuldade de higiene.",
      "Posição e raízes do siso; condição do dente vizinho.",
      "Relação com o canal da mandíbula e o seio maxilar.",
      "Saúde geral, medicamentos e tratamentos em andamento."
    ],
    crossLink: { label: "Dor na mandíbula que não é do siso? Entenda DTM e ATM", href: "/cirurgia-atm" },

    journey: {
      kicker: "Como funciona",
      title: "Da avaliação ao acompanhamento.",
      intro: "A primeira decisão é a indicação. Se houver remoção, o preparo e a recuperação são organizados conforme o caso.",
      steps: [
        {
          title: "1. Exame e decisão",
          text: "Histórico, exame da boca e imagem orientam acompanhar ou remover. Exames adicionais são solicitados quando necessários."
        },
        {
          title: "2. Planejamento e procedimento",
          text: "Quando há indicação, você recebe explicações sobre anestesia, riscos e cuidados. A remoção ocorre conforme o planejamento individual."
        },
        {
          title: "3. Recuperação e retorno",
          text: "Os retornos verificam a cicatrização e orientam alimentação, higiene e volta às atividades. O ritmo depende da evolução."
        }
      ]
    },

    authorityBody:
      "Nos sisos inclusos e em outras situações de maior complexidade, o Dr. Adriano avalia a posição do dente e sua relação com as estruturas próximas para discutir a indicação e os riscos.",

    consultationQuestions: [consultaEncaminhamento, consultaParticular],

    preparation: {
      title: "Leve a radiografia que já tiver.",
      text: "Panorâmica e tomografia anteriores ajudam na consulta. Se não tiver imagens, o exame começa pela região e o profissional indica o que for necessário."
    },
    consultationTitle: "Entenda a indicação e o cuidado necessário.",
    consultationIntro:
      "O histórico de sintomas, o exame da boca e as imagens disponíveis ajudam a avaliar o siso e os riscos do caso.",
    consultationOutcome:
      "Se é necessário completar a investigação, quais caminhos considerar e como seriam o acompanhamento ou a remoção.",
    consultationNote: "Avise se faz ortodontia, está gestante ou utiliza medicamentos.",

    faqTitle: "Desconforto, recuperação e planejamento do siso.",
    faqs: [
      {
        question: "Dói para tirar?",
        answer: "A anestesia faz parte do planejamento. Depois do procedimento, pode haver desconforto, com intensidade variável. Você recebe orientações sobre medicação e cuidados conforme o caso."
      },
      {
        question: "Quantos dias preciso reservar para recuperar?",
        answer: "Inchaço e desconforto podem ser maiores nos primeiros dias. O retorno depende da dificuldade do procedimento, do seu trabalho e da evolução. O plano inclui uma estimativa e orientações de acompanhamento."
      },
      {
        question: "Quais são os principais riscos?",
        answer: "Podem ocorrer sangramento, infecção, alveolite, dificuldade temporária para abrir a boca e alterações de sensibilidade. Nos sisos superiores, a relação com o seio maxilar também é avaliada. Os riscos individuais são explicados antes da decisão."
      },
      {
        question: "Posso avaliar durante a gestação ou usando anticoagulante?",
        answer: "Sim. Informe sua saúde e todos os medicamentos. Essas condições podem mudar os cuidados e o momento do procedimento, com participação do médico responsável quando necessária. Não altere medicamentos por conta própria."
      }
    ],

    closingTitle: "Antes de marcar a extração, vale saber se ela é necessária.",
    closingText:
      "Converse com a equipe para esclarecer a indicação e entender os cuidados de acompanhar ou remover o seu siso.",

    visualSummary: {
      kicker: "Posição e planejamento",
      title: "Avaliar o siso e as estruturas próximas.",
      cues: [
        "Posição do dente",
        "Canal da mandíbula",
        "Dente vizinho"
      ]
    },
    formQuestion: "Como podemos ajudar?",
    formOptions: neutralFormOptions,
    contactForm: {
      title: "Converse sobre o seu siso.",
      description: "A equipe informa horários, valor da consulta e o que levar."
    },
    whatsappMessage: "Olá, vi a página sobre cirurgia de siso e gostaria de saber se preciso remover o meu.",
    metadata: {
      title: "Cirurgia de Siso em João Pessoa",
      description: "Precisa mesmo tirar o siso? Entenda quando a remoção é indicada, quando acompanhar basta e como os casos próximos ao nervo são avaliados em João Pessoa.",
    },
  },
};

export const homeFormOptions = [
  "Implantes dentários.",
  "Reconstrução óssea.",
  "DTM e ATM.",
  "Apneia do sono.",
  "Cirurgia ortognática.",
  "Cirurgia de siso.",
  "Outro assunto.",
];

export const dentistFormOptions = [
  "Encaminhar um caso de implantes ou reconstrução.",
  "Encaminhar um caso de ATM.",
  "Encaminhar um caso de cirurgia ortognática.",
  "Encaminhar um caso relacionado à apneia.",
  "Encaminhar um caso de cirurgia de siso.",
  "Discutir um caso antes do encaminhamento.",
  "Outro assunto.",
];
