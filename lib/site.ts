export const siteConfig = {
  name: "Dr. Adriano",
  fullName: "Dr. Adriano [Sobrenome]",
  specialty: "Cirurgia e Traumatologia Buco-Maxilo-Facial",
  registry: "CRO-PB 00000",
  city: "João Pessoa, PB",
  address: "Endereço de demonstração — João Pessoa, PB",
  hours: "Atendimento em horário comercial",
  description:
    "Avaliação e planejamento em cirurgia buco-maxilo-facial, implantes, DTM e ATM em João Pessoa.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "",
  isDemo: process.env.NEXT_PUBLIC_SITE_IS_DEMO !== "false",
};

/**
 * `fullName` ainda carrega o placeholder "[Sobrenome]". Enquanto ele não for
 * preenchido, o dado estruturado usa o nome curto — publicar um colchete
 * literal dentro do schema Person é pior do que publicar o nome incompleto.
 */
export const schemaName = siteConfig.fullName.includes("[")
  ? siteConfig.name
  : siteConfig.fullName;

export const mainNavigation = [
  { label: "Início", href: "/" },
  { label: "Dr. Adriano", href: "/#sobre" },
  { label: "Como funciona", href: "/#processo" },
  { label: "Para dentistas", href: "/para-dentistas" },
  { label: "Dúvidas", href: "/#duvidas" },
];

export const areaNavigation = [
  { label: "Apneia do sono", href: "/apneia-do-sono" },
  { label: "Implantes dentários", href: "/implantes-dentarios" },
  { label: "Reconstrução óssea", href: "/reconstrucao-ossea" },
  { label: "DTM e ATM", href: "/dtm-atm" },
  { label: "Cirurgia ortognática", href: "/cirurgia-ortognatica" },
];

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

