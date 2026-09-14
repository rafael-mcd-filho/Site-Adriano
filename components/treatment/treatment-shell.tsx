import type { ReactNode } from "react";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { JsonLd } from "@/components/json-ld";
import { contentLastReviewed, type TreatmentContent } from "@/lib/content";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";
import { clinicalReviews } from "@/lib/editorial";

/**
 * Casca das páginas de tratamento: dados estruturados, `main` com o tema do
 * motivo visual e os atalhos flutuantes.
 *
 * As seções vêm por `children`, e cada `app/<rota>/page.tsx` monta a sua
 * própria ordem com as peças de `components/treatment/*`. Não existe um
 * componente que renderize "a página de tratamento": mudar uma rota é mexer no
 * arquivo dela.
 *
 * Ao alterar uma peça de `components/treatment/*`, lembre que ela é usada por
 * mais de uma rota. Se a mudança vale só para uma, o caminho é uma seção nova
 * naquele arquivo — não um `if` aqui dentro.
 */
export function TreatmentShell({
  content,
  children,
}: {
  content: TreatmentContent;
  children: ReactNode;
}) {
  const pageUrl = siteConfig.url + "/" + content.slug;
  const reviewedAt = content.lastReviewed ?? contentLastReviewed;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          name: content.metadata.title,
          description: content.metadata.description,
          url: pageUrl,
          inLanguage: "pt-BR",
          isPartOf: { "@id": siteConfig.url + "/#website" },
          ...(clinicalReviews[content.slug] ? { lastReviewed: clinicalReviews[content.slug].date, reviewedBy: { "@id": siteConfig.url + "/#person" } } : {}),
          dateModified: reviewedAt,
          about: {
            "@type": "MedicalCondition",
            name: content.navLabel,
          },
        }}
      />
      <JsonLd data={faqSchema(content.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: content.navLabel, path: "/" + content.slug },
        ])}
      />

      {/*
        `data-rota` é o gancho de CSS de UMA rota só. O motivo visual não serve
        para isso: ele é linguagem gráfica e duas rotas podem vir a compartilhar
        o mesmo. Ver app/styles/rotas/.
      */}
      <main
        data-rota={content.slug}
        className={"treatment-page treatment-page-" + content.motif}
      >
        {children}
      </main>

      <FloatingWhatsApp message={content.whatsappMessage} />
    </>
  );
}
