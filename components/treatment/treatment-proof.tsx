import { Quote } from "lucide-react";
import { siteConfig } from "@/lib/site";
import type { TreatmentContent } from "@/lib/content";

/**
 * Prova social conforme o plano de comunicação: depoimento em TEXTO e SEM
 * identificação do paciente. Sem foto, sem nome, sem cidade, sem antes e
 * depois — e nenhum deles fala de resultado de procedimento, só da experiência
 * de atendimento e de entendimento do caso.
 *
 * Enquanto o site está em demonstração, o aviso fica visível: publicar
 * depoimento inventado como se fosse real é outro problema, e não é o que este
 * bloco existe para fazer.
 */
export function TreatmentProof({ content }: { content: TreatmentContent }) {
  if (!content.testimonials.length) return null;

  return (
    <section className="section proof-section">
      <div className="container">
        <div className="section-heading centered-heading">
          <span className="pill-badge">
            {content.proofKicker ?? "O que dizem os pacientes"}
          </span>
          <h2>{content.proofTitle ?? "Relatos de quem passou pela avaliação."}</h2>
          {siteConfig.isDemo && (
            <p className="demo-note">
              Textos de demonstração. Serão substituídos por relatos reais,
              publicados sem identificação do paciente.
            </p>
          )}
        </div>

        <div className="proof-grid">
          {content.testimonials.map((testimonial) => (
            <blockquote className="proof-card" key={testimonial}>
              <Quote size={20} aria-hidden="true" />
              <p>{testimonial}</p>
              <footer>Paciente atendido · relato sem identificação</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
