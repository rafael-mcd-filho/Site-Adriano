/** Contexto legível para a pessoa e para a equipe, sem códigos de rastreamento. */
const pageSubjects: Record<string, string> = {
  "/sobre": "o Dr. Adriano",
  "/apneia-do-sono": "apneia do sono",
  "/reconstrucao-ossea": "reconstrução óssea",
  "/patologias-maxilofaciais": "cistos, tumores e outras alterações da face",
  "/trauma-bucomaxilofacial": "trauma da face",
  "/cirurgia-pediatrica": "fissuras e anomalias craniofaciais",
  "/cirurgia-atm": "dor na mandíbula e ATM",
  "/cirurgia-ortognatica": "cirurgia ortognática",
  "/implantes-dentarios": "implantes dentários e extra-orais",
  "/cirurgia-de-siso": "cirurgia de siso",
};

export function whatsappMessageForPage(pathname: string, city: string) {
  const path = pathname.replace(/\/$/, "") || "/";
  const cityPreference = ` Prefiro falar com a equipe de ${city}.`;

  if (path === "/profissionais-da-saude" || path === "/para-dentistas") {
    return "Olá, vim pelo site e estava vendo a página para profissionais da saúde. Queria ajuda para conversar sobre um caso." + cityPreference;
  }

  if (path === "/") {
    return "Olá, vim pelo site e queria ajuda para entender meu caso." + cityPreference;
  }

  if (path === "/obrigado") {
    return "Olá, acabei de enviar uma solicitação pelo site e queria complementar meu contato." + cityPreference;
  }

  const subject = pageSubjects[path];
  if (subject) {
    return `Olá, vim pelo site e estava vendo a página sobre ${subject}. Queria ajuda.${cityPreference}`;
  }

  return "Olá, vim pelo site e queria ajuda." + cityPreference;
}
