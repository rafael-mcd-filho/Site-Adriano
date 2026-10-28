import { ButtonContent } from "@/components/button-content";
import {
  contactLocation,
  getWhatsAppHref,
} from "@/lib/site";

import { WhatsAppIcon } from "@/components/whatsapp-icon";
export { WhatsAppIcon } from "@/components/whatsapp-icon";

type WhatsAppButtonProps = {
  message: string;
  /** Identificador de rastreio. Vira `id` e `data-cta` para o GTM. */
  ctaId: string;
  label?: string;
  compact?: boolean;
  className?: string;
};

export function WhatsAppButton({
  message,
  ctaId,
  label = "Falar pelo WhatsApp",
  compact = false,
  className = "",
}: WhatsAppButtonProps) {
  return (
    <a
      id={ctaId}
      data-cta={ctaId}
      data-cta-channel="whatsapp"
      data-cta-city={contactLocation.id}
      className={
        (compact
          ? "button button-whatsapp button-motion button-small "
          : "button button-whatsapp button-motion ") + className
      }
      href={getWhatsAppHref(message.trim())}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label + " — falar com a equipe pelo WhatsApp"}
    >
      <ButtonContent icon={WhatsAppIcon} seal="whatsapp">
        {label}
      </ButtonContent>
    </a>
  );
}
