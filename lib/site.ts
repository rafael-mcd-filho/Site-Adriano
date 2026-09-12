/**
 * Identidade, registros, Instagram e domínio fornecidos pelo cliente em
 * 10/09/2026. Certificação e banca constam no certificado de 2026 enviado.
 * Currículo, consultórios e WhatsApp de atendimento fornecidos em 12/09/2026.
 */

/**
 * Indexação é uma decisão; dado de demonstração era outra, e as duas já foram
 * a mesma chave — o que tornava o site impossível de publicar sem escolher
 * entre dado falso e dado nenhum.
 *
 * O site é rastreável por padrão; `NEXT_PUBLIC_SITE_NOINDEX=true` fecha de
 * volta, e deploys de preview da Vercel saem do índice sozinhos. Abrir o
 * índice desliga o modo demo: nada de demonstração chega ao Google.
 *
 * Desde 12/09/2026 o atendimento tem dado real, então o modo demo não carrega
 * mais nenhum valor — a chave continua existindo só para os avisos de
 * ambiente de teste.
 */
const isPreviewDeploy = process.env.NEXT_PUBLIC_VERCEL_ENV === "preview";
export const isIndexable =
  !isPreviewDeploy && process.env.NEXT_PUBLIC_SITE_NOINDEX !== "true";

const wantsDemoData = process.env.NEXT_PUBLIC_SITE_IS_DEMO !== "false";
const isDemo = wantsDemoData && !isIndexable;

/**
 * Um consultório. São dois, e nenhum é "o principal" para quem está na outra
 * cidade: cada um tem endereço e WhatsApp próprios.
 *
 * O bairro de Natal não veio no material e não foi deduzido pelo CEP —
 * endereço é o dado que manda gente para uma porta, e ele fica como veio.
 */
export type PracticeLocation = {
  id: "joao-pessoa" | "natal";
  city: string;
  state: "PB" | "RN";
  building: string;
  street: string;
  complement: string;
  neighborhood?: string;
  postalCode: string;
  /** Somente dígitos, com DDI. */
  whatsapp: string;
  whatsappDisplay: string;
};

export const practiceLocations: PracticeLocation[] = [
  {
    id: "joao-pessoa",
    city: "João Pessoa",
    state: "PB",
    building: "Edifício Eco Medical Center",
    street: "Rua Antônio Rabelo Júnior, 170",
    complement: "Sala 1405",
    neighborhood: "Miramar",
    postalCode: "58032-090",
    whatsapp: "5583986070067",
    whatsappDisplay: "(83) 98607-0067",
  },
  {
    id: "natal",
    city: "Natal",
    state: "RN",
    building: "Edifício CTC — Corporate Tower Center",
    street: "Av. Amintas Barros, 3700",
    complement: "Torre Trade, sala 511",
    postalCode: "59075-250",
    whatsapp: "5584994177276",
    whatsappDisplay: "(84) 99417-7276",
  },
];

/** Endereço em uma linha, na ordem que o Google Maps entende. */
export function locationAddress(location: PracticeLocation) {
  return [
    location.street,
    location.complement,
    location.neighborhood,
    location.city + " - " + location.state,
    location.postalCode,
  ]
    .filter(Boolean)
    .join(", ");
}

/**
 * Mapa incorporado apontando para o endereço real. Busca por texto, sem chave
 * de API: o alfinete cai no endereço publicado, que agora é verdadeiro.
 */
export function locationMapEmbed(location: PracticeLocation) {
  return (
    "https://maps.google.com/maps?q=" +
    encodeURIComponent(location.building + ", " + locationAddress(location)) +
    "&z=16&output=embed"
  );
}

/** Link para abrir a rota no aplicativo de mapas do celular. */
export function locationMapsLink(location: PracticeLocation) {
  return (
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(location.building + ", " + locationAddress(location))
  );
}

/**
 * Trajetória em ordem cronológica, conforme informado pelo cliente.
 *
 * A ordem é informação — por isso o ano vem na frente quando existe. Onde o
 * material não trouxe ano (especialidade, mestrado e doutorado), o item fica
 * sem ano em vez de ganhar um estimado.
 *
 * Dois itens vieram descritos como relato do próprio profissional ("segundo a
 * conversa"): a fundação do serviço e da residência no HUOL e a fundação do
 * serviço pediátrico no Varela Santiago. Estão publicados como os demais, com
 * esta ressalva registrada aqui.
 */
export const professionalTimeline: Array<{
  year?: string;
  title: string;
  detail: string;
}> = [
  {
    year: "1997",
    title: "Graduação em Odontologia",
    detail: "Universidade Federal do Rio Grande do Norte (UFRN), com láurea de melhor concluinte.",
  },
  {
    title: "Especialista em Cirurgia e Traumatologia Buco-Maxilo-Facial",
    detail: "Especialidade reconhecida pelo Conselho Federal de Odontologia.",
  },
  {
    title: "Mestrado e doutorado",
    detail: "Em Cirurgia e Traumatologia Buco-Maxilo-Facial, pela Universidade Estadual de Campinas (UNICAMP).",
  },
  {
    year: "2004",
    title: "Professor da UFRN, por concurso",
    detail: "Hoje professor titular e chefe do Serviço de Cirurgia e Traumatologia Buco-Maxilo-Facial do Hospital Universitário Onofre Lopes (HUOL/UFRN), onde fundou o serviço e o programa de residência.",
  },
  {
    title: "Hospital Infantil Varela Santiago",
    detail: "Fundador e coordenador do serviço voltado a crianças com anomalias bucomaxilofaciais, incluindo pacientes fissurados e sindrômicos.",
  },
  {
    year: "2015",
    title: "Pós-doutorado",
    detail: "Hospital Universitario 12 de Octubre, em Madri, Espanha.",
  },
  {
    year: "2023–2024",
    title: "Presidente do Colégio Brasileiro de Cirurgia e Traumatologia Buco-Maxilo-Facial",
    detail: "A entidade nacional da especialidade, responsável também pela certificação Board.",
  },
  {
    year: "2026",
    title: "Certificação Board e banca de examinadores",
    detail: "Certificado pelo Board do Colégio Brasileiro (FBCOMS) e membro ativo da banca que avalia outros cirurgiões.",
  },
];

export const siteConfig = {
  name: "Dr. Adriano",
  fullName: "Dr. Adriano Rocha Germano",
  specialty: "Cirurgião Bucomaxilofacial",
  registry: "CRO-PB 12753 · CRO-RN 1980",
  /**
   * As quatro credenciais que entram nos blocos de autoridade de todas as
   * páginas. A trajetória completa fica em `professionalTimeline`, na /sobre.
   *
   * A ordem vai do que o paciente reconhece para o que o colega reconhece:
   * universidade e hospital antes de entidade de classe e certificação.
   */
  credentials: [
    "Mestre e doutor em Cirurgia e Traumatologia Buco-Maxilo-Facial pela UNICAMP, com pós-doutorado no Hospital 12 de Octubre, em Madri.",
    "Professor titular da UFRN e chefe do Serviço de Cirurgia e Traumatologia Buco-Maxilo-Facial do Hospital Universitário Onofre Lopes.",
    "Presidente do Colégio Brasileiro de Cirurgia e Traumatologia Buco-Maxilo-Facial em 2023 e 2024.",
    "Certificado pelo Board do Colégio Brasileiro (FBCOMS) e membro da banca de examinadores, em 2026.",
  ],
  // O total de 29 foi informado pelo cliente; não consta na imagem do certificado.
  boardContext:
    "Em 2026, integra o grupo de 29 profissionais no Brasil habilitados a atuar como avaliadores desse Board.",
  boardCertificate: "/credenciais/certificado-board-adriano-rocha-germano-2026.png",
  /** Onde ele atende. Usado nas frases de identidade, não nas rotas de SEO. */
  serviceArea: "João Pessoa e Natal",
  /** Perfis oficiais. Entram em `sameAs` só quando preenchidos. */
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/dr.adrianorgermano/",
  hours: "Atendimento com agendamento, em horário comercial",
  hoursLines: [
    "Segunda a sexta, em horário comercial",
    "Agendamento pelo WhatsApp de cada consultório",
  ],
  description:
    "Dor na mandíbula, perda de dentes ou alterações na mordida? Avaliação em cirurgia buco-maxilo-facial em João Pessoa e Natal para entender seu caso antes de decidir.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://dradrianorgermano.com.br",
  /**
   * Número dos botões de WhatsApp do site. É o de João Pessoa, onde está a
   * captação ativa; o de Natal aparece no bloco do próprio consultório.
   *
   * Enquanto este campo estava vazio, TODOS os botões do site eram âncoras
   * para um formulário desabilitado — o site não tinha nenhum canal de
   * contato funcionando. A variável de ambiente continua podendo sobrescrever.
   */
  whatsappNumber:
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || practiceLocations[0].whatsapp,
  isDemo,
  isIndexable,
};

/** O modo demo diz respeito ao ambiente, não à identidade já confirmada. */
export const schemaName = siteConfig.fullName;

/**
 * Faixa logo abaixo do hero.
 *
 * Fato verificável, não adjetivo: é o lugar onde o visitante ainda decide se
 * fica. Com o currículo em mãos, a faixa troca o registro e a certificação —
 * que já aparecem no hero e no bloco de autoridade — pelo que só este
 * profissional tem: universidade, cátedra e a presidência da entidade da
 * especialidade.
 */
export const credentialFacts: [string, string, string, string] = [
  "Mestre e doutor · UNICAMP",
  "Professor titular · UFRN",
  "Presidente do Colégio Brasileiro de Cirurgia Bucomaxilofacial · 2023–2024",
  "Consultórios em " + siteConfig.serviceArea,
];

/**
 * Navegação por área.
 *
 * `hint` existe porque o menu listava nomes de procedimento, e quem chega não
 * sabe o nome do procedimento — a própria home diz isso ("você não precisa
 * saber o nome do tratamento"). Quem ronca não procura por "apneia do sono"
 * num menu de dentista; quem ouviu "não tem osso" não procura por
 * "reconstrução óssea". A linha de sintoma transforma o índice em triagem.
 *
 * Escrita na língua da pessoa, não na do prontuário, e sem prometer desfecho:
 * são os sinais que levam alguém a procurar, não o que o tratamento resolve.
 */
export const areaNavigation = [
  {
    label: "Apneia do sono",
    href: "/apneia-do-sono",
    hint: "Ronco · pausas na respiração · cansaço ao acordar",
  },
  {
    label: "Implantes dentários",
    href: "/implantes-dentarios",
    hint: "Falta de dentes · prótese que incomoda",
  },
  {
    label: "Reconstrução óssea",
    href: "/reconstrucao-ossea",
    hint: "“Não tem osso suficiente para implante”",
  },
  {
    label: "DTM e ATM",
    href: "/cirurgia-atm",
    hint: "Dor na mandíbula · estalos · travamento",
  },
  {
    label: "Cirurgia ortognática",
    href: "/cirurgia-ortognatica",
    hint: "Mordida que não encaixa · esforço para mastigar",
  },
  {
    label: "Cirurgia de siso",
    href: "/cirurgia-de-siso",
    hint: "Inflamação que volta · dente incluso · dúvida no raio-X",
  },
];

/** Telefone de um consultório em formato E.164, para o schema. */
export function schemaTelephone(location: PracticeLocation) {
  return "+" + location.whatsapp;
}

/**
 * Link de conversa no WhatsApp. `number` existe para o bloco de cada
 * consultório: quem mora em Natal fala com a equipe de Natal.
 */
export function getWhatsAppHref(
  message: string,
  number: string = siteConfig.whatsappNumber,
) {
  if (!number) {
    return "#contato";
  }

  return (
    "https://wa.me/" +
    number.replace(/\D/g, "") +
    "?text=" +
    encodeURIComponent(message)
  );
}

/**
 * Anexa a origem à mensagem pré-preenchida. Quem responde no celular vê de
 * onde a pessoa veio antes de perguntar — o dado que o GTM registra para
 * análise chega junto, em português, para quem atende.
 */
export function whatsappMessageWithSource(message: string, source: string) {
  return message.trim() + "\n\nOrigem no site: " + source + ".";
}

/**
 * Origem legível a partir do id de rastreio, para não repetir a mesma
 * informação em duas props. `cta-hero-whatsapp` vira "hero"; um texto próprio
 * pode ser passado quando o id não descrever bem o lugar.
 */
export function originFromCtaId(ctaId: string) {
  const readable = ctaId
    .replace(/^cta-/, "")
    .replace(/-whatsapp$/, "")
    .replace(/-/g, " ")
    .trim();

  return readable || "site";
}
