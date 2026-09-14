"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { areaNavigation } from "@/lib/site";

export function FooterAction() {
  const pathname = usePathname();
  const professional = pathname === "/para-dentistas";
  const hasContact = ["/", "/sobre", "/para-dentistas", ...areaNavigation.map(area => area.href)].includes(pathname);
  return <Link className="footer-action" href={hasContact ? "#contato" : "/#contato"}>
    {professional ? "Discutir um caso" : "Falar com a equipe"} <ArrowRight size={16} aria-hidden="true" />
  </Link>;
}
