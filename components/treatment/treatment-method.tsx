import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Highlight } from "@/components/highlight";
import { VisualMotif } from "@/components/visual-motif";
import type { TreatmentContent } from "@/lib/content";

/**
 * Bloco 4 — a solução do PAS.
 *
 * É aqui que o motivo visual vive agora. No hero ele era decoração ao lado da
 * manchete; nesta seção ele ilustra exatamente o que o texto está explicando,
 * que é onde ele sempre funcionou melhor.
 *
 * Este bloco substitui o "mecanismo único" das páginas de venda de produto:
 * em cirurgia, o diferencial legítimo é o método de diagnóstico, não um
 * mecanismo de marca inventado.
 */
export function TreatmentMethod({ content }: { content: TreatmentContent }) {
  return (
    <section className="section section-mist method-section">
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
    </section>
  );
}
