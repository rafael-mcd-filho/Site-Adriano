import Link from "next/link";
import { Check, CircleHelp } from "lucide-react";
import { ButtonContent } from "@/components/button-content";
import { DoctorPortrait } from "@/components/doctor-portrait";
import { HeroBackdrop } from "@/components/hero-backdrop";
import { Highlight } from "@/components/highlight";
import { WhatsAppButton } from "@/components/whatsapp-button";
import type { TreatmentContent } from "@/lib/content";

/** Abertura com fotografia ilustrativa, identificação e caminhos de contato. */
export function TreatmentHero({ content }: { content: TreatmentContent }) {
  return (
    <section
      className={
        "inner-hero treatment-hero treatment-hero-" +
        content.motif +
        " section-soft-edge photo-hero"
      }
    >
      <HeroBackdrop page={content.slug} />
      <div className="container inner-hero-grid">
        <div className="inner-hero-copy hero-photo-copy page-enter">
          <span className="eyebrow">{content.eyebrow}</span>
          <h1>
            <Highlight
              text={content.title}
              phrase={content.titleHighlight}
              variant="accent"
            />
          </h1>
          <p>{content.intro}</p>

          <ul className="hero-badges">
            {content.heroBadges.map((badge) => (
              <li key={badge}>
                <Check size={13} aria-hidden="true" />
                {badge}
              </li>
            ))}
          </ul>

          <div className="hero-actions">
            <WhatsAppButton
              ctaId="cta-hero-whatsapp"
              message={content.whatsappMessage}
              label={content.primaryCta}
              className="button-whatsapp-solid"
            />
            {/* Segundo degrau da escada, não um link de rodapé: atende quem
                ainda não quer falar, mas quer saber no que está se metendo. */}
            <Link
              id="cta-hero-consulta"
              data-cta="cta-hero-consulta"
              className="button button-secondary button-motion"
              href="#consulta"
            >
              <ButtonContent>Ver como funciona a consulta</ButtonContent>
            </Link>
          </div>

          <div className="clinical-note">
            <CircleHelp size={19} aria-hidden="true" />
            <span>{content.note}</span>
          </div>
        </div>

        <DoctorPortrait />
      </div>
    </section>
  );
}
