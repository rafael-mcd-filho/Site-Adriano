import Image from "next/image";
import type { Review } from "@/lib/content";

export function ReviewsImageCarousel({ items }: { items: Review[] }) {
  return (
    <div className="reviews-carousel-shell">
      <div
        className="reviews-carousel"
        aria-label="Depoimentos enviados por pacientes"
      >
        {items.map((review) => (
          <figure className="review-image-card" key={review.imageHref}>
            <Image
              src={review.imageHref!}
              alt={`Depoimento enviado por ${review.author}`}
              fill
              sizes="(max-width: 700px) 82vw, (max-width: 1100px) 38vw, 320px"
            />
          </figure>
        ))}
      </div>
    </div>
  );
}
