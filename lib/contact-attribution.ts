/**
 * Páginas que têm formulário. É lista permitida: um envio de página fora dela
 * é recusado no servidor.
 *
 * Por isso toda rota nova com formulário precisa entrar aqui — `/sobre` e
 * `/cirurgia-de-siso` nasceram sem esta linha, e os dois formulários seriam
 * recusados com "não foi possível identificar este formulário" no dia em que
 * o envio fosse ativado.
 */
export const contactPages = {
  home: { path: "/", label: "Página inicial" },
  sobre: { path: "/sobre", label: "Sobre o Dr. Adriano" },
  "apneia-do-sono": { path: "/apneia-do-sono", label: "Apneia do sono" },
  "implantes-dentarios": { path: "/implantes-dentarios", label: "Implantes dentários" },
  "reconstrucao-ossea": { path: "/reconstrucao-ossea", label: "Reconstrução óssea" },
  "cirurgia-atm": { path: "/cirurgia-atm", label: "DTM e ATM" },
  "cirurgia-ortognatica": { path: "/cirurgia-ortognatica", label: "Cirurgia ortognática" },
  "cirurgia-de-siso": { path: "/cirurgia-de-siso", label: "Cirurgia de siso" },
  "para-dentistas": { path: "/para-dentistas", label: "Para dentistas" },
} as const;

const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;
type UtmKey = (typeof utmKeys)[number];

export type ContactAttribution = {
  referrerOrigin: string | null;
  utm: Partial<Record<UtmKey, string>>;
};

export function getContactPage(page: string) {
  return Object.prototype.hasOwnProperty.call(contactPages, page)
    ? contactPages[page as keyof typeof contactPages]
    : null;
}

/** Remove caminho, query, fragmento e qualquer credencial do referenciador. */
function safeReferrerOrigin(value: unknown) {
  if (typeof value !== "string" || value.length > 2048) return null;
  try {
    const url = new URL(value);
    if (!["http:", "https:"].includes(url.protocol) || url.username || url.password) return null;
    return url.origin;
  } catch {
    return null;
  }
}

function safeCampaignValue(value: unknown) {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  // Identificadores curtos de campanha: nunca e-mail, telefone ou URL livre.
  if (!trimmed || trimmed.length > 100 || !/^[\p{L}\p{N} ._-]+$/u.test(trimmed)) return undefined;
  if (trimmed.replace(/\D/g, "").length >= 8) return undefined;
  return trimmed;
}

/** Reaplicada no servidor: campos ocultos continuam sendo entrada não confiável. */
export function sanitizeContactAttribution(value: unknown): ContactAttribution {
  const attribution: ContactAttribution = { referrerOrigin: null, utm: {} };
  if (!value || typeof value !== "object" || Array.isArray(value)) return attribution;
  const input = value as Record<string, unknown>;
  attribution.referrerOrigin = safeReferrerOrigin(input.referrerOrigin);
  if (input.utm && typeof input.utm === "object" && !Array.isArray(input.utm)) {
    for (const key of utmKeys) {
      const campaignValue = safeCampaignValue((input.utm as Record<string, unknown>)[key]);
      if (campaignValue) attribution.utm[key] = campaignValue;
    }
  }
  return attribution;
}

export function parseContactAttribution(raw: string): ContactAttribution {
  if (raw.length > 4096) return sanitizeContactAttribution(null);
  try {
    return sanitizeContactAttribution(JSON.parse(raw));
  } catch {
    return sanitizeContactAttribution(null);
  }
}

/** A URL completa fica no navegador; somente a lista permitida é serializada. */
export function captureContactAttribution(href: string, referrer: string): ContactAttribution {
  try {
    const params = new URL(href).searchParams;
    return sanitizeContactAttribution({
      referrerOrigin: referrer,
      utm: Object.fromEntries(utmKeys.map((key) => [key, params.get(key)])),
    });
  } catch {
    return sanitizeContactAttribution(null);
  }
}
