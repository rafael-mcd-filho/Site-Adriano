import { BadgeCheck, MapPin, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { ClinicalCaseCard } from "@/components/clinical-case";
import { DoctorPortrait } from "@/components/doctor-portrait";
import { Reviews } from "@/components/reviews";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { ctaLadder, patientReviews, type TreatmentContent } from "@/lib/content";
import { siteConfig } from "@/lib/site";
import { MediaPlaceholder } from "@/components/media-placeholder";

/**
 * "Por que confiar nessa avaliação" — credencial e prova numa seção só.
 *
 * Eram quatro blocos em potencial: autoridade compacta, caso, autoridade
 * completa e depoimentos. Todos respondem à mesma pergunta do visitante, e
 * quatro respostas seguidas para uma pergunta só é o que faz uma página
 * parecer interminável.
 *
 * Nome, registro e credenciais vêm de `siteConfig` porque são os mesmos em
 * qualquer página. Só o parágrafo de atuação muda: repetir o mesmo texto nas
 * cinco rotas não ajuda o leitor nem o Google.
 *
 * O caso entra aqui apenas quando NÃO coube na seção de etapas — nunca nas
 * duas.
 */
export function TreatmentTrust({
  content,
  showCase = false,
}: {
  content: TreatmentContent;
  showCase?: boolean;
}) {
  const reviews = content.reviews ?? patientReviews;

  return (
    <section className="section authority-section" id="confianca">
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
              Consultórios em {siteConfig.serviceArea}
            </span>
          </div>

          <p>{siteConfig.boardContext}</p>
          <p className="authority-links">
            <a
              className="text-link light-link"
              href={siteConfig.boardCertificate}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver certificado do Board (2026)
            </a>
            <Link className="text-link light-link" href="/sobre">
              Conhecer a formação completa
            </Link>
          </p>
        </div>
      </div>

      {showCase && (
        <div className="container trust-case">
          <ClinicalCaseCard item={content.clinicalCase} />
        </div>
      )}

      {/* Sem relato aprovado, `Reviews` não renderiza nada e a seção termina
          na credencial — que é o que existe de prova verificável hoje. */}
      {reviews.length ? (
        <div className="container trust-reviews">
          <Reviews items={reviews} />
          <div className="decision-cta">
            <WhatsAppButton
              ctaId="cta-confianca-whatsapp"
              message={content.whatsappMessage}
              label={ctaLadder.trust}
              className="button-whatsapp-solid"
            />
          </div>
        </div>
      ) : (
        <div className="container trust-reviews">
          <MediaPlaceholder kind="reviews-patients" className="reviews-media-reserved" />
        </div>
      )}
    </section>
  );
}
