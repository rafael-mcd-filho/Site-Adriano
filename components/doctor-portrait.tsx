import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BadgeCheck } from "lucide-react";
import { siteConfig } from "@/lib/site";

/** Sem foto fornecida: assinatura gráfica no hero e documento real na autoridade. */
export function DoctorPortrait({
  variant = "hero",
}: {
  variant?: "hero" | "authority";
}) {
  if (variant === "authority") {
    return (
      <figure className="doctor-portrait doctor-portrait-authority">
        <a className="certificate-preview" href={siteConfig.boardCertificate} target="_blank" rel="noopener noreferrer" aria-label="Ampliar certificado do Board de 2026, em nova aba">
          <Image src={siteConfig.boardCertificate} alt="Certificado de 2026: Dr. Adriano Rocha Germano, certificado pelo Board e membro ativo da banca de examinadores do Colégio Brasileiro de CTBMF (FBCOMS)." width={1129} height={1048} sizes="(max-width: 800px) 90vw, 460px" />
          <span>Ver documento completo <ArrowUpRight size={17} aria-hidden="true" /></span>
        </a>
        <figcaption><span className="certificate-caption">Certificação e banca de examinadores · 2026</span></figcaption>
      </figure>
    );
  }
  return (
    <figure className={"doctor-portrait doctor-portrait-" + variant}>
      <div className="identity-art" aria-hidden="true">
        <svg className="identity-contours" viewBox="0 0 400 340" fill="none">
          <ellipse cx="220" cy="165" rx="150" ry="200" transform="rotate(30 220 165)" />
          <ellipse cx="220" cy="165" rx="124" ry="174" transform="rotate(30 220 165)" />
          <ellipse cx="220" cy="165" rx="98" ry="148" transform="rotate(30 220 165)" />
        </svg>
        <span className="identity-monogram">ARG</span>
        <span className="identity-signature">Antes de indicar, entender.</span>
      </div>
      {/* A identidade é a autoria do que vem abaixo: sem ela, o visitante lê
          quatro seções de conteúdo clínico assinadas por ninguém. O link para
          a formação completa evita que a página precise carregar o currículo
          inteiro só para responder "quem é esse profissional?". */}
      <figcaption>
            <strong>{siteConfig.fullName}</strong>
            <span>{siteConfig.specialty}</span>
            <span className="portrait-registry">
              {siteConfig.registry}
            </span>
            <span className="identity-board"><BadgeCheck size={16} aria-hidden="true" /> Certificação Board · FBCOMS</span>
            <Link className="identity-link" href="/sobre">
              Conhecer a formação <ArrowRight size={14} aria-hidden="true" />
            </Link>
      </figcaption>
    </figure>
  );
}
