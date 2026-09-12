import { ArrowRight, CircleHelp } from "lucide-react";

export type Objection = { belief: string; reality: string };

/**
 * Duas metades lado a lado: o que a pessoa traz e o que a avaliação responde.
 *
 * Empilhadas e com a mesma tipografia, as duas viravam um texto corrido de
 * quatro parágrafos — ninguém via que ali havia pergunta e resposta. O
 * contraste (peso, cor e o fio lateral) é o que faz a estrutura aparecer sem
 * precisar de rótulo escrito em cima de cada coluna.
 *
 * Vive fora de `components/treatment/` porque a página "Para dentistas" usa a
 * mesma lista, com as dúvidas do colega no lugar das do paciente. Antes eram
 * duas cópias da mesma marcação, e a segunda ficou para trás na primeira
 * mudança de layout.
 */
export function ObjectionList({ items }: { items: Objection[] }) {
  return (
    <ol className="objection-list">
      {items.map((item, index) => (
        <li className="reveal" key={item.belief}>
          <div className="objection-belief">
            <span className="objection-index" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <CircleHelp className="objection-glyph" size={18} aria-hidden="true" />
            <strong>{item.belief}</strong>
          </div>

          <div className="objection-reality">
            <ArrowRight className="objection-glyph" size={18} aria-hidden="true" />
            <p>{item.reality}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
