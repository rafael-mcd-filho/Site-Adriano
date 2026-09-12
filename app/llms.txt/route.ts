import { contentLastReviewed, treatments } from "@/lib/content";
import { areaNavigation, schemaName, siteConfig } from "@/lib/site";

export const dynamic = "force-static";

/**
 * Gerado a partir do mesmo conteúdo que alimenta as páginas, em vez de um
 * arquivo estático copiado à mão: um `llms.txt` com URL, nome ou registro
 * desatualizado é pior do que não ter — ele é lido justamente por quem não vai
 * conferir na página. Aqui ele nunca diverge, porque a fonte é a mesma.
 */
export function GET() {
  const areas = areaNavigation.map((area) => {
    const treatment = treatments[area.href.replace("/", "")];
    const summary = treatment
      ? treatment.metadata.description
      : "Página de área de atuação.";

    return "- [" + area.label + "](" + siteConfig.url + area.href + "): " + summary;
  });

  const lines: Array<string | null> = [
    "# " + schemaName + " — " + siteConfig.specialty,
    "",
    "> " + siteConfig.description,
    "",
    "## Páginas principais",
    "",
    "- [Início](" +
      siteConfig.url +
      "/): apresentação, áreas de atuação, como funciona a avaliação e formas de contato.",
    ...areas,
    "- [Para dentistas](" +
      siteConfig.url +
      "/para-dentistas): fluxo de encaminhamento e comunicação entre profissionais.",
    "- [Política de privacidade](" +
      siteConfig.url +
      "/politica-de-privacidade): tratamento de dados e direitos do titular.",
    "",
    "## Informações oficiais",
    "",
    "- Profissional: " + schemaName,
    "- Especialidade: " + siteConfig.specialty,
    "- Registro profissional: " + siteConfig.registry,
    ...siteConfig.credentials.map((credential) => "- Credencial: " + credential),
    "- Certificado fornecido pelo profissional: " + siteConfig.url + siteConfig.boardCertificate,
    "- Instagram: " + siteConfig.instagram,
    "- Localização: " + siteConfig.city,
    "- Atendimento: " + siteConfig.hours,
    "- Modalidade: atendimento particular; valores informados individualmente no contato.",
    "- Site oficial: " + siteConfig.url + "/",
    "",
    "## Observações",
    "",
    "- Conteúdo informativo. Diagnóstico, indicação, riscos, etapas e recuperação dependem de avaliação individual e variam conforme o caso.",
    "- O contato inicial pelo WhatsApp ou pelo formulário não confirma agendamento nem substitui consulta.",
    "- Última revisão editorial do conteúdo clínico: " + contentLastReviewed + ".",
    // `null` some da lista; string vazia é linha em branco de verdade, que o
    // Markdown precisa para separar os blocos.
    siteConfig.isDemo
      ? "- ATENÇÃO: este site está em modo de demonstração. Endereço, telefone e horários são dados de exemplo. Identidade e registros foram fornecidos pelo cliente; a certificação possui documento de suporte."
      : null,
  ];

  return new Response(lines.filter((line) => line !== null).join("\n") + "\n", {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=86400",
    },
  });
}
