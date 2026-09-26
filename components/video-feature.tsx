import { ArrowUpRight, Play } from "lucide-react";
import { VideoEmbed } from "@/components/video-embed";
import styles from "./video-feature.module.css";

type VideoFeatureProps = {
  id: string;
  title: string;
  eyebrow: string;
  heading: string;
  description: string;
  headingId: string;
};

export function VideoFeature({ id, title, eyebrow, heading, description, headingId }: VideoFeatureProps) {
  return (
    <section className={styles.section} aria-labelledby={headingId}>
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.copy}>
            <span className={styles.kicker}><Play size={14} fill="currentColor" aria-hidden="true" /> CONVERSA AFINADA · {eyebrow}</span>
            <h2 id={headingId}>{heading}</h2>
            <p>{description}</p>
            <a href={`https://www.youtube.com/watch?v=${id}`} target="_blank" rel="noopener noreferrer">
              Abrir episódio no YouTube <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
          <div className={styles.media}>
            <span className={styles.mediaLabel}>ASSISTA À CONVERSA</span>
            <VideoEmbed id={id} title={title} />
          </div>
        </div>
      </div>
    </section>
  );
}
