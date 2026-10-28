"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { whatsappConversionGroups } from "@/lib/whatsapp-tracking";

const trackedPaths = new Set([
  ...whatsappConversionGroups.flatMap((group) => group.paths),
  "/politica-de-privacidade",
]);

/** Uma visualização por mudança de rota, inclusive sem recarregar o documento. */
export function PageViewTracking() {
  const pathname = usePathname();
  const previousPath = useRef<string | null>(null);

  useEffect(() => {
    if (!pathname) return;
    const path = pathname.replace(/\/+$/, "") || "/";
    if (previousPath.current === path) return;
    previousPath.current = path;
    if (!trackedPaths.has(path)) return;

    const target = window as Window & { dataLayer?: Array<Record<string, string>> };
    (target.dataLayer ||= []).push({
      event: "adriano_page_view",
      page_path: path,
    });
  }, [pathname]);

  return null;
}
