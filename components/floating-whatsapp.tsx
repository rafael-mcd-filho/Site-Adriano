"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon } from "@/components/whatsapp-button";
import {
  getWhatsAppHref,
  siteConfig,
  whatsappMessageWithSource,
} from "@/lib/site";

const isConfigured = Boolean(siteConfig.whatsappNumber);

/**
 * Aparece depois que o hero sai da viewport e volta a se ocultar quando a
 * seção de contato entra em cena. Assim o atalho não compete nem com o CTA da
 * primeira dobra nem com o consentimento e o envio do formulário.
 *
 * `scroll`/`resize` passivos em vez de IntersectionObserver: a checagem direta
 * do retângulo é imediata e barata, e não depende de o observer acordar quando
 * o hero está animando.
 */
export function FloatingWhatsApp({ message }: { message: string }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>(
      ".home-hero, .treatment-hero, .dentist-hero, .inner-hero",
    );
    const contact = document.querySelector<HTMLElement>(".contact-section");

    let frame = 0;

    const check = () => {
      frame = 0;
      const heroGone = !hero || hero.getBoundingClientRect().bottom < 40;
      const contactRect = contact?.getBoundingClientRect();
      const contactVisible = Boolean(
        contactRect &&
          contactRect.top < window.innerHeight - 24 &&
          contactRect.bottom > 88,
      );
      setReady(heroGone && !contactVisible);
    };

    const schedule = () => {
      if (frame) return;
      frame = requestAnimationFrame(check);
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <a
      id="cta-flutuante-whatsapp"
      data-cta="cta-flutuante-whatsapp"
      data-cta-channel={isConfigured ? "whatsapp" : "form"}
      className={ready ? "floating-whatsapp is-ready" : "floating-whatsapp"}
      href={getWhatsAppHref(
        whatsappMessageWithSource(message, "botão flutuante durante a leitura"),
      )}
      target={isConfigured ? "_blank" : undefined}
      rel={isConfigured ? "noopener noreferrer" : undefined}
      aria-label={isConfigured ? "Falar com a equipe pelo WhatsApp" : "Ir para o formulário de contato"}
      aria-hidden={!ready}
      tabIndex={ready ? 0 : -1}
      title={
        isConfigured
          ? "Falar pelo WhatsApp"
          : "Solicitar contato da equipe"
      }
    >
      <WhatsAppIcon size={22} />
      <span>{isConfigured ? "WhatsApp" : "Contato"}</span>
    </a>
  );
}
