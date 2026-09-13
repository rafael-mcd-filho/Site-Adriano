import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BadgeCheck } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { MediaPlaceholder } from "@/components/media-placeholder";
import { mediaReplacements } from "@/lib/media-replacements";

/** Foto pendente explicitamente identificada; o certificado fornecido é preservado. */
export function DoctorPortrait({
  variant = "hero",
}: {
  variant?: "hero" | "authority" | "certificate";
}) {
  if (variant === "authority") {
    return (
      <div className="doctor-authority-media">
        <MediaPlaceholder kind="doctor-portrait" />
        <div className="doctor-certificate-small"><DoctorPortrait variant="certificate" /></div>
      </div>
    );
  }
  if (variant === "certificate") {
    if (!siteConfig.boardCertificate) return <MediaPlaceholder kind="certificate" />;
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
    <figure className={"doctor-portrait doctor-portrait-" + variant + " doctor-portrait-reserved"}>
      <div className="doctor-placeholder-frame">
        <Image src={mediaReplacements["doctor-portrait"]?.src ?? "/images/placeholders/doctor-portrait.svg"} alt={mediaReplacements["doctor-portrait"]?.alt ?? "Imagem do doutor aqui — substituir pelo retrato real do Dr. Adriano."} width={960} height={1200} sizes="(max-width: 600px) 160px, (max-width: 800px) 200px, 420px" />
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
            <span className="identity-board"><BadgeCheck size={16} aria-hidden="true" /> Professor titular · UFRN</span>
            <Link className="identity-link" href="/sobre">
              Conhecer a formação <ArrowRight size={14} aria-hidden="true" />
            </Link>
      </figcaption>
    </figure>
  );
}
