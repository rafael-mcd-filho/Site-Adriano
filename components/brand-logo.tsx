import styles from "./brand-logo.module.css";

/** A janela SVG remove apenas as margens visuais; a arte original permanece intacta. */
export function BrandLogo({ light = false, large = false }: { light?: boolean; large?: boolean }) {
  return (
    <svg
      className={large ? styles.large : styles.logo}
      viewBox="90 728 1414 659"
      width="150"
      height="70"
      role="img"
      aria-label="Dr. Adriano Germano — Cirurgião Bucomaxilofacial"
      focusable="false"
    >
      <image
        href={light ? "/brand/adriano-logo-white-v1.png" : "/brand/adriano-logo-dark-v1.png"}
        width="1620"
        height="2025"
      />
    </svg>
  );
}
