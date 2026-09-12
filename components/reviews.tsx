import { Quote, Star } from "lucide-react";
import type { Review } from "@/lib/content";

/**
 * Relatos reais dentro de um bloco maior — nunca uma seção própria.
 *
 * Prova social responde "ele é bom com gente como eu?", e credencial responde
 * "ele é qualificado?". As duas formam um pensamento só, então vivem na mesma
 * seção: separá-las produzia dois blocos grandes dizendo a mesma coisa em
 * registros diferentes.
 *
 * Sem relato aprovado, não renderiza. A ausência é deliberada: depoimento
 * inventado é infração, e relato sem origem não prova nada para quem lê.
 */
export function Reviews({
  items,
  title = "O que dizem sobre o atendimento",
  rating,
}: {
  items: Review[];
  title?: string;
  /** Só quando houver volume real e verificável no perfil público. */
  rating?: { average: string; count: number; href: string };
}) {
  if (!items.length) return null;

  return (
    <div className="reviews">
      <div className="reviews-head">
        <h3>{title}</h3>
        {rating && (
          <a
            className="reviews-rating"
            href={rating.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Star size={16} aria-hidden="true" />
            <strong>{rating.average}</strong>
            <span>{rating.count} avaliações no Google</span>
          </a>
        )}
      </div>

      <div className="reviews-grid">
        {items.map((review) => (
          <blockquote className="review-card" key={review.text}>
            <Quote size={18} aria-hidden="true" />
            <p>{review.text}</p>
            <footer>
              {review.author}
              {review.source && <span> · {review.source}</span>}
            </footer>
          </blockquote>
        ))}
      </div>
    </div>
  );
}
