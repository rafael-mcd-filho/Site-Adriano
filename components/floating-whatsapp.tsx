"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ConsultorioChooser } from "@/components/consultorio-chooser";
import { ctaLadder } from "@/lib/content";

/**
 * Aparece depois que o hero sai da viewport e volta a se ocultar quando a
 * seção de contato entra em cena. Assim o atalho não compete nem com o CTA da
 * primeira dobra nem com o consentimento e o envio do formulário.
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
  }, []);

  if (!ready) return null;

  return <ConsultorioChooser
    label={label}
    ctaId="cta-flutuante-whatsapp"
    className="floating-whatsapp is-ready"
  />;
}
