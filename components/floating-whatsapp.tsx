"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ButtonContent } from "@/components/button-content";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { ctaLadder } from "@/lib/content";
import { contactLocation, getWhatsAppHref } from "@/lib/site";
import { whatsappMessageForPage } from "@/lib/whatsapp-copy";

/**
 * Aparece depois que o hero sai da viewport e volta a se ocultar quando a
 * seção de contato entra em cena. Assim o atalho não compete nem com o CTA da
 * primeira dobra nem com a seção final de contato.
 *
 * `scroll`/`resize` passivos em vez de IntersectionObserver: a checagem direta
 * do retângulo é imediata e barata, e não depende de o observer acordar quando
 * o hero está animando.
 */
export function FloatingWhatsApp() {
  const [ready, setReady] = useState(false);
  const pathname = usePathname();
  const label = pathname === "/profissionais-da-saude" ? "Discutir um caso" : ctaLadder.floating;

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
  }, [pathname]);

  if (!ready) return null;

  return <a
    id="cta-flutuante-whatsapp"
    data-cta="cta-flutuante-whatsapp"
    data-cta-channel="whatsapp"
    data-cta-city={contactLocation.id}
    data-cta-location="flutuante"
    className="floating-whatsapp is-ready"
    href={getWhatsAppHref(whatsappMessageForPage(pathname))}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label + " — falar com a equipe pelo WhatsApp"}
  >
    <ButtonContent icon={WhatsAppIcon} seal="whatsapp">{label}</ButtonContent>
  </a>;
}
