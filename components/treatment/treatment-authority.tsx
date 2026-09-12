import { BadgeCheck, MapPin, ShieldCheck } from "lucide-react";
import { DoctorPortrait } from "@/components/doctor-portrait";
import type { TreatmentContent } from "@/lib/content";
import { siteConfig } from "@/lib/site";

/**
 * Credenciais fornecidas pelo cliente, com acesso ao documento de suporte.
 *
 * Nome, registro e credenciais vêm de `siteConfig` porque são os mesmos em
 * qualquer página. Só o parágrafo de atuação muda: repetir o mesmo texto nas
 * cinco rotas não ajuda o leitor nem o Google.
 */
export function TreatmentAuthority({ content }: { content: TreatmentContent }) {
  return (
    <section className="section authority-section">
      <div className="container authority-grid">
        <DoctorPortrait variant="authority" />

        <div className="authority-copy">
          <span className="section-kicker light">Quem conduz a avaliação</span>
          <h2>{siteConfig.fullName}</h2>
          <p className="authority-role">
            {siteConfig.specialty} · {siteConfig.registry}
          </p>

          <ul className="authority-credentials">
            {siteConfig.credentials.map((credential) => (
              <li key={credential}>
                <BadgeCheck size={17} aria-hidden="true" />
                {credential}
              </li>
            ))}
          </ul>

          <p>
            {content.authorityBody ??
              "O Dr. Adriano atua na avaliação e no tratamento de alterações dos maxilares, da face e da articulação da mandíbula. Suas queixas, os exames e o cuidado que você já recebe ajudam a orientar a conduta, com integração entre profissionais quando necessária."}
          </p>

          <div className="authority-facts">
            <span>
              <ShieldCheck size={16} aria-hidden="true" />
              Atendimento particular
            </span>
            <span>
              <MapPin size={16} aria-hidden="true" />
              {siteConfig.city}
            </span>
          </div>

          <p>{siteConfig.boardContext}</p>
          <a className="text-link light-link" href={siteConfig.boardCertificate} target="_blank" rel="noopener noreferrer">
            Ver certificado do Board (2026)
          </a>
        </div>
      </div>
    </section>
  );
}
