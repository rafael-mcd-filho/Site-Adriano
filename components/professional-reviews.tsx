import { Quote } from "lucide-react";
import type { Review } from "@/lib/content";
import styles from "./professional-reviews.module.css";

export function ProfessionalReviews({ items }: { items: Review[] }) {
  if (!items.length) return null;

  return (
    <section className={styles.section} id="colegas" aria-labelledby="colegas-title">
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.intro}>
            <span className={styles.kicker}>PARCERIAS DE CUIDADO</span>
            <h2 id="colegas-title">O trabalho em equipe visto por quem está ao lado.</h2>
            <p>Profissionais que compartilham o planejamento com o Dr. Adriano contam como essa troca acontece.</p>
          </div>

          {items.map((review, index) => (
            <blockquote className={`${styles.card} ${index === 0 ? styles.first : styles.second}`} key={review.author}>
              <Quote className={styles.quoteIcon} size={40} strokeWidth={1.5} aria-hidden="true" />
              <p>{review.text}</p>
              <footer>
                <span className={styles.author}>{review.author}</span>
                {review.source && <span className={styles.source}>{review.source}</span>}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
