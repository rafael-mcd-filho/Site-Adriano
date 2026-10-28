"use client";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { contactLocation, getWhatsAppHref } from "@/lib/site";
import { whatsappMessageForPage } from "@/lib/whatsapp-copy";

export function FooterAction() {
  const pathname = usePathname();
  const professional = pathname === "/profissionais-da-saude";
  return <a
    className="footer-action"
    href={getWhatsAppHref(whatsappMessageForPage(pathname))}
    data-cta="cta-rodape-contato"
    data-cta-channel="whatsapp"
    data-cta-location="rodape"
    data-cta-city={contactLocation.id}
    target="_blank"
    rel="noopener noreferrer"
  >
    {professional ? "Discutir um caso" : "Falar com a equipe"} <ArrowRight size={16} aria-hidden="true" />
  </a>;
}
