import { ObjectionList } from "@/components/objection-list";
import type { TreatmentContent } from "@/lib/content";

/**
 * Bloco 3 — quebra de padrão.
 *
 * A objeção-mãe deste público é "já paguei um profissional e continuo com o
 * problema". Ela não se responde com promessa nova, que só confirma a
 * suspeita: responde-se mostrando por que o que foi feito resolvia outra
 * pergunta.
 *
 * Por isso a explicação nunca desqualifica quem atendeu antes. Cada item
 * reconhece o que a conduta anterior de fato resolve, e só então diz o que ela
 * não alcança.
 */
export function TreatmentObjections({ content }: { content: TreatmentContent }) {
  return (
    <section className="section objections-section">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">
            {content.objectionsKicker ?? "Antes de decidir"}
          </span>
          <h2>{content.objectionsTitle}</h2>
        </div>

        <ObjectionList items={content.objections} />
      </div>
    </section>
  );
}
