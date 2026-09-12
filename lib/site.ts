/**
 * Identidade, registros, Instagram e domínio fornecidos pelo cliente em
 * 10/09/2026. Certificação e banca constam no certificado de 2026 enviado.
 * Endereço, telefone e horários ainda usam dados de demonstração; o modo demo
 * permanece ativo até a configuração dessas informações de atendimento.
 */
const isDemo = process.env.NEXT_PUBLIC_SITE_IS_DEMO !== "false";

/**
 * Valor de demonstração: vale apenas enquanto `isDemo` for true e vira string
 * vazia no momento em que o site sai do modo demo.
 *
 * A trava é deliberada. Endereço, telefone e mapa inventados que vazassem para
 * produção mandariam paciente para a porta errada e fariam alguém ligar para o
 * número de um estranho. Assim, esquecer de preencher a variável de ambiente
 * quebra a seção de forma visível — em vez de publicar mentira com aparência
 * de verdade.
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
};

/** O modo demo diz respeito ao atendimento, não à identidade já confirmada. */
export const schemaName = siteConfig.fullName;

export const areaNavigation = [
  { label: "Apneia do sono", href: "/apneia-do-sono" },
  { label: "Implantes dentários", href: "/implantes-dentarios" },
  { label: "Reconstrução óssea", href: "/reconstrucao-ossea" },
  { label: "DTM e ATM", href: "/cirurgia-atm" },
  { label: "Cirurgia ortognática", href: "/cirurgia-ortognatica" },
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
