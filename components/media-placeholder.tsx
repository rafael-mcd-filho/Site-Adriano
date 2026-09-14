import Image from "next/image";
import { mediaReplacements } from "@/lib/media-replacements";

/** Materiais pendentes: cada imagem se identifica como espaço reservado. */
const placeholders = {
  "doctor-portrait": {
    title: "Imagem do doutor aqui",
    caption: "Espaço reservado para o retrato real do Dr. Adriano.",
    portrait: true,
  },
  "doctor-consultation": {
    title: "Imagem do doutor em consulta aqui",
    caption: "Espaço reservado para uma fotografia real do atendimento.",
    portrait: false,
  },
  "doctor-examination": {
    title: "Imagem do doutor em avaliação aqui",
    caption: "Espaço reservado para uma fotografia real de avaliação clínica.",
    portrait: false,
  },
  "doctor-planning": {
    title: "Imagem do doutor planejando com colega aqui",
    caption: "Espaço reservado para uma fotografia real do planejamento entre profissionais.",
    portrait: false,
  },
  "doctor-congress": {
    title: "Imagem do doutor em congresso aqui",
    caption: "Espaço reservado para uma fotografia real em evento, com nome e data confirmados.",
    portrait: false,
  },
  "facade": {
    title: "Foto da fachada aqui",
    caption: "Espaço reservado para a fotografia da fachada do local de atendimento.",
    portrait: false,
  },
  "reception": {
    title: "Foto da recepção aqui",
    caption: "Espaço reservado para a fotografia da recepção real.",
    portrait: false,
  },
  "certificate": {
    title: "Certificado real a inserir",
    caption: "Espaço reservado para um documento profissional verificável.",
    portrait: false,
  },
  "case-implants": {
    title: "Caso real de implantes aqui",
    caption: "Espaço reservado para material real do caso, revisado e autorizado.",
    portrait: false,
  },
  "case-bone": {
    title: "Tomografia e planejamento 3D reais aqui",
    caption: "Imagens reais anonimizadas do volume ósseo e planejamento a inserir.",
    portrait: false,
  },
  "case-atm": {
    title: "Caso real de DTM e ATM aqui",
    caption: "Espaço reservado para material real do caso, revisado e autorizado.",
    portrait: false,
  },
  "case-orthognathic": {
    title: "Caso real de ortognática aqui",
    caption: "Espaço reservado para material real do caso, revisado e autorizado.",
    portrait: false,
  },
  "case-sleep": {
    title: "Exame do sono real aqui",
    caption: "Espaço para exame anonimizado, com interpretação e acompanhamento revisados pelo doutor.",
    portrait: false,
  },
  "case-wisdom": {
    title: "Panorâmica real anotada aqui",
    caption: "Espaço reservado para radiografia anonimizada, anotada e autorizada.",
    portrait: false,
  },
  "reviews-patients": {
    title: "Avaliações reais aqui",
    caption: "Espaço reservado para avaliações de pacientes verificadas e autorizadas.",
    portrait: false,
  },
  "reviews-colleagues": {
    title: "Depoimentos de colegas aqui",
    caption: "Espaço reservado para depoimentos reais de profissionais que encaminham.",
    portrait: false,
  },
} as const;

export type MediaPlaceholderKind = keyof typeof placeholders;

type MediaPlaceholderProps = {
  kind: MediaPlaceholderKind;
  className?: string;
  /** Uma string vazia omite a legenda. */
  caption?: string;
  /** Moldura e legenda menores para posições compactas, como o hero. */
  compact?: boolean;
  /** Diferencia materiais do mesmo tipo, como as fachadas de duas cidades. */
  slot?: string;
};

/** Placeholder explícito; nunca representa paciente, profissional ou prova real. */
export function MediaPlaceholder({
  kind,
  className,
  caption,
  compact = false,
  slot,
}: MediaPlaceholderProps) {
  const item = placeholders[kind];
  const replacement = mediaReplacements[slot ?? kind];
  const displayedCaption = replacement ? (replacement.caption ?? "") : (caption ?? (compact ? "" : item.caption));
  const width = item.portrait ? 960 : 1200;
  const banner = kind.startsWith("reviews-");
  const height = banner ? 420 : item.portrait ? 1200 : 900;
  const classes = [
    "media-placeholder",
    item.portrait ? "media-placeholder--portrait" : "media-placeholder--landscape",
    compact && "media-placeholder--compact",
    banner && "media-placeholder--banner",
    className,
  ].filter(Boolean).join(" ");

  return (
    <figure className={classes} data-media-placeholder={replacement ? undefined : kind} data-media-slot={slot ?? kind}>
      <div className="media-placeholder__image">
        <Image
          src={replacement?.src ?? `/images/placeholders/${kind}.svg`}
          alt={replacement?.alt ?? item.title}
          width={width}
          height={height}
          sizes={compact ? "(max-width: 800px) 80vw, 320px" : "(max-width: 900px) 100vw, 560px"}
        />
      </div>
      {displayedCaption && <figcaption>{displayedCaption}</figcaption>}
    </figure>
  );
}
