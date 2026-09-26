import styles from "./video-embed.module.css";

/** Episódio oficial indicado pelo Dr. Adriano para a página correspondente. */
export function VideoEmbed({ id, title }: { id: string; title: string }) {
  return (
    <div className={styles.frame}>
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
