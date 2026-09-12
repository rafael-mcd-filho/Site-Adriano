import type { ReactNode } from "react";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { JsonLd } from "@/components/json-ld";
import { contentLastReviewed, type TreatmentContent } from "@/lib/content";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

/**
 * Casca das páginas de tratamento: dados estruturados, `main` com o tema do
 * motivo visual e os atalhos flutuantes.
 *
 * As seções vêm por `children`. Uma página que precise de algo fora do padrão
 * não edita um componente compartilhado: monta o próprio arquivo com este
 * shell e as seções de `components/treatment/*` que quiser reaproveitar,
 * trocando só a que for diferente.
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
          lastReviewed: reviewedAt,
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

      <main className={"treatment-page treatment-page-" + content.motif}>
        {children}
      </main>

      <FloatingWhatsApp message={content.whatsappMessage} />
    </>
  );
}
