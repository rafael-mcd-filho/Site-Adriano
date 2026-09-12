/**
 * Data da última revisão editorial do conteúdo clínico. Conteúdo de saúde é
 * YMYL: o Google pondera recência explícita. Quando uma página for revisada
 * sozinha, defina `lastReviewed` só nela.
 */
export const contentLastReviewed = "2026-09-11";

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
  "Quero saber o que levar na primeira consulta.",
  "Prefiro explicar meu caso pelo WhatsApp.",
  "Outro assunto.",
];

export type TreatmentContent = {
  slug: string;
  lastReviewed?: string;
  navLabel: string;
  eyebrow: string;
  motif: "air" | "implant" | "layers" | "joint" | "alignment";

  /* ── Bloco 1 — hero ─────────────────────────────────────────────────── */
  title: string;
  /** Trecho do `title` destacado no H1. Precisa existir no texto. */
  titleHighlight?: string;
  intro: string;
  /** Três selos curtos abaixo do H1. Método e credencial, nunca resultado. */
  heroBadges: [string, string, string];
  /** Rótulo do botão primário, específico da intenção da página. */
  primaryCta: string;
  note: string;

  /* ── Bloco 2 — dor e consequência ───────────────────────────────────── */
  painTitle: string;
  /** Em linguagem de vida real, não de prontuário. */
  painItems: string[];
  consequenceTitle: string;
  /**
   * Agitação factual: o que muda de OPÇÕES com o tempo. Nunca medo fabricado
   * nem urgência inventada — publicidade em saúde não comporta isso, e o
   * público desta especialidade já desconfia de quem promete demais.
   */
  consequenceText: string;

  /* ── Bloco 3 — o que já foi tentado ─────────────────────────────────── */
  objectionsTitle: string;
  objectionsPosition?: "before-method" | "after-journey";
  objections: Array<{ belief: string; reality: string }>;

  /* ── Bloco 4 — método ───────────────────────────────────────────────── */
  methodEyebrow: string;
  methodTitle: string;
  methodTitleHighlight?: string;
  methodBody: string[];
  methodPoints: string[];
  crossLink?: { label: string; href: string };
  journey?: {
    title: string;
    intro: string;
    steps: Array<{ title: string; text: string }>;
  };

  /* ── Bloco 6 — primeira consulta ────────────────────────────────────── */
  whatToBring: string[];
  consultationTitle: string;
  consultationIntro: string;
  consultationOutcome: string;
  consultationNote: string;

  /* ── Bloco 7 e 8 ────────────────────────────────────────────────────── */
  faqs: Array<{ question: string; answer: string }>;
  faqTitle: string;
  closingTitle: string;
  closingText: string;

  /**
   * Somente relatos reais, com origem e autorização verificadas. Manter vazio
   * enquanto o cliente não fornecer conteúdo aprovado; não usar exemplos.
   */
  testimonials: string[];

  visualSummary: {
    kicker: string;
    title: string;
    cues: [string, string, string];
  };
  formQuestion: string;
  formOptions: string[];
  whatsappMessage: string;
  metadata: {
    title: string;
    description: string;
  };
};

/** Respostas iguais nas cinco páginas: valores, segunda opinião e vínculo. */
const sharedFaqs = [
  {
    question: "Como saber o valor da consulta e do tratamento?",
    answer:
      "O atendimento é particular. A equipe informa o valor da consulta antes do agendamento. Se houver proposta de tratamento, os custos são apresentados conforme as etapas do seu caso, antes de você decidir começar.",
  },
  {
    question: "E se eu só quiser uma segunda opinião sobre o que já me disseram?",
    answer:
      "Você pode buscar uma avaliação para esclarecer uma indicação anterior. Traga os exames e relatórios que já tem, além das dúvidas que ficaram. A análise pode confirmar a orientação recebida ou apontar outras possibilidades.",
  },
  {
    question: "Meu dentista continua acompanhando o meu caso?",
    answer:
      "Sim. Quando já existe acompanhamento, a proposta é integrar a etapa especializada ao cuidado do seu dentista, com comunicação sobre a conduta e a continuidade do tratamento.",
  },
];

export const treatments: Record<string, TreatmentContent> = {
  "apneia-do-sono": {
    slug: "apneia-do-sono",
    navLabel: "Apneia do sono",
    eyebrow: "Apneia do sono em João Pessoa",
    motif: "air",
    title: "Você dorme várias horas e ainda acorda cansado?",
    titleHighlight: "ainda acorda cansado",
    intro:
      "O cansaço acompanha o dia, a concentração falha e o ronco preocupa quem dorme ao seu lado. Se você investiga ou já trata apneia obstrutiva, a avaliação buco-maxilo-facial ajuda a esclarecer se a posição dos maxilares participa da dificuldade para respirar durante o sono.",
    heroBadges: ["Em conjunto com a equipe do sono", "Maxilares e respiração", "João Pessoa"],
    primaryCta: "Quero avaliar meu caso",
    note: "Uma avaliação para orientar o cuidado do sono. Sem compromisso com cirurgia.",

    painTitle: "Dormir a noite inteira não significa, necessariamente, descansar bem.",
    painItems: [
      "Levanta da cama sem disposição e sente que já começa o dia cansado.",
      "Precisa lutar contra o sono para acompanhar uma reunião ou uma conversa.",
      "Quem dorme ao seu lado relata ronco alto, pausas na respiração ou despertares com engasgo.",
      "Já trata apneia, mas as dificuldades com o tratamento ainda atrapalham suas noites.",
    ],
    consequenceTitle: "O que você quer recuperar é a disposição para viver o dia",
    consequenceText:
      "Trabalhar com atenção, aproveitar o tempo com a família e sentir que a noite trouxe descanso. Na consulta, conte como o cansaço tem limitado seu dia. Ronco e cansaço, sozinhos, não confirmam apneia: o diagnóstico e os exames do sono mostram o que precisa de cuidado.",

    objectionsTitle: "O que vale esclarecer antes de pensar em cirurgia.",
    objections: [
      { belief: "Roncar significa que tenho apneia?", reality: "Não necessariamente. Ronco e apneia podem ocorrer juntos, mas o diagnóstico depende de avaliação médica e, quando indicado, de um estudo do sono." },
      { belief: "Não me adaptei ao CPAP. Qual é o próximo passo?", reality: "O CPAP usa pressão de ar para manter a via aérea aberta durante o sono. Dificuldades de uso devem ser discutidas com a equipe que acompanha você: ajustes e outras opções podem ser considerados. Isso não define, por si só, uma indicação cirúrgica." },
      { belief: "A posição dos maxilares pode interferir?", reality: "Em alguns casos de apneia obstrutiva, a anatomia dos maxilares influencia o espaço para a passagem de ar. Essa contribuição precisa ser avaliada junto com os exames do sono e os demais fatores envolvidos." },
      { belief: "Vou precisar deixar meu médico do sono?", reality: "A proposta é trabalhar em conjunto. O acompanhamento do sono continua sendo necessário para escolher o tratamento e verificar a resposta ao longo do tempo." },
    ],

    methodEyebrow: "O papel da avaliação buco-maxilo-facial",
    methodTitle: "A cirurgia não é a solução para toda apneia.",
    methodTitleHighlight: "não é a solução para toda apneia",
    methodBody: [
      "O tratamento precisa considerar o que dificulta sua respiração durante o sono. O Dr. Adriano avalia a posição dos maxilares e a via aérea, o caminho por onde o ar passa, junto com seu histórico e os estudos do sono. Isso ajuda a esclarecer se a estrutura da face tem um papel no seu caso.",
      "Essa análise se soma ao acompanhamento com o médico do sono e os demais profissionais. CPAP, medidas clínicas e aparelhos intraorais estão entre as opções, conforme a indicação. A cirurgia dos maxilares é discutida em casos selecionados, quando os benefícios esperados justificam os riscos e as alternativas foram consideradas.",
    ],
    methodPoints: [
      "Sintomas, rotina do sono e condições de saúde.",
      "Polissonografia ou outros estudos do sono já realizados.",
      "Posição dos maxilares e relação com a passagem de ar.",
      "Tratamentos em uso, dificuldades e resposta ao acompanhamento.",
    ],
    whatToBring: [
      "Estudos do sono, como a polissonografia, se já tiver.",
      "Relatórios dos profissionais que acompanham seu sono.",
      "Informações sobre CPAP ou aparelho intraoral, se utiliza.",
      "Lista de medicamentos em uso.",
    ],
    consultationTitle: "Traga suas noites difíceis e as dúvidas sobre o tratamento.",
    consultationIntro: "Como você acorda, o que já tentou e o que dificulta o tratamento fazem parte da conversa. O exame da face e os estudos do sono ajudam a investigar a participação dos maxilares.",
    consultationOutcome: "Se a estrutura dos maxilares pode contribuir para a apneia, quais exames ainda são necessários e o que discutir com sua equipe para orientar os próximos passos.",
    consultationNote: "Se você já faz tratamento para apneia, mantenha o acompanhamento enquanto esclarece suas dúvidas com a equipe responsável.",
    faqTitle: "Dúvidas sobre apneia, exames e possibilidades de tratamento.",
    faqs: [
      { question: "Quem faz o diagnóstico de apneia do sono?", answer: "A investigação é conduzida por um médico, que avalia sintomas e histórico e indica o estudo do sono apropriado, como a polissonografia. A avaliação buco-maxilo-facial complementa esse cuidado quando há suspeita de participação da anatomia dos maxilares." },
      { question: "Todo ronco significa apneia?", answer: "Não. Ronco pode ocorrer sem apneia. Pausas respiratórias percebidas por outra pessoa, despertares com engasgo e sonolência durante o dia são informações relevantes para levar à avaliação médica." },
      { question: "Toda apneia precisa de cirurgia?", answer: "Não. Existem diferentes tipos e causas de apneia. A cirurgia dos maxilares pode ser considerada em casos selecionados de apneia obstrutiva, após análise da anatomia, da gravidade, dos tratamentos e da saúde geral." },
      { question: "Qual é o papel do cirurgião buco-maxilo-facial?", answer: "Avaliar se a posição e a estrutura dos maxilares contribuem para a obstrução da passagem de ar. Essa análise é discutida com os demais profissionais para definir se há alguma indicação de cuidado nessa área." },
      { question: "A avaliação substitui o CPAP ou meu médico do sono?", answer: "Não. O CPAP é uma opção de tratamento importante, e a dificuldade de adaptação merece acompanhamento. Qualquer mudança de conduta precisa ser discutida com a equipe que trata sua apneia." },
      { question: "Preciso repetir a polissonografia antes da consulta?", answer: "Traga os exames que já possui. A necessidade de atualizar ou complementar o estudo do sono depende da história clínica e da orientação dos profissionais envolvidos; não é preciso repetir exames por conta própria." },
      ...sharedFaqs,
    ],
    closingTitle: "Entenda o que pode estar por trás de noites sem descanso.",
    closingText: "Se você investiga ou já trata apneia, converse com a equipe sobre a avaliação dos maxilares. Entender essa parte do quadro pode ajudar a definir um cuidado mais adequado ao seu sono.",
    testimonials: [],
    visualSummary: { kicker: "Sono e respiração", title: "Entender a respiração para orientar o cuidado do sono.", cues: ["Ronco", "Pausas respiratórias", "Cansaço ao acordar"] },
    formQuestion: "Como podemos ajudar?",
    formOptions: neutralFormOptions,
    whatsappMessage: "Olá, vi a página sobre apneia do sono e gostaria de saber como funciona a avaliação buco-maxilo-facial.",
    metadata: { title: "Apneia do Sono em João Pessoa | Avaliação Buco-Maxilo-Facial", description: "Ronco, pausas na respiração e cansaço ao acordar? Entenda o papel dos maxilares na apneia do sono e da avaliação multidisciplinar em João Pessoa." },
  },

  "reconstrucao-ossea": {
    slug: "reconstrucao-ossea",
    navLabel: "Reconstrução óssea",
    eyebrow: "Reconstrução óssea em João Pessoa",
    motif: "layers",
    title: "Ouviu que não há osso suficiente para implante?",
    titleHighlight: "não há osso suficiente",
    intro: "Isso não encerra a avaliação. Se o plano de mastigar com mais conforto parou nessa resposta, vale esclarecer o motivo. Em casos selecionados, a reconstrução óssea pode criar suporte para futuros implantes. A avaliação mostra se essa possibilidade faz sentido para você.",
    heroBadges: ["Avaliação da perda óssea", "Planejamento com seu dentista", "João Pessoa"],
    primaryCta: "Quero avaliar minhas possibilidades",
    note: "Traga os exames que já tem. A primeira decisão é esclarecer suas possibilidades.",

    painTitle: "Você queria uma solução para os dentes. Ficou com mais perguntas.",
    painItems: [
      "A prótese incomoda ao comer, mas você ouviu que não há osso para um implante.",
      "Passaram-se anos desde a perda dos dentes e você não sabe quais opções ainda existem.",
      "Recebeu indicação de enxerto sem entender o que muda nas etapas e na recuperação.",
      "Tem receio de começar um tratamento sem saber o que será possível ao final.",
    ],
    consequenceTitle: "Uma resposta útil precisa explicar o que é possível e por quê",
    consequenceText: "A falta de osso pode interromper o plano que você imaginava para os dentes. A avaliação especializada reúne a região da perda, os tecidos, sua saúde e a futura prótese para discutir caminhos concretos. Ela pode identificar possibilidades ou confirmar limites, com os motivos e as alternativas explicados.",

    objectionsTitle: "Pouco osso: o que essa informação permite concluir?",
    objections: [
      { belief: "Disseram que não tenho osso. Ainda vale avaliar?", reality: "Sim, para entender o que essa informação significa na região que você precisa reabilitar. Os exames e o exame clínico permitem discutir possibilidades de reconstrução ou explicar por que a orientação anterior continua adequada." },
      { belief: "Todo mundo pode fazer enxerto?", reality: "Não. A indicação considera a área a reconstruir, os tecidos ao redor, a saúde geral, medicações e fatores que podem interferir na cicatrização." },
      { belief: "Reconstruir o osso garante o implante?", reality: "Não. A resposta do organismo e a cicatrização precisam ser acompanhadas. A possibilidade de implante é reavaliada conforme as condições obtidas." },
      { belief: "É tudo feito em uma única etapa?", reality: "Em alguns casos é necessário reconstruir, aguardar a cicatrização e só depois reavaliar os implantes. A técnica e a sequência dependem da região e do plano de reabilitação." },
    ],

    methodEyebrow: "Como o plano é construído",
    methodTitle: "Primeiro, a futura reabilitação. Depois, o que precisa ser reconstruído.",
    methodTitleHighlight: "a futura reabilitação",
    methodBody: [
      "O ponto de partida é a prótese de que você precisa para reabilitar os dentes. A partir da posição planejada para ela, o Dr. Adriano e seu dentista avaliam onde há suporte ósseo e o que precisaria ser reconstruído. Assim, cada etapa tem uma finalidade no tratamento.",
      "O exame da boca e a tomografia, quando indicada, mostram o volume e a forma do osso disponível. Se houver indicação de enxerto ou outra técnica reconstrutiva, a conversa inclui os materiais, a cicatrização, os riscos e o que precisa ser reavaliado antes dos implantes. Quando reconstruir não for adequado, outras formas de reabilitação entram no plano.",
    ],
    methodPoints: [
      "Volume ósseo disponível e região da perda.",
      "Posição e função da futura prótese.",
      "Condições dos tecidos, saúde geral e medicamentos.",
      "Etapas de reconstrução, cicatrização e reavaliação.",
    ],
    crossLink: { label: "Entenda como a reconstrução se relaciona aos implantes", href: "/implantes-dentarios" },
    whatToBring: ["Tomografia ou radiografias, se já tiver.", "Pareceres e planos de tratamento anteriores.", "Informações sobre a prótese que usa e o acompanhamento atual.", "Lista de medicamentos e exames recentes disponíveis."],
    consultationTitle: "Uma avaliação para retomar a conversa sobre suas possibilidades.",
    consultationIntro: "Você conta o que deseja reabilitar e o que já ouviu sobre a falta de osso. O exame da região e as imagens disponíveis ajudam a esclarecer essa informação e a necessidade de novos exames.",
    consultationOutcome: "Se há uma possibilidade de reconstrução a considerar, quais condições precisam ser atendidas e como seriam as etapas até reavaliar os implantes. Os limites e as alternativas fazem parte da orientação.",
    consultationNote: "Você pode buscar uma segunda opinião antes de decidir como seguir com a reabilitação.",
    faqTitle: "Dúvidas sobre enxerto, cicatrização e futuros implantes.",
    faqs: [
      { question: "O que é reconstrução óssea?", answer: "É um conjunto de procedimentos usados, quando indicados, para recuperar volume ou forma do osso. Na reabilitação com implantes, pode envolver enxertos para buscar o suporte necessário ao plano protético." },
      { question: "Tenho pouco osso. Posso fazer enxerto?", answer: "A falta de osso, isoladamente, não define a indicação. A região, o volume necessário, os tecidos e suas condições de saúde precisam ser analisados. Algumas pessoas não são candidatas ao procedimento." },
      { question: "A reconstrução garante que vou receber implantes?", answer: "Não. O enxerto precisa cicatrizar e a resposta varia entre pacientes. A condição obtida é reavaliada antes de definir a possibilidade e o momento de colocar implantes." },
      { question: "De onde vem o osso ou o material do enxerto?", answer: "O planejamento pode considerar osso do próprio paciente e materiais de enxerto de outras origens. A escolha, a procedência e os cuidados envolvidos devem ser explicados conforme a técnica indicada." },
      { question: "O tratamento é feito de uma vez? Quanto tempo leva?", answer: "Pode envolver etapas separadas por períodos de cicatrização. Em situações selecionadas, procedimentos podem ser combinados. A estimativa depende da técnica, da região e da evolução do seu caso." },
      { question: "Como é o desconforto e a recuperação?", answer: "Anestesia e cuidados após o procedimento fazem parte do plano. Pode haver dor, inchaço e restrições temporárias. A intensidade e o tempo de recuperação variam conforme a cirurgia e são discutidos antes da decisão." },
      { question: "E se o enxerto não cicatrizar como esperado?", answer: "Essa possibilidade deve ser considerada antes de começar. O acompanhamento permite avaliar a cicatrização, identificar problemas e discutir se é necessário intervir, rever o plano ou considerar outras formas de reabilitação." },
      { question: "Vou ficar sem dentes durante as etapas?", answer: "As opções provisórias são analisadas conforme a área tratada e a necessidade de proteger a cicatrização. O que pode ser utilizado no seu caso deve ser discutido no planejamento." },
      { question: "Diabetes, pressão alta ou medicamentos interferem?", answer: "Podem influenciar os cuidados e a indicação. Informe seu histórico e todos os medicamentos em uso. Quando necessário, a avaliação é integrada ao médico que acompanha você." },
      ...sharedFaqs,
    ],
    closingTitle: "A dúvida sobre a falta de osso pode dar lugar a uma decisão mais clara.",
    closingText: "Agende uma avaliação e traga o plano e os exames que já recebeu. Vamos discutir o que a perda óssea significa para você e quais caminhos de reabilitação merecem ser considerados.",
    testimonials: [],
    visualSummary: { kicker: "Osso e reabilitação", title: "Reconstruir com um objetivo para os seus dentes.", cues: ["Perda óssea", "Enxerto ósseo", "Futura prótese"] },
    formQuestion: "Como podemos ajudar?",
    formOptions: neutralFormOptions,
    whatsappMessage: "Olá, vi a página sobre reconstrução óssea e gostaria de saber como avaliar minhas possibilidades de reabilitação.",
    metadata: { title: "Reconstrução Óssea em João Pessoa | Enxerto para Implantes", description: "Ouviu que não há osso suficiente para implante? Entenda como a reconstrução e o enxerto ósseo são avaliados em João Pessoa, com indicação individual." },
  },

  "cirurgia-atm": {
    slug: "cirurgia-atm",
    navLabel: "DTM e ATM",
    eyebrow: "DTM e ATM em João Pessoa",
    motif: "joint",
    title: "Sua mandíbula estala, dói ou parece travar?",
    titleHighlight: "estala, dói ou parece travar",
    intro: "Se você escolhe o que comer por receio da dor ou evita abrir bem a boca, a mandíbula já interfere na rotina. A avaliação de DTM e ATM investiga a origem dos sintomas para orientar cuidados que busquem recuperar conforto e movimento.",
    heroBadges: ["Investigação da dor", "Cuidados além da cirurgia", "João Pessoa"],
    primaryCta: "Quero investigar minha dor na mandíbula",
    note: "Você pode buscar ajuda mesmo sem diagnóstico. A avaliação não pressupõe cirurgia.",

    painTitle: "Quando mastigar, conversar ou bocejar traz desconforto.",
    painItems: [
      "Deixa alimentos de lado ou mastiga com cuidado porque a mandíbula dói.",
      "Sente dor perto do ouvido ao falar, bocejar ou abrir mais a boca.",
      "Percebe estalos com dor ou teme que a mandíbula trave durante uma refeição.",
      "Já usou placa ou tentou outros cuidados, mas o incômodo continua voltando.",
    ],
    consequenceTitle: "Você quer voltar a fazer coisas simples sem pensar tanto na dor",
    consequenceText: "Uma refeição, uma conversa longa, um bocejo. Quando a mandíbula passa a exigir atenção o tempo todo, investigar a causa ajuda a escolher o cuidado, em vez de repetir tentativas sem orientação. Dor persistente, por si só, não significa dano progressivo nem necessidade de cirurgia.",

    objectionsTitle: "Já tentou aliviar a dor e ainda tem dúvidas?",
    objections: [
      { belief: "Todo estalo é um problema que precisa de cirurgia?", reality: "Não. Estalos sem dor ou limitação são comuns e, em geral, não precisam de tratamento. Quando há dor ou dificuldade de movimento, a avaliação ajuda a entender o quadro." },
      { belief: "Já usei placa e continuo com dor.", reality: "Leve essa experiência para a consulta. Entender como você usou a placa e o que mudou ajuda a rever o diagnóstico e a ajustar o plano. A persistência da dor não torna a cirurgia o próximo passo automático." },
      { belief: "Dor de cabeça pode ter relação com DTM?", reality: "Pode haver relação em alguns casos, mas dor de cabeça tem outras causas. O histórico e o exame ajudam a diferenciar as possibilidades e a definir se outro profissional deve participar." },
      { belief: "Por que minha mandíbula trava?", reality: "O travamento pode estar associado a alterações no movimento da articulação e precisa ser avaliado junto com os outros sinais. A sensação de travar, isoladamente, não permite definir a causa." },
    ],

    methodEyebrow: "Tratamento conforme a origem dos sintomas",
    methodTitle: "Cirurgia é uma possibilidade, não um destino obrigatório.",
    methodTitleHighlight: "não um destino obrigatório",
    methodBody: [
      "A dor pode vir dos músculos da mastigação, da ATM, a articulação próxima ao ouvido, ou de outras estruturas. DTM é o nome dado a um grupo de alterações dessa articulação e desses músculos. Diferenciar as causas evita escolher o tratamento apenas pelo lugar que dói.",
      "Muitos quadros começam com cuidados conservadores, como orientação de hábitos, fisioterapia e outros recursos conforme o diagnóstico. O objetivo é reduzir os sintomas e melhorar os movimentos da mandíbula, acompanhando o que funciona para você e o que precisa ser ajustado.",
      "Procedimentos na ATM são considerados em situações selecionadas. Podem envolver técnicas minimamente invasivas e, em casos específicos, cirurgia aberta ou prótese articular. A indicação exige discutir os benefícios possíveis, os riscos e as alternativas.",
    ],
    methodPoints: ["Histórico da dor e impacto na mastigação.", "Exame dos movimentos, músculos e articulações.", "Exames de imagem apenas quando necessários.", "Tratamentos anteriores e integração com outros profissionais."],
    whatToBring: ["Ressonância, tomografia ou outros exames, se já tiver.", "A placa que utiliza, se for o caso.", "Informações sobre tratamentos já realizados e sua resposta.", "Lista de medicamentos, inclusive os usados para dor."],
    consultationTitle: "O que piora sua dor? O que você já deixou de fazer por causa dela?",
    consultationIntro: "A consulta começa por essas respostas e pelo que já foi tentado. O exame avalia os músculos, a articulação e os movimentos da boca; imagens são solicitadas quando acrescentam informação à investigação.",
    consultationOutcome: "As possíveis origens da dor, os próximos passos para esclarecê-las e os cuidados a considerar. Quando outro profissional puder contribuir, essa participação é discutida com você.",
    consultationNote: "Leve a placa e os exames que já possui. Contar o que ajudou ou não ajudou faz diferença na avaliação.",
    faqTitle: "Dúvidas sobre dor, estalos, placas e cirurgia de ATM.",
    faqs: [
      { question: "Qual é a diferença entre DTM e ATM?", answer: "ATM é a articulação temporomandibular, que participa dos movimentos de abrir e fechar a boca. DTM reúne alterações da articulação e dos músculos da mastigação que podem provocar dor ou dificuldade de movimento." },
      { question: "Vou precisar operar?", answer: "Não é possível definir pela presença de dor ou estalos. O cuidado costuma começar com opções conservadoras. Procedimentos cirúrgicos são reservados a situações selecionadas, considerando diagnóstico, alterações encontradas e resposta ao tratamento." },
      { question: "Estalo sem dor precisa de tratamento?", answer: "Estalos isolados, sem dor e sem limitação dos movimentos, são comuns e geralmente não exigem tratamento. Se houver dor, travamento ou mudança na abertura da boca, esses sinais devem ser avaliados." },
      { question: "Já usei placa e continuo com sintomas. O que fazer?", answer: "Leve a placa e conte como foi o uso e a resposta ao tratamento. A reavaliação considera o diagnóstico, possíveis fatores associados e se o plano precisa de ajustes. Isso não significa que você precise operar." },
      { question: "Dor de cabeça ou perto do ouvido pode ter relação?", answer: "Pode, mas esses sintomas também ocorrem por outras causas. A investigação precisa considerar essas possibilidades, sem atribuir toda dor à ATM. Outros profissionais podem participar quando necessário." },
      { question: "Por que minha mandíbula trava?", answer: "Existem diferentes alterações que podem limitar o movimento da mandíbula. O histórico dos episódios e o exame clínico ajudam a orientar a investigação; em alguns casos, exames de imagem são necessários." },
      { question: "Quanto tempo leva para melhorar? A dor pode voltar?", answer: "A resposta varia com a causa, a conduta e os fatores envolvidos. Os sintomas podem oscilar ou reaparecer, por isso o acompanhamento permite ajustar o cuidado. Não há um prazo ou resultado igual para todos." },
      ...sharedFaqs,
    ],
    closingTitle: "A dor está escolhendo o que você come? Vamos investigar.",
    closingText: "Agende uma avaliação para conversar sobre como a mandíbula interfere no seu dia. O próximo passo é entender a causa e discutir um cuidado orientado ao que você precisa recuperar na rotina.",
    testimonials: [],
    visualSummary: { kicker: "Articulação e músculos", title: "Investigar a dor. Cuidar do movimento.", cues: ["Dor na mandíbula", "Estalos", "Travamento"] },
    formQuestion: "Como podemos ajudar?",
    formOptions: neutralFormOptions,
    whatsappMessage: "Olá, vi a página sobre DTM e ATM e gostaria de saber como funciona a avaliação da mandíbula.",
    metadata: { title: "DTM e ATM em João Pessoa | Dor na Mandíbula e Tratamento", description: "Dor na mandíbula, estalos ou travamento? Conheça a avaliação de DTM e ATM em João Pessoa, os cuidados conservadores e quando a cirurgia é considerada." },
  },

  "cirurgia-ortognatica": {
    slug: "cirurgia-ortognatica",
    navLabel: "Cirurgia ortognática",
    eyebrow: "Cirurgia ortognática em João Pessoa",
    motif: "alignment",
    title: "Sua mordida não encaixa e mastigar exige esforço?",
    titleHighlight: "mordida não encaixa",
    intro: "Cortar os alimentos com os dentes, fechar os lábios sem esforço e se sentir à vontade com o próprio rosto podem fazer parte da mesma preocupação. A avaliação com o cirurgião e o ortodontista esclarece se a posição dos maxilares participa do incômodo e quais tratamentos considerar.",
    heroBadges: ["Integração com a ortodontia", "Função e estrutura facial", "João Pessoa"],
    primaryCta: "Quero entender se tenho indicação",
    note: "Você não precisa chegar decidido a operar. O primeiro passo é entender a indicação.",

    painTitle: "O incômodo aparece na refeição, na foto e no espelho.",
    painItems: [
      "Precisa adaptar a forma de morder porque os dentes da frente não cortam bem os alimentos.",
      "Mastigar exige esforço ou os lábios não se fecham com conforto.",
      "A posição do queixo ou a diferença entre os lados da face incomoda você.",
      "Seu ortodontista falou em cirurgia e surgiram dúvidas sobre a mudança no rosto e a recuperação.",
    ],
    consequenceTitle: "Mastigar melhor e se sentir bem com a própria face merecem uma conversa",
    consequenceText: "O que dificulta sua mastigação e o que incomoda na aparência devem ser ouvidos juntos. A avaliação relaciona essas expectativas à estrutura dos maxilares e explica quais mudanças são possíveis. Tempo de aparelho, recuperação e rotina de trabalho também entram na decisão desde o começo.",

    objectionsPosition: "after-journey",
    objectionsTitle: "E o aparelho, as mudanças no rosto e a volta à rotina?",
    objections: [
      { belief: "Toda mordida que não encaixa precisa de cirurgia?", reality: "Não. Algumas alterações podem ser tratadas com ortodontia. A relação entre dentes e maxilares, a função e suas necessidades ajudam a definir se uma etapa cirúrgica deve ser considerada." },
      { belief: "Vou precisar usar aparelho?", reality: "A ortodontia costuma fazer parte do tratamento. O preparo e os ajustes posteriores são definidos em conjunto com o ortodontista, conforme o plano individual." },
      { belief: "Meu rosto vai mudar?", reality: "Reposicionar os maxilares pode modificar a aparência facial. Essas repercussões são discutidas no planejamento junto com os objetivos funcionais; simulações são recursos de comunicação e não garantias do resultado." },
      { belief: "Como vou organizar a recuperação?", reality: "Alimentação, higiene, inchaço e retorno ao trabalho precisam entrar no plano. As orientações e as estimativas dependem da cirurgia, da sua atividade e da evolução após o procedimento." },
    ],

    methodEyebrow: "O que orienta a indicação",
    methodTitle: "Cirurgião e ortodontista planejam a mesma jornada, cada um na sua etapa.",
    methodTitleHighlight: "a mesma jornada",
    methodBody: [
      "A cirurgia ortognática reposiciona os maxilares quando a alteração óssea justifica esse tratamento. O planejamento considera a relação da mordida, as dificuldades para mastigar e as repercussões na face. Suas expectativas ajudam a definir os objetivos da conversa, junto com o que é viável no seu caso.",
      "O Dr. Adriano e o ortodontista diferenciam a posição dos dentes da posição dos maxilares para discutir o papel de cada etapa. Nem toda alteração precisa de cirurgia. Se houver indicação, você recebe explicações sobre os benefícios funcionais esperados, os riscos e as alternativas. Queixas de respiração ou fala podem exigir outros profissionais.",
    ],
    methodPoints: ["Relação entre os dentes e os maxilares.", "Mastigação, fechamento dos lábios e queixas funcionais.", "Análise facial, exames e documentação ortodôntica.", "Objetivos e sequência definidos com o ortodontista."],
    journey: {
      title: "Da primeira avaliação aos ajustes da mordida.",
      intro: "Conhecer as etapas ajuda a planejar o aparelho, a eventual cirurgia e o período de recuperação. A sequência e os intervalos são definidos para o seu caso.",
      steps: [
        { title: "1. Avaliação e preparo", text: "Cirurgião e ortodontista analisam documentação, exames e objetivos. Se houver indicação, combinam a preparação ortodôntica e cirúrgica necessária." },
        { title: "2. Planejamento e cirurgia", text: "O plano detalha os movimentos previstos, os cuidados, os riscos e as alternativas. A cirurgia é uma etapa da jornada e só é realizada após a preparação indicada." },
        { title: "3. Recuperação e continuidade", text: "O acompanhamento orienta alimentação, higiene e retorno às atividades. A ortodontia pode continuar com os ajustes da mordida, conforme a evolução." },
      ],
    },
    whatToBring: ["Documentação ortodôntica e exames disponíveis.", "Contato do ortodontista, se já estiver em acompanhamento.", "Informações sobre tratamentos anteriores e medicamentos.", "Dúvidas sobre função, mudanças faciais e recuperação."],
    consultationTitle: "Traga o que incomoda na mordida e o que você espera do tratamento.",
    consultationIntro: "Você conta suas dificuldades para comer, suas expectativas sobre a face e os receios sobre a cirurgia. O exame e a documentação ortodôntica ajudam a relacionar essas questões à posição dos dentes e dos maxilares.",
    consultationOutcome: "O que falta para definir a indicação e como o ortodontista participa. Se a cirurgia for uma opção, a conversa aborda mudanças esperadas, riscos, etapas e recuperação para você planejar a decisão.",
    consultationNote: "Se o ortodontista já sugeriu cirurgia, traga a documentação. A avaliação também serve para esclarecer essa orientação.",
    faqTitle: "Aparelho, mudanças faciais e recuperação: suas principais dúvidas.",
    faqs: [
      { question: "Como saber se tenho indicação de cirurgia ortognática?", answer: "É preciso avaliar a relação entre dentes e maxilares, as queixas funcionais e suas condições de saúde. O cirurgião e o ortodontista analisam se o benefício de uma abordagem conjunta justifica a cirurgia e quais alternativas existem." },
      { question: "Toda mordida errada precisa de cirurgia?", answer: "Não. Muitas alterações são tratadas com ortodontia. A presença de uma diferença óssea também não define, sozinha, a necessidade de operar: função, extensão da alteração e objetivos precisam ser considerados." },
      { question: "Vou precisar usar aparelho? Qual é o papel do ortodontista?", answer: "O aparelho costuma participar do preparo e dos ajustes da mordida depois da cirurgia. O ortodontista planeja essas etapas junto com o cirurgião. A sequência e a duração dependem do seu caso." },
      { question: "Quanto tempo dura todo o tratamento?", answer: "O tempo inclui preparação, eventual cirurgia, recuperação e finalização ortodôntica. As estimativas são feitas após a análise conjunta e podem mudar conforme a resposta ao tratamento; não existe um prazo único." },
      { question: "Como é a recuperação e o afastamento do trabalho?", answer: "Pode haver inchaço, desconforto, alterações de sensibilidade e restrições temporárias de alimentação e atividade. O retorno ao trabalho depende do procedimento, do tipo de atividade e da evolução. Esses cuidados são discutidos antes da cirurgia e acompanhados depois." },
      { question: "Vou ficar com a boca imobilizada?", answer: "Os recursos de fixação e a necessidade de elásticos ou limitações de movimento dependem da técnica e do caso. A equipe explica as orientações previstas para alimentação, higiene e movimentação antes do procedimento." },
      { question: "Meu rosto vai mudar?", answer: "A mudança de posição dos maxilares pode alterar o perfil e outras relações faciais. O planejamento permite conversar sobre as repercussões esperadas e seus limites. A cicatrização e o resultado variam de pessoa para pessoa." },
      { question: "Minha mastigação ou respiração pode melhorar?", answer: "A melhora da função pode ser um objetivo quando a alteração dos maxilares participa da dificuldade. Benefícios para mastigação ou respiração dependem da causa e da indicação. Queixas respiratórias exigem investigação específica e, quando necessário, avaliação multidisciplinar." },
      { question: "O atendimento é por convênio?", answer: "O atendimento do consultório é particular, sem convênios. A equipe informa os valores da consulta e esclarece os custos de uma eventual proposta de tratamento individualmente." },
      ...sharedFaqs,
    ],
    closingTitle: "Antes de decidir sobre a cirurgia, entenda o que pode mudar para você.",
    closingText: "Agende uma avaliação para conversar sobre mastigação, face e expectativas. Com a participação do ortodontista, você pode discutir a indicação e conhecer as etapas antes de escolher como seguir.",
    testimonials: [],
    visualSummary: { kicker: "Mordida e face", title: "Planejar a função sem deixar suas expectativas de lado.", cues: ["Mastigação", "Posição dos maxilares", "Mudanças faciais"] },
    formQuestion: "Como podemos ajudar?",
    formOptions: neutralFormOptions,
    whatsappMessage: "Olá, vi a página sobre cirurgia ortognática e gostaria de entender como funciona a avaliação de indicação.",
    metadata: { title: "Cirurgia Ortognática em João Pessoa | Indicação e Etapas", description: "Mordida que não encaixa ou dificuldade para mastigar? Entenda a indicação, o papel do ortodontista e a jornada da cirurgia ortognática em João Pessoa." },
  },

  "implantes-dentarios": {
    slug: "implantes-dentarios",
    navLabel: "Implantes dentários",
    eyebrow: "Implantes dentários em João Pessoa",
    motif: "implant",
    title: "A falta de dentes mudou seu jeito de comer e sorrir?",
    titleHighlight: "comer e sorrir",
    intro: "Quando falta um dente ou a prótese incomoda, até uma refeição simples pede adaptações. Implantes podem fazer parte da reabilitação para buscar mais conforto ao mastigar. A avaliação esclarece se são uma opção para você e como planejar os dentes que eles vão sustentar.",
    heroBadges: ["Avaliação para implantes", "Planejamento com seu dentista", "João Pessoa"],
    primaryCta: "Quero saber se posso fazer implante",
    note: "Conheça as opções e as etapas antes de decidir pelo tratamento.",

    painTitle: "O que você gostaria de voltar a fazer com mais conforto?",
    painItems: [
      "Mastigar sem precisar escolher sempre o mesmo lado da boca.",
      "Sentar à mesa com menos preocupação com o incômodo da prótese removível.",
      "Conversar e sorrir sem concentrar a atenção no espaço deixado por um dente.",
      "Encontrar uma opção para os dentes que você perdeu há anos.",
    ],
    consequenceTitle: "O plano começa pelo que faz falta no seu dia a dia",
    consequenceText: "A reabilitação deve considerar os alimentos que você evita, o conforto para falar e o que incomoda na prótese atual. Os implantes dão suporte aos dentes da prótese e podem contribuir para essas funções quando indicados. A avaliação relaciona seus objetivos às condições da boca e aos cuidados de manutenção.",

    objectionsPosition: "after-journey",
    objectionsTitle: "Prótese removível, pouco osso ou medo de operar: vale conversar.",
    objections: [
      { belief: "Uso prótese removível. Posso colocar implantes?", reality: "Em alguns casos, sim. É preciso avaliar o osso, os tecidos e o tipo de prótese adequado à sua boca. A conversa também inclui o que você poderá usar durante a transição entre as etapas." },
      { belief: "Perdi o dente há muito tempo.", reality: "Você ainda pode buscar uma avaliação. O tempo de perda, as mudanças no osso e a posição dos dentes vizinhos ajudam a definir quais opções existem e se alguma preparação será necessária." },
      { belief: "Tenho pouco osso. Todo caso precisa de enxerto?", reality: "Não. O volume ósseo é analisado em relação à posição planejada do implante e à futura prótese. Reconstrução só entra na proposta quando houver necessidade e condições para realizá-la." },
      { belief: "Tenho receio da cirurgia.", reality: "Anestesia, desconforto esperado, recuperação, riscos e alternativas fazem parte da conversa. Conhecer essas informações ajuda a decidir com mais clareza, no seu tempo." },
    ],

    methodEyebrow: "Da necessidade à reabilitação",
    methodTitle: "Um implante bem planejado começa antes do procedimento.",
    methodTitleHighlight: "antes do procedimento",
    methodBody: [
      "O implante é o suporte; a prótese é a parte que substitui o dente e participa da mastigação. Planejá-los juntos permite considerar onde o dente precisa ficar, como ele encontrará os demais e quais condições de osso e gengiva serão necessárias.",
      "O Dr. Adriano integra a etapa cirúrgica ao planejamento do seu dentista. O exame da boca, as imagens quando indicadas e seu histórico de saúde orientam a proposta. Você conhece as possibilidades de reabilitação, as etapas e os cuidados antes de escolher como seguir.",
    ],
    methodPoints: ["Quantidade de osso e saúde da gengiva.", "Posição do implante em relação à futura prótese.", "Mordida, saúde geral e fatores de cicatrização.", "Higiene, manutenção e acompanhamento após a reabilitação."],
    crossLink: { label: "Pouco osso? Entenda quando considerar reconstrução óssea", href: "/reconstrucao-ossea" },
    journey: {
      title: "Do dente que faz falta à reabilitação planejada.",
      intro: "O plano explica as etapas, a cicatrização e o que poderá ser usado provisoriamente. Saber como o processo funciona ajuda você a organizar a rotina.",
      steps: [
        { title: "1. Entender as condições", text: "Conversa, exame da boca e análise das imagens disponíveis. Exames adicionais são solicitados se necessários para definir as possibilidades." },
        { title: "2. Preparar e realizar", text: "Se houver indicação, o plano detalha preparo dos tecidos, eventual reconstrução óssea, colocação do implante e acompanhamento da cicatrização." },
        { title: "3. Reabilitar e acompanhar", text: "A prótese é planejada com seu dentista conforme as condições obtidas. Higiene e consultas de manutenção fazem parte do cuidado contínuo." },
      ],
    },
    whatToBring: ["Radiografia ou tomografia, se já tiver.", "Informações sobre próteses e tratamentos anteriores.", "Lista de medicamentos e condições de saúde.", "Exames recentes e contato do dentista que acompanha você, se houver."],
    consultationTitle: "Vamos conversar sobre o que falta para você mastigar com mais conforto.",
    consultationIntro: "Você conta quais dentes perdeu, o que evita comer e como se sente com a prótese atual, se usa uma. O exame da boca e as imagens disponíveis ajudam a entender o suporte para uma reabilitação.",
    consultationOutcome: "Se os implantes são uma opção a considerar, quais exames faltam e se a boca precisa de algum preparo. A proposta deve explicar a prótese, as etapas, os cuidados e as alternativas para o seu caso.",
    consultationNote: "Mesmo que a perda dentária seja antiga, você pode avaliar suas opções. Não é preciso decidir pelo implante antes da consulta.",
    faqTitle: "Suas dúvidas sobre osso, prótese e cuidados com implantes.",
    faqs: [
      { question: "Como saber se posso fazer implante?", answer: "A avaliação considera osso, gengiva, mordida, saúde geral, medicamentos e a prótese planejada. O exame clínico e os exames de imagem necessários ajudam a definir a indicação e as alternativas." },
      { question: "Uso prótese removível. Posso trocar por implantes?", answer: "Em alguns casos, implantes podem dar suporte a outro tipo de prótese. A possibilidade depende das condições da boca e do plano protético. A avaliação também discute o que pode ser usado durante as etapas." },
      { question: "Perdi o dente há muitos anos. Ainda posso avaliar?", answer: "Sim. O tempo de perda não determina sozinho a indicação. Pode haver mudanças no osso ou nos dentes vizinhos, e a avaliação ajuda a entender se elas exigem cuidados ou etapas adicionais." },
      { question: "Tenho pouco osso. Todo implante precisa de enxerto?", answer: "Não. A necessidade de enxerto depende da quantidade e da posição do osso em relação ao implante planejado. Quando falta suporte, reconstrução pode ser discutida, desde que haja indicação e condições para realizá-la." },
      { question: "Vou ficar sem dente durante o processo?", answer: "As possibilidades de prótese provisória são analisadas no planejamento. Elas dependem da região, da estabilidade obtida e da necessidade de proteger a cicatrização; não são iguais em todos os casos." },
      { question: "A idade ou os medicamentos impedem o tratamento?", answer: "A idade isolada não responde essa pergunta. Saúde geral, desenvolvimento ósseo, condições da boca e medicamentos precisam ser considerados. Em alguns casos é necessário conversar com o médico responsável pelo seu acompanhamento." },
      { question: "Quais são os riscos e os cuidados depois?", answer: "Podem ocorrer infecção, dificuldades de cicatrização ou falha na integração do implante, entre outros riscos. Saúde geral, tabagismo, higiene e condições locais influenciam o cuidado. Consultas de acompanhamento e manutenção da prótese continuam necessárias após o tratamento." },
      ...sharedFaqs,
    ],
    closingTitle: "O que você gostaria de mudar na próxima vez que se sentar à mesa?",
    closingText: "Se a falta de dentes ou a prótese limita suas refeições, agende uma avaliação. Vamos entender o que incomoda e discutir se os implantes podem fazer parte de um plano para reabilitar sua mastigação.",
    testimonials: [],
    visualSummary: { kicker: "Dentes e mastigação", title: "O implante sustenta a prótese. O plano considera sua rotina.", cues: ["Osso e gengiva", "Mastigação", "Futura prótese"] },
    formQuestion: "Como podemos ajudar?",
    formOptions: neutralFormOptions,
    whatsappMessage: "Olá, vi a página de implantes dentários e gostaria de saber como funciona a avaliação para o meu caso.",
    metadata: { title: "Implantes Dentários em João Pessoa | Avalie seu Caso", description: "Perdeu dentes ou sente incômodo com a prótese? Conheça a avaliação para implantes dentários em João Pessoa: osso, gengiva, mordida e futura reabilitação." },
  },


};

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
  "Encaminhar um caso de ATM.",
  "Encaminhar um caso de cirurgia ortognática.",
  "Encaminhar um caso relacionado à apneia.",
  "Discutir um caso antes do encaminhamento.",
  "Outro assunto.",
];
