"use client";

import { useEffect } from "react";

const EVENT = "whatsapp_click";

function cleanText(value: string | null | undefined, fallback = "nao_identificado") {
  const normalized = String(value || "")
    .replace(/\s+/g, " ")
    .trim();
  return (normalized || fallback).slice(0, 100);
}

function slug(value: string | null | undefined, fallback = "nao-identificado") {
  const result = cleanText(value, fallback)
    // NFD separa o acento da letra; a classe Unicode remove só o acento.
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return result || fallback;
}

/**
 * Deduz a seção pelo contexto do link: um atributo explícito, o `id` da
 * `<section>`, o `aria-label` ou o primeiro título dentro dela. É o que faz o
 * rastreio funcionar em botões que ninguém instrumentou.
 */
function locationOf(link: HTMLAnchorElement) {
  const region = link.closest<HTMLElement>(
    "[data-cta-location], section, header, footer, nav, main",
  );
  const heading = region?.querySelector("h1, h2, h3");

  return cleanText(
    link.dataset.ctaLocation ||
      region?.dataset.ctaLocation ||
      region?.id ||
      region?.getAttribute("aria-label") ||
      heading?.textContent ||
      region?.tagName.toLowerCase(),
  );
}

/**
 * Um único listener delegado, em fase de captura, para todo clique em link do
 * WhatsApp da página. Nenhum componente precisa saber que existe rastreamento:
 * qualquer `wa.me` novo já entra medido, e um `data-cta` explícito só melhora
 * o identificador.
 *
 * O evento sai como `whatsapp_click` com `whatsapp_click_id` no formato
 * `pagina__secao__botao`, que é o que separa as conversões no GTM. O link
 * completo e a mensagem pré-preenchida NÃO são enviados — não há motivo para
 * o texto que a pessoa vai mandar chegar a uma plataforma de anúncios.
 */
export function WhatsAppTracking() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>(
        'a[href*="wa.me/"], a[href*="api.whatsapp.com/"], a[href*="whatsapp.com/send"]',
      );
      if (!link) return;

      const path = cleanText(window.location.pathname, "/");
      const page = path === "/" ? "home" : slug(path);
      const label = cleanText(
        link.dataset.ctaLabel || link.getAttribute("aria-label") || link.textContent,
      );
      const location = locationOf(link);
      const explicit = link.dataset.cta
        ? link.dataset.cta
            .replace(/^cta-/, "")
            .split("__")
            .map((segment) => slug(segment))
            .filter(Boolean)
            .join("__")
        : "";

      const dataLayer = ((window as Window & {
        dataLayer?: Array<Record<string, string>>;
      }).dataLayer ||= []);

      dataLayer.push({
        event: EVENT,
        whatsapp_click_id: (explicit
          ? page + "__" + explicit
          : [page, slug(location), slug(label)].join("__")
        ).slice(0, 100),
        whatsapp_button_text: label,
        whatsapp_button_location: location,
        whatsapp_page_path: path,
        whatsapp_page_title: cleanText(document.title),
        whatsapp_phone: cleanText(
          new URL(link.href, window.location.href).pathname.replace(/\D/g, ""),
        ),
      });
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
