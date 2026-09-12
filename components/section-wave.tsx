type SectionWaveProps = {
  from?: string;
  to?: string;
  flip?: boolean;
  className?: string;
};

/** Dentro de uma seção com imagem, `from="transparent"` preserva o fundo até a curva. */
export function SectionWave({
  from = "var(--white)",
  to = "var(--navy-800)",
  flip = false,
  className = "",
}: SectionWaveProps) {
  return (
    <div
      className={`section-wave ${className}`.trim()}
      style={{ backgroundColor: from, color: to }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        focusable="false"
        aria-hidden="true"
      >
        <path
          d="M0 49C220 83 405 70 615 39C860 3 1080 2 1440 35V80H0Z"
          fill="currentColor"
          transform={flip ? "translate(1440 0) scale(-1 1)" : undefined}
        />
      </svg>
    </div>
  );
}
