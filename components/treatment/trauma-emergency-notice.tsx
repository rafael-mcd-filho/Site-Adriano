import { PhoneCall, TriangleAlert } from "lucide-react";
import styles from "./trauma-emergency-notice.module.css";

/**
 * Separa a urgência hospitalar do contato eletivo da página. O link para o
 * SAMU é uma saída direta para quem não deveria permanecer no funil do site.
 */
export function TraumaEmergencyNotice() {
  return (
    <aside className={styles.notice} aria-labelledby="trauma-emergencia">
      <span className={styles.icon} aria-hidden="true">
        <TriangleAlert size={22} strokeWidth={2} />
      </span>

      <div className={styles.copy}>
        <h2 id="trauma-emergencia">
          Sinais de alerta precisam de pronto-socorro.
        </h2>
        <p>
          Falta de ar, dificuldade para engolir, sangramento intenso, visão
          alterada, vômitos, sonolência incomum ou desmaio exigem atendimento
          imediato.
        </p>
        <p className={styles.stableCase}>
          O WhatsApp desta página é para casos estáveis ou após o primeiro
          atendimento.
        </p>
      </div>

      <a className={styles.call} href="tel:192">
        <PhoneCall size={17} aria-hidden="true" />
        Em situação de risco, ligue 192
      </a>
    </aside>
  );
}
