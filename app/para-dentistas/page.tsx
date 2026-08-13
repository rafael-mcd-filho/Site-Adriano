import type { Metadata } from "next";
import {
  CheckCircle2,
  ClipboardList,
  FileCheck2,
  Handshake,
  MessageSquareText,
  RotateCcw,
  Send,
} from "lucide-react";
import Link from "next/link";
import { ButtonContent } from "@/components/button-content";
import { ContactForm } from "@/components/contact-form";
import { ExitIntent } from "@/components/exit-intent";
import { JsonLd } from "@/components/json-ld";
import { FloatingWhatsApp, WhatsAppButton } from "@/components/whatsapp-button";
import { dentistFormOptions } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Encaminhamento para Cirurgia Buco-Maxilo-Facial",
  socialTitle: "Para dentistas | Dr. Adriano",
  description:
    "Canal profissional para dentistas que desejam encaminhar pacientes e acompanhar o planejamento em parceria.",
  path: "/para-dentistas",
});

const whatsappMessage =
  "Olá, sou dentista e gostaria de conversar sobre um possível encaminhamento.";

const cases = [
  "Implantes e reconstruções ósseas.",
  "DTM e alterações estruturais da ATM.",
  "Cirurgia ortognática.",
  "Avaliação relacionada à apneia do sono.",
  "Casos buco-maxilo-faciais que exigem discussão conjunta.",
];

const professionalFaqs = [
  {
    question: "Posso discutir um caso antes de encaminhar?",
    answer:
      "Sim. O canal profissional pode ser usado para uma conversa inicial sobre contexto e documentação disponível, sem substituir a avaliação do paciente.",
  },
  {
    question: "Quais informações ajudam no primeiro contato?",
    answer:
      "Uma síntese do motivo do encaminhamento, tratamentos já realizados e exames disponíveis ajuda a organizar a avaliação.",
  },
  {
    question: "O paciente retorna para o dentista solicitante?",
    answer:
      "A proposta é atuar de forma complementar e preservar a continuidade com o profissional que acompanha o caso.",
  },
  {
    question: "Como recebo retorno?",
    answer:
      "O formato definitivo será alinhado antes da publicação. O site prevê comunicação sobre avaliação, conduta proposta e etapa de devolução.",
  },
];

export default function ParaDentistasPage() {
  return (
    <>
      <JsonLd data={faqSchema(professionalFaqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Para dentistas", path: "/para-dentistas" },
        ])}
      />

      <main>
        <section className="dentist-hero section-soft-edge">
          <div className="container breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Início</Link>
            <span aria-hidden="true">/</span>
            <span>Para dentistas</span>
          </div>
          <div className="container dentist-hero-grid">
            <div className="page-enter">
              <span className="eyebrow">Canal profissional</span>
              <h1>Seu paciente continua sendo seu.</h1>
              <p>
                Um fluxo de encaminhamento construído para complementar o cuidado,
                discutir decisões com contexto e manter o colega informado.
              </p>
              <div className="hero-actions">
                <Link
                  id="cta-hero-formulario"
                  data-cta="cta-hero-formulario"
                  className="button button-motion"
                  href="#contato"
                >
                  <ButtonContent>Discutir um caso</ButtonContent>
                </Link>
                <WhatsAppButton
                  ctaId="cta-hero-whatsapp"
                  message={whatsappMessage}
                  label="Falar com a equipe"
                />
              </div>
            </div>

            <div className="referral-document" aria-hidden="true">
              <span className="document-top">
                <FileCheck2 size={22} />
                Relatório de encaminhamento
              </span>
              <i />
              <i />
              <i className="short" />
              <div className="document-flow">
                <span>Dentista</span>
                <Send size={17} />
                <span>Especialista</span>
                <RotateCcw size={17} />
              </div>
            </div>
          </div>
        </section>

        <section className="section section-white">
          <div className="container professional-grid">
            <div>
              <span className="section-kicker">Casos para encaminhamento</span>
              <h2>Quando o caso pede outra camada de avaliação.</h2>
              <p>
                A indicação não precisa chegar fechada. O encaminhamento pode
                começar pela dúvida clínica e pelos achados já disponíveis.
              </p>
            </div>
            <ul className="case-list">
              {cases.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={19} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section partnership-section">
          <div className="container partnership-grid">
            <div className="partnership-icon" aria-hidden="true">
              <Handshake />
            </div>
            <div>
              <span className="section-kicker light">Compromisso de parceria</span>
              <h2>Atuação complementar, comunicação objetiva e devolução planejada.</h2>
              <p>
                O tratamento especializado não rompe o vínculo com o dentista
                solicitante. O objetivo é integrar a etapa cirúrgica ou diagnóstica
                ao plano já conduzido.
              </p>
            </div>
          </div>
        </section>

        <section className="section process-section">
          <div className="container">
            <div className="section-heading centered-heading">
              <span className="section-kicker">Fluxo profissional</span>
              <h2>Do primeiro contato à continuidade do cuidado.</h2>
            </div>
            <ol className="process-grid">
              {[
                ["Contato", "O colega apresenta o contexto e a dúvida principal.", MessageSquareText],
                ["Informações", "Exames e histórico disponíveis são organizados.", ClipboardList],
                ["Avaliação", "O paciente é avaliado dentro do escopo especializado.", FileCheck2],
                ["Retorno", "Conduta e continuidade são alinhadas com o solicitante.", RotateCcw],
              ].map(([title, text, Icon], index) => {
                const StepIcon = Icon as typeof MessageSquareText;
                return (
                  <li key={title as string}>
                    <span className="process-number">{index + 1}</span>
                    <StepIcon size={21} aria-hidden="true" />
                    <h3>{title as string}</h3>
                    <p>{text as string}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        <section className="section faq-section">
          <div className="container faq-grid">
            <div className="faq-heading">
              <span className="section-kicker">Dúvidas profissionais</span>
              <h2>Um processo simples de iniciar.</h2>
              <p>As informações clínicas detalhadas são discutidas em canal adequado.</p>
            </div>
            <div className="faq-list">
              {professionalFaqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section section-soft-edge" id="contato">
          <div className="container">
            <ContactForm
              page="para-dentistas"
              eyebrow="Canal profissional"
              title="Inicie uma conversa sobre o caso."
              description="Informe seu nome, WhatsApp e o objetivo do contato. Não envie dados identificáveis do paciente pelo formulário."
              question="Qual é o objetivo do contato?"
              options={dentistFormOptions}
            />
          </div>
        </section>
      </main>
      <FloatingWhatsApp message={whatsappMessage} />
      <ExitIntent message={whatsappMessage} />
    </>
  );
}

