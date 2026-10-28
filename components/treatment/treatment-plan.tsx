import Link from "next/link";
import { ArrowRight, Check, Plus } from "lucide-react";
import { ClinicalCaseCard } from "@/components/clinical-case";
import { Highlight } from "@/components/highlight";
import { VisualMotif } from "@/components/visual-motif";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { ctaLadder, type TreatmentContent } from "@/lib/content";
import styles from "./treatment-plan.module.css";

const titles: Record<string, string> = {
  "cirurgia-ortognatica": "Como a cirurgia ortognática é planejada",
  "cirurgia-atm": "Da avaliação da mandíbula às possibilidades de cuidado",
  "cirurgia-de-siso": "Da avaliação do siso ao acompanhamento",
  "implantes-dentarios": "Como a reabilitação com implantes é planejada",
  "reconstrucao-ossea": "Como a reconstrução se conecta à reabilitação",
  "apneia-do-sono": "Como os maxilares entram no cuidado da apneia",
  "patologias-maxilofaciais": "Da investigação ao planejamento do cuidado",
  "trauma-bucomaxilofacial": "Da estabilização ao cuidado especializado",
};

/** Avaliação, alternativas e jornada em um único bloco. Mantém as âncoras e o CTA existentes. */
export function TreatmentPlan({ content }: { content: TreatmentContent }) {
  const relatedLinks = [
    ...(content.crossLink ? [content.crossLink] : []),
    ...(content.crossLinks ?? []),
  ];
  // Em DTM são alternativas, não degraus obrigatórios rumo à cirurgia.
  const isDecisionMap = content.slug === "cirurgia-atm";
  const StepList = isDecisionMap ? "ul" : "ol";

  return (
    <section className={styles.plan} id="avaliacao" aria-labelledby="plano-titulo">
      <div className="container">
        <div className={styles.heading}>
          <span className="section-kicker">Possibilidades de cuidado e etapas</span>
          <h2 id="plano-titulo">{titles[content.slug] ?? content.methodTitle}</h2>
        </div>

        <div className={styles.layout}>
          <div className={styles.assessment}>
            {content.methodBody.map((paragraph) => (
              <p key={paragraph}>
                <Highlight text={paragraph} phrase={content.methodHighlight} />
              </p>
            ))}
            <ul className={styles.points} aria-label="O que orienta a avaliação">
              {content.methodPoints.map((point) => (
                <li key={point}><Check size={16} aria-hidden="true" /><span>{point}</span></li>
              ))}
            </ul>

            {content.methodDetails && (
              <details className={styles.disclosure}>
                <summary><span>{content.methodDetails.title}</span><Plus size={17} aria-hidden="true" /></summary>
                <div className={styles.answer}><p>{content.methodDetails.text}</p></div>
              </details>
            )}

            <details className={styles.disclosure}>
              <summary><span>Veja a ilustração da região avaliada</span><Plus size={17} aria-hidden="true" /></summary>
              <div className={styles.illustration}>
                <VisualMotif type={content.motif} label={content.navLabel} summary={content.visualSummary} />
              </div>
            </details>

            {relatedLinks.length > 0 && (
              <div className={styles.relatedLinks}>
                {relatedLinks.map((link) => (
                  <Link href={link.href} key={link.href}>{link.label}<ArrowRight size={16} aria-hidden="true" /></Link>
                ))}
              </div>
            )}
          </div>

          <div className={styles.journey} id="etapas" aria-labelledby="etapas-titulo">
            <span className={styles.journeyKicker}>{isDecisionMap ? "Caminhos de cuidado" : "O cuidado, passo a passo"}</span>
            <h3 id="etapas-titulo">{content.journey.title}</h3>
            <p className={styles.journeyIntro}>{content.journey.intro}</p>
            <StepList className={styles.steps} data-alternatives={isDecisionMap || undefined}>
              {content.journey.steps.map((step, index) => (
                <li key={step.title}>
                  <span className={styles.marker} aria-hidden="true">
                    {isDecisionMap ? <Check size={15} /> : String(index + 1).padStart(2, "0")}
                  </span>
                  <div><h4>{step.title.replace(/^\d+\.\s*/, "")}</h4><p>{step.text}</p></div>
                </li>
              ))}
            </StepList>
          </div>
        </div>

        {content.decisionPaths && (
          <div className={styles.paths}>
            <h3>{content.decisionPaths.title}</h3>
            <ul>
              {content.decisionPaths.items.map((item) => (
                <li key={item.title}><h4>{item.title}</h4><p>{item.text}</p></li>
              ))}
            </ul>
          </div>
        )}

        <div className={styles.questions}>
          <h3>{content.objectionsTitle}</h3>
          <div className={styles.questionGrid}>
            {content.objections.map((item) => (
              <details className={styles.disclosure} key={item.belief}>
                <summary><span>{item.belief}</span><Plus size={17} aria-hidden="true" /></summary>
                <div className={styles.answer}><p>{item.reality}</p></div>
              </details>
            ))}
          </div>
        </div>

        <ClinicalCaseCard item={content.clinicalCase} />

        <div className={styles.action}>
          <p>{content.midCtaQuestion}</p>
          <WhatsAppButton ctaId="cta-metodo-whatsapp" message={content.whatsappMessage}
            label={content.methodCta ?? ctaLadder.method} className="button-whatsapp-solid" />
        </div>
      </div>
    </section>
  );
}
