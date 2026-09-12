"use client";

import { useEffect, useRef } from "react";

/**
 * Dispara a conversão uma única vez. A página tem URL própria justamente para
 * que o GTM e o Google Ads possam marcar o evento sem depender de clique em
 * botão — um estado de sucesso desenhado dentro do formulário não muda a rota
 * e, por isso, não vira conversão em nenhuma plataforma.
 */
export function ConversionTracker({ origin }: { origin: string }) {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;

    const target = window as Window & {
      dataLayer?: Array<Record<string, string>>;
    };
    target.dataLayer = target.dataLayer || [];
    target.dataLayer.push({ event: "form_conversion", form_origin: origin });
  }, [origin]);

  return null;
}
