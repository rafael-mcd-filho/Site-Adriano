import Link from "next/link";
import { Check, CircleHelp } from "lucide-react";
import { DoctorPortrait } from "@/components/doctor-portrait";
import { Highlight } from "@/components/highlight";
import { WhatsAppButton } from "@/components/whatsapp-button";
import type { TreatmentContent } from "@/lib/content";

/**
 * Bloco 1 do AIDA. Duas mudanças em relação à versão institucional: o rosto do
 * profissional ocupa a coluna visual — numa marca pessoal ele é o ativo de
 * conversão, não uma ilustração — e o WhatsApp é o botão cheio.
 *
 * O formulário continua existindo como caminho secundário: em tráfego frio de
 * saúde o degrau de menor atrito converte várias vezes mais, mas há quem
 * prefira não mandar mensagem.
 */
export function TreatmentHero({ content }: { content: TreatmentContent }) {
  return (
    <section
      className={
        "inner-hero treatment-hero treatment-hero-" +
        content.motif +
        " section-soft-edge"
      }
    >
      <div className="container inner-hero-grid">
        <div className="inner-hero-copy page-enter">
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
            <Link
              id="cta-hero-formulario"
              data-cta="cta-hero-formulario"
              className="text-link hero-secondary-link"
              href="#consulta"
            >
              Como funciona a consulta
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
