import Image from "next/image";
import type { CSSProperties } from "react";
import { mediaReplacements } from "@/lib/media-replacements";

export type MediaPlaceholderKind =
  | "doctor-portrait"
  | "doctor-consultation"
  | "doctor-planning"
  | "doctor-congress"
  | "facade"
  | "certificate";

type MediaPlaceholderProps = {
  kind: MediaPlaceholderKind;
  className?: string;
  caption?: string;
  compact?: boolean;
  slot?: string;
};

/** Renderiza somente mídia disponível; materiais ausentes não ocupam espaço. */
export function MediaPlaceholder({
  kind,
  className,
  caption,
  compact = false,
  slot,
}: MediaPlaceholderProps) {
  const media = mediaReplacements[slot ?? kind];
  if (!media) return null;

  const displayedCaption = caption ?? media.caption ?? "";
  const style = {
    "--media-placeholder-ratio": media.width + " / " + media.height,
  } as CSSProperties;
  const classes = [
    "media-placeholder",
    kind === "doctor-portrait" ? "media-placeholder--portrait" : "media-placeholder--landscape",
    compact && "media-placeholder--compact",
    className,
  ].filter(Boolean).join(" ");

  return (
    <figure className={classes} data-media-slot={slot ?? kind} style={style}>
      <div className="media-placeholder__image">
        <Image
          src={media.src}
          alt={media.alt}
          width={media.width}
          height={media.height}
          sizes={compact ? "(max-width: 800px) 90vw, 560px" : "(max-width: 900px) 100vw, 560px"}
        />
      </div>
      {displayedCaption && <figcaption>{displayedCaption}</figcaption>}
    </figure>
  );
}
