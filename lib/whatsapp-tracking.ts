/** Uma ação do Google Ads por grupo; o botão e a cidade continuam identificados. */
export const whatsappConversionGroups = [
  { id: "geral", name: "Adriano | WhatsApp | Geral", paths: ["/", "/sobre"] },
  { id: "apneia-do-sono", name: "Adriano | WhatsApp | Apneia do sono", paths: ["/apneia-do-sono"] },
  { id: "implantes-dentarios", name: "Adriano | WhatsApp | Implantes dentários", paths: ["/implantes-dentarios"] },
  { id: "reconstrucao-ossea", name: "Adriano | WhatsApp | Reconstrução óssea", paths: ["/reconstrucao-ossea"] },
  { id: "patologias-maxilofaciais", name: "Adriano | WhatsApp | Patologias maxilofaciais", paths: ["/patologias-maxilofaciais"] },
  { id: "trauma-bucomaxilofacial", name: "Adriano | WhatsApp | Trauma bucomaxilofacial", paths: ["/trauma-bucomaxilofacial"] },
  { id: "cirurgia-atm", name: "Adriano | WhatsApp | DTM e ATM", paths: ["/cirurgia-atm"] },
  { id: "cirurgia-ortognatica", name: "Adriano | WhatsApp | Cirurgia ortognática", paths: ["/cirurgia-ortognatica"] },
  { id: "cirurgia-de-siso", name: "Adriano | WhatsApp | Cirurgia de siso", paths: ["/cirurgia-de-siso"] },
  { id: "profissionais-da-saude", name: "Adriano | WhatsApp | Profissionais da saúde", paths: ["/profissionais-da-saude"] },
];

export function cleanTrackingText(value: string | null | undefined, fallback = "nao_identificado") {
  return (String(value || "").replace(/\s+/g, " ").trim() || fallback).slice(0, 100);
}

function slug(value: string) {
  return cleanTrackingText(value).normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

type ClickDetails = {
  href: string;
  path: string;
  title: string;
  label: string;
  location: string;
  ctaId?: string;
};

/** Aceita somente links reais do WhatsApp; não serializa URL ou mensagem. */
export function buildWhatsAppEvent(details: ClickDetails, locations: readonly { id: string; whatsapp: string }[]) {
  let url: URL;
  try { url = new URL(details.href); } catch { return null; }
  if (url.protocol !== "https:" && url.protocol !== "http:") return null;
  const shortLink = url.hostname === "wa.me";
  const sendLink = ["api.whatsapp.com", "web.whatsapp.com", "whatsapp.com", "www.whatsapp.com"].includes(url.hostname)
    && /^\/send\/?$/.test(url.pathname);
  if (!shortLink && !sendLink) return null;

  const phone = (shortLink ? url.pathname : url.searchParams.get("phone") || "").replace(/\D/g, "");
  const city = locations.find(location => location.whatsapp === phone)?.id || "nao_identificado";
  const path = details.path.replace(/\/+$/, "") || "/";
  const page = path === "/" ? "home" : slug(path);
  const segments = (details.ctaId || "").replace(/^cta-/, "").split("__").filter(Boolean).map(slug);
  // A cidade é determinada pelo destino real. Nunca duplicar seu sufixo.
  if (locations.some(location => location.id === segments.at(-1))) segments.pop();
  const button = segments.length ? segments.join("__") : [slug(details.location), slug(details.label)].join("__");
  const group = whatsappConversionGroups.find(group => group.paths.includes(path));

  return {
    event: "whatsapp_click",
    whatsapp_click_id: `${page}__${button}__${city}`.slice(0, 100),
    whatsapp_button_text: cleanTrackingText(details.label),
    whatsapp_button_location: cleanTrackingText(details.location),
    whatsapp_page_path: cleanTrackingText(path),
    whatsapp_page_title: cleanTrackingText(details.title),
    whatsapp_city: city,
    whatsapp_phone: cleanTrackingText(phone),
    // Vazio em páginas legais, inexistentes ou não mapeadas: a futura tag não dispara.
    whatsapp_conversion_group: group?.id || "",
  };
}
