import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Highlight } from "@/components/highlight";
import { ObjectionList } from "@/components/objection-list";
import { VisualMotif } from "@/components/visual-motif";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { ctaLadder, type TreatmentContent } from "@/lib/content";

/**
 * "Como avaliamos e decidimos o caminho" — a seção principal da página.
 *
 * Eram duas: método e objeções. Separadas, respondiam à mesma pergunta por
 * caminhos diferentes — o que é analisado, e por que o que a pessoa já ouviu
 * não encerra o assunto. Juntas, o raciocínio aparece inteiro: primeiro o
 * critério, depois o que ele desfaz.
 *
 * O CTA intermediário fecha o bloco porque é aqui que a compreensão é maior e
 * a ansiedade, menor. Antes desta mudança havia botão no hero e só voltava a
 * haver sete telas adiante, na primeira consulta.
 */
export function TreatmentDecision({ content }: { content: TreatmentContent }) {
  return (
    <section
      className="section section-mist method-section decision-section"
      id="avaliacao"
    >
      <div className="container method-grid">
        <div className="method-copy">
          <span className="section-kicker">{content.methodEyebrow}</span>
          <h2>
            <Highlight
              text={content.methodTitle}
              phrase={content.methodTitleHighlight}
            />
          </h2>
          {/*
            O marca-texto cai no parágrafo que contém a frase de
            `methodHighlight` — nos outros, `Highlight` devolve o texto
            intacto. Era o único bloco longo do site sem nenhum ponto de
            parada visual.
          */}
          {content.methodBody.map((paragraph) => (
            <p key={paragraph}>
              <Highlight text={paragraph} phrase={content.methodHighlight} />
            </p>
          ))}

          <ul className="method-points">
            {content.methodPoints.map((point) => (
              <li key={point}>
                <Check size={16} aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>

          {content.crossLink && (
            <Link className="text-link" href={content.crossLink.href}>
              {content.crossLink.label}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          )}
        </div>

        <VisualMotif
          type={content.motif}
          label={content.navLabel}
          summary={content.visualSummary}
        />
      </div>

      {/* Segunda metade do mesmo raciocínio: o que a avaliação responde às
          conclusões que a pessoa já trouxe de outro lugar. */}
      <div className="container decision-objections">
        <h3>{content.objectionsTitle}</h3>
        <ObjectionList items={content.objections} />
      </div>

      <div className="container decision-cta">
        <p>{content.midCtaQuestion}</p>
        <WhatsAppButton
          ctaId="cta-metodo-whatsapp"
          message={content.whatsappMessage}
          label={ctaLadder.method}
          className="button-whatsapp-solid"
        />
      </div>
    </section>
  );
}
