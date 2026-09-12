/**
 * Identidade, registros, Instagram e domínio fornecidos pelo cliente em
 * 10/09/2026. Certificação e banca constam no certificado de 2026 enviado.
 * Endereço, telefone e mapa continuam sem dado definitivo — e, como o site
 * está indexável, eles não renderizam em vez de renderizar demonstração.
 */

/**
 * Indexação e dados de demonstração eram a MESMA chave, e isso tornava o site
 * impossível de publicar: `NEXT_PUBLIC_SITE_IS_DEMO=false` era a única forma
 * de sair do `noindex`, e ela também apagava endereço, telefone e mapa. Quem
 * quisesse aparecer na busca tinha de escolher entre publicar dado falso e
 * publicar sem dado nenhum.
 *
 * Agora são duas decisões separadas:
 *
 * - `isIndexable` diz se o site pode ser rastreado. Passou a ser o padrão:
 *   um site que existe para ser encontrado não deveria depender de alguém
 *   lembrar de destravá-lo. `NEXT_PUBLIC_SITE_NOINDEX=true` fecha de volta.
 * - `NEXT_PUBLIC_SITE_IS_DEMO` continua dizendo se os dados de atendimento
 *   ainda são provisórios.
 *
 * O acoplamento que sobrou é de propósito e vai no sentido seguro: **abrir o
 * índice desliga o modo demo**. Nada de demonstração chega ao Google, porque
 * endereço inventado indexado manda paciente para a porta de um estranho.
 * O resultado é um site incompleto e honesto — a seção de localização pede
 * para confirmar com a equipe — em vez de um site completo e mentiroso.
 */
const isPreviewDeploy = process.env.NEXT_PUBLIC_VERCEL_ENV === "preview";
export const isIndexable =
  !isPreviewDeploy && process.env.NEXT_PUBLIC_SITE_NOINDEX !== "true";

const wantsDemoData = process.env.NEXT_PUBLIC_SITE_IS_DEMO !== "false";
const isDemo = wantsDemoData && !isIndexable;

/**
 * Valor de demonstração: vira string vazia assim que o site pode ser indexado
 * ou quando o modo demo é desligado explicitamente.
 *
 * A trava é deliberada. Endereço, telefone e mapa inventados que vazassem para
 * produção mandariam paciente para a porta errada e fariam alguém ligar para o
 * número de um estranho. Assim, faltar a variável de ambiente quebra a seção
 * de forma visível — em vez de publicar mentira com aparência de verdade.
 */
const demo = (value: string) => (isDemo ? value : "");

export const siteConfig = {
  name: "Dr. Adriano",
  fullName: "Dr. Adriano Rocha Germano",
  specialty: "Cirurgião Bucomaxilofacial",
  registry: "CRO-PB 12753 · CRO-RN 1980",
  credentials: [
    "Certificado pelo Board do Colégio Brasileiro de Cirurgia e Traumatologia Buco-Maxilo-Facial (FBCOMS), em 2026.",
    "Membro ativo da banca de examinadores do Board, conforme certificado de 2026.",
  ],
  // O total de 29 foi informado pelo cliente; não consta na imagem do certificado.
  boardContext:
    "Em 2026, integra o grupo de 29 profissionais no Brasil habilitados a atuar como avaliadores desse Board.",
  boardCertificate: "/credenciais/certificado-board-adriano-rocha-germano-2026.png",
  city: "João Pessoa, PB",
  address: demo("Av. Epitácio Pessoa, 2450 · Sala 908 — Bairro dos Estados, João Pessoa/PB"),
  /** Linhas do endereço para o bloco de localização. */
  addressLines: [
    demo("Av. Epitácio Pessoa, 2450 · Sala 908"),
    demo("Bairro dos Estados · João Pessoa/PB · CEP 58030-001"),
    demo("Referência: próximo ao Parque Solon de Lucena"),
  ].filter(Boolean),
  phone: process.env.NEXT_PUBLIC_PHONE || demo("8330000000"),
  phoneDisplay:
    process.env.NEXT_PUBLIC_PHONE_DISPLAY ||
    demo("(83) 3000-0000") ||
    "Telefone a confirmar",
  /** Perfis oficiais. Entram em `sameAs` só quando preenchidos. */
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/dr.adrianorgermano/",
  /**
   * Coordenadas do consultório, no formato "-7.112324,-34.856268". Ficam fora
   * do schema enquanto vazias: um `geo` apontando para o lugar errado é pior
   * do que nenhum — o Google usa isso para o mapa local.
   */
  geo: process.env.NEXT_PUBLIC_GEO || demo("-7.117,-34.863"),
  hours: "Atendimento em horário comercial",
  hoursLines: [
    "Segunda a sexta · 08h às 18h",
    "Sábados e domingos · fechado",
  ],
  description:
    "Dor na mandíbula, perda de dentes ou alterações na mordida? Avaliação em cirurgia buco-maxilo-facial em João Pessoa para entender seu caso antes de decidir.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://dradrianorgermano.com.br",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "",
  /**
   * URL de incorporação do Google Maps. Enquanto vazia, a seção de localização
   * mostra um painel de espera no lugar do mapa — publicar um mapa apontando
   * para o endereço errado é pior do que não publicar mapa nenhum.
   */
  /*
   * O mapa de demonstração aponta para a REGIÃO, não para um ponto exato: um
   * alfinete cravado num endereço inventado marca o prédio de outra pessoa.
   */
  mapEmbedUrl:
    process.env.NEXT_PUBLIC_MAP_EMBED_URL ||
    demo(
      "https://maps.google.com/maps?q=Bairro%20dos%20Estados%2C%20Jo%C3%A3o%20Pessoa%2C%20PB&z=14&output=embed",
    ),
  isDemo,
  isIndexable,
};

/** O modo demo diz respeito ao atendimento, não à identidade já confirmada. */
export const schemaName = siteConfig.fullName;

/**
 * Faixa logo abaixo do hero.
 *
 * Eram quatro atributos por página — "avaliação antes da indicação", "opções
 * explicadas com clareza". Boas mensagens, mas afirmadas pelo próprio
 * anunciante: no lugar onde o visitante ainda decide se fica, o que reduz
 * incerteza é fato verificável, não adjetivo. Os atributos continuam ditos nas
 * seções, onde há espaço para sustentá-los.
 */
export const credentialFacts: [string, string, string, string] = [
  siteConfig.registry,
  "Certificação Board · FBCOMS 2026",
  "Banca de examinadores do Board",
  "Atendimento particular · " + siteConfig.city,
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

/** Telefones em formato E.164, sem duplicar quando WhatsApp e fixo coincidem. */
export function schemaTelephones() {
  const numbers = [siteConfig.whatsappNumber, siteConfig.phone]
    .map((value) => value.replace(/\D/g, ""))
    .filter(Boolean)
    .map((digits) => "+" + (digits.startsWith("55") ? digits : "55" + digits));

  return Array.from(new Set(numbers));
}

/** `geo` do schema, apenas quando as coordenadas foram configuradas. */
export function schemaGeo() {
  const [latitude, longitude] = siteConfig.geo.split(",").map(Number);

  if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) return null;

  return { "@type": "GeoCoordinates", latitude, longitude };
}

export function getWhatsAppHref(message: string) {
  if (!siteConfig.whatsappNumber) {
    return "#contato";
  }

  return (
    "https://wa.me/" +
    siteConfig.whatsappNumber.replace(/\D/g, "") +
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
