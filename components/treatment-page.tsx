import Link from "next/link";
import {
  ArrowRight,
  Check,
  CircleHelp,
  ClipboardList,
  MessageSquareText,
  RotateCcw,
  ScanSearch,
  Sparkles,
  Stethoscope,
} from "lucide-react";

/**
 * Ícone por posição, não por tratamento. As cinco jornadas têm formatos
 * diferentes no texto, mas a mesma progressão: ouvir → examinar → planejar →
 * acompanhar. Repetir o mesmo ícone nas quatro etapas era ruído decorativo.
 */
const stepIcons = [MessageSquareText, Stethoscope, ClipboardList, RotateCcw];
import { contentLastReviewed, type TreatmentContent } from "@/lib/content";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { schemaName, siteConfig } from "@/lib/site";
import { ButtonContent } from "@/components/button-content";
import { ContactForm } from "@/components/contact-form";
import { ExitIntent } from "@/components/exit-intent";
import { Highlight } from "@/components/highlight";
import { JsonLd } from "@/components/json-ld";
import { VisualMotif } from "@/components/visual-motif";
import { FloatingWhatsApp, WhatsAppButton } from "@/components/whatsapp-button";

export function TreatmentPage({ content }: { content: TreatmentContent }) {
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
          reviewedBy: {
            "@type": "Person",
            "@id": siteConfig.url + "/#person",
            name: schemaName,
            jobTitle: siteConfig.specialty,
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
        <section
          className={
            "inner-hero treatment-hero treatment-hero-" +
            content.motif +
            " section-soft-edge"
          }
        >
          <div className="container breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Início</Link>
            <span aria-hidden="true">/</span>
            <span>{content.navLabel}</span>
          </div>

          <div className="container inner-hero-grid">
            <div className="inner-hero-copy page-enter">
              <span className="eyebrow">{content.eyebrow}</span>
              <h1>{content.title}</h1>
              <div className="mobile-hero-signal" aria-hidden="true">
                <span className="mobile-signal-mark"><i /><i /><i /></span>
                <span>
                  <small>{content.visualSummary.kicker}</small>
                  <strong>{content.visualSummary.title}</strong>
                </span>
              </div>
              <p>
                <Highlight text={content.intro} phrase={content.introHighlight} />
              </p>
              <div className="hero-actions">
                <Link
                  id="cta-hero-formulario"
                  data-cta="cta-hero-formulario"
                  className="button button-motion"
                  href="#contato"
                >
                  <ButtonContent>Solicitar uma avaliação</ButtonContent>
                </Link>
                <WhatsAppButton
                  ctaId="cta-hero-whatsapp"
                  message={content.whatsappMessage}
                />
              </div>
              <div className="clinical-note">
                <CircleHelp size={19} aria-hidden="true" />
                <span>{content.note}</span>
              </div>
            </div>

            <VisualMotif
              type={content.motif}
              label={content.navLabel}
              summary={content.visualSummary}
            />
          </div>
        </section>

        <section className="section section-white">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <span className="section-kicker">Quando procurar</span>
                <h2>{content.recognitionTitle}</h2>
              </div>
              <p>{content.recognitionIntro}</p>
            </div>

            <div className="recognition-grid">
              {content.situations.map((situation) => (
                <article className="recognition-card stagger-card" key={situation}>
                  <span className="card-mark" aria-hidden="true" />
                  <p>{situation}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-mist">
          <div className="container education-grid">
            <div className="education-copy">
              <span className="section-kicker">{content.educationEyebrow}</span>
              <h2>{content.educationTitle}</h2>
              {content.educationBody.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <Link className="text-link" href="#processo">
                Entender as etapas <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>

            <div className="education-panel">
              <ScanSearch size={27} aria-hidden="true" />
              <span className="panel-label">O que entra na avaliação</span>
              <ul>
                {content.educationPoints.map((point) => (
                  <li key={point}>
                    <Check size={16} aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section process-section" id="processo">
          <div className="container">
            <div className="section-heading centered-heading">
              <span className="section-kicker">Como funciona</span>
              <h2>{content.processTitle}</h2>
              <p>{content.processIntro}</p>
            </div>

            <ol className="process-grid">
              {content.process.map((step, index) => {
                const StepIcon = stepIcons[index] ?? stepIcons[0];

                return (
                  <li key={step.title}>
                    <span className="process-number">{index + 1}</span>
                    <StepIcon size={21} aria-hidden="true" />
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </li>
                );
              })}
            </ol>

            <div className="section-cta">
              <p>Quer entender como isso se aplica ao seu caso?</p>
              <div className="section-cta-actions">
                <Link
                  id="cta-processo-formulario"
                  data-cta="cta-processo-formulario"
                  className="button button-motion"
                  href="#contato"
                >
                  <ButtonContent>Solicitar uma avaliação</ButtonContent>
                </Link>
                <WhatsAppButton
                  ctaId="cta-processo-whatsapp"
                  message={content.whatsappMessage}
                  label="Tirar uma dúvida"
                  compact
                />
              </div>
            </div>
          </div>
        </section>

        <section className="authority-section section-soft-edge">
          <div className="container authority-grid">
            <div className="authority-monogram" aria-hidden="true">
              A
            </div>
            <div>
              <span className="section-kicker light">Quem conduz a avaliação</span>
              <h2>Precisão técnica, explicação clara e uma indicação sem atalhos.</h2>
              <p>
                O objetivo da consulta é organizar informações, explicar o que os
                achados significam e construir o próximo passo aplicável ao caso.
              </p>
              <div className="credential-row">
                <span>{siteConfig.specialty}</span>
                <span>{siteConfig.registry}</span>
                <span>{siteConfig.city}</span>
              </div>
              {siteConfig.isDemo && (
                <small className="demo-note">Credenciais de demonstração.</small>
              )}
            </div>
          </div>
        </section>

        <section className="section faq-section" id="duvidas">
          <div className="container faq-grid">
            <div className="faq-heading">
              <span className="section-kicker">Dúvidas frequentes</span>
              <h2>Informação para decidir com mais clareza.</h2>
              <p>
                As respostas são educativas e não substituem uma avaliação
                individual.
              </p>
              <Sparkles size={28} aria-hidden="true" />
            </div>
            <div className="faq-list">
              {content.faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section section-soft-edge" id="contato">
          <div className="container">
            <ContactForm
              page={content.slug}
              question={content.formQuestion}
              options={content.formOptions}
            />
          </div>
        </section>
      </main>

      <FloatingWhatsApp message={content.whatsappMessage} />
      <ExitIntent message={content.whatsappMessage} />
    </>
  );
}
