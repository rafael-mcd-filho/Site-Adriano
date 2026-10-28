"use client";

import { useEffect } from "react";
import { practiceLocations } from "@/lib/site";
import { buildWhatsAppEvent } from "@/lib/whatsapp-tracking";

/** Um único listener para todos os links diretos de WhatsApp do site. */
export function WhatsAppTracking() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLAnchorElement>("a[href]");
      if (!link) return;
      const region = link.closest<HTMLElement>("[data-cta-location], section, header, footer, nav, main");
      const payload = buildWhatsAppEvent({
        href: link.href,
        path: window.location.pathname,
        title: document.title,
        ctaId: link.dataset.cta,
        label: link.dataset.ctaLabel || link.getAttribute("aria-label") || link.textContent || "",
        location: link.dataset.ctaLocation || region?.dataset.ctaLocation || region?.id || region?.tagName.toLowerCase() || "",
      }, practiceLocations);
      if (!payload) return;
      const target = window as Window & { dataLayer?: Array<Record<string, string>> };
      (target.dataLayer ||= []).push(payload);
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);
  return null;
}
