import type { Metadata } from "next";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  CircleHelp,
  Clock8,
  FileCheck2,
  Handshake,
  MessageSquareText,
  RotateCcw,
  Send,
} from "lucide-react";
import Link from "next/link";
import { ButtonContent } from "@/components/button-content";
import { ContactForm } from "@/components/contact-form";
import { DoctorPortrait } from "@/components/doctor-portrait";
import { MediaPlaceholder } from "@/components/media-placeholder";
import { FaqAccordion } from "@/components/faq-accordion";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { HeroBackdrop } from "@/components/hero-backdrop";
import { JsonLd } from "@/components/json-ld";
import { PainList } from "@/components/pain-list";
import { Reviews } from "@/components/reviews";
import { SectionWave } from "@/components/section-wave";
import { TrustMarquee } from "@/components/trust-marquee";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { colleagueReviews } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Encaminhamento Buco-Maxilo-Facial",
  socialTitle: "Para dentistas | Dr. Adriano",
  description:
    "Discuta indicação, etapa cirúrgica e continuidade do cuidado com o Dr. Adriano Rocha Germano, professor titular da UFRN. Encaminhamento em João Pessoa e Natal.",
  path: "/para-dentistas",
  ogSlug: "para-dentistas",
});

const whatsappMessage =
  "Olá, sou profissional de saúde e gostaria de conversar sobre um caso para encaminhamento.";

/** Situação e especialidade juntas, evitando duas listas sobre o mesmo caso. */
const painItems = [
  "Implantes e reconstrução óssea: avaliar o suporte e alinhar a etapa cirúrgica à reabilitação.",
  "ATM: discutir sintomas persistentes, investigação e possibilidades de conduta.",
  "Ortognática: integrar a avaliação dos maxilares ao planejamento ortodôntico.",
  "Apneia: investigar a participação da estrutura facial junto ao cuidado do sono.",
  "Reconstrução maxilofacial: discutir perdas extensas, implantes faciais e técnicas microcirúrgicas.",
  "Outros casos bucomaxilofaciais: avaliar sisos, lesões e tumores benignos dos maxilares e da face.",
];

const professionalCredentials = [
  "Mestre e doutor pela UNICAMP, com pós-doutorado no Hospital 12 de Octubre, em Madri.",
  "Professor titular da UFRN e chefe do Serviço de Cirurgia Buco-Maxilo-Facial do HUOL.",
  "Certificado pelo Board do Colégio Brasileiro e membro da banca de examinadores em 2026.",
];

/** Responsabilidades combinadas entre os profissionais em cada plano. */
const scope = {
  mine: [
    "Avaliação bucomaxilofacial e discussão da indicação com o encaminhador.",
    "Planejamento e execução da etapa cirúrgica, quando indicada.",
    "Acompanhamento pós-operatório e orientação dos cuidados dessa etapa.",
    "Comunicação dos achados e das condições para prosseguir com o tratamento.",
  ],
  yours: [
    "Reabilitação protética ou condução ortodôntica, conforme sua participação no plano.",
    "Acompanhamento clínico e preventivo de rotina.",
    "Próximas etapas do tratamento, alinhadas aos achados e à recuperação do paciente.",
  ],
};

/** O canal e os marcos da devolutiva são combinados no primeiro contato. */
const handback = [
  {
    title: "O que é comunicado",
    text: "Achados, conduta proposta ou realizada, cuidados necessários e orientação para a próxima etapa do plano.",
  },
  {
    title: "Quando",
    text: "Após a avaliação e ao fim da etapa cirúrgica, quando realizada. Os marcos são combinados conforme o caso.",
  },
  {
    title: "Por qual canal",
    text: "Pelo canal profissional combinado, adequado ao compartilhamento das informações clínicas.",
  },
];

const flow: Array<{ title: string; text: string; icon: typeof Send }> = [
  {
    title: "Apresente a dúvida clínica",
    text: "Informe o motivo do contato. A equipe orienta como compartilhar a documentação do tratamento em andamento.",
    icon: MessageSquareText,
  },
  {
    title: "Alinhe a etapa especializada",
    text: "Discuta os objetivos do encaminhamento e a participação de cada profissional.",
    icon: FileCheck2,
  },
  {
    title: "Integre os achados ao plano",
    text: "A avaliação orienta a conduta. Se houver indicação cirúrgica, ela entra na sequência do planejamento.",
    icon: Send,
  },
  {
    title: "Combine a continuidade",
    text: "Alinhe a devolutiva, os cuidados e o momento de seguir com as próximas etapas.",
    icon: RotateCcw,
  },
];

/** Dúvidas residuais: escopo e devolutiva já estão abertos acima. */
const professionalFaqs = [
  {
    question: "Posso discutir um caso antes de encaminhar?",
    answer:
      "Sim. O primeiro contato pode ser para esclarecer a dúvida e orientar o encaminhamento. Não é necessário chegar com uma conduta fechada; a avaliação do paciente poderá ser necessária para defini-la.",
  },
  {
    question: "E se os achados mudarem a conduta?",
    answer:
      "Novos achados podem exigir revisão do plano. A comunicação entre os profissionais ajuda a alinhar as mudanças e as orientações ao paciente, considerando as condições clínicas e a segurança do atendimento.",
  },
  {
    question: "Como fica a parte financeira?",
    answer:
      "A equipe informa o valor da avaliação e esclarece como serão apresentados os custos de eventuais procedimentos. Essas informações devem estar claras para o paciente antes da decisão sobre o atendimento.",
  },
  {
    question: "Que informações ajudam no primeiro contato?",
    answer:
      "Uma síntese do motivo do encaminhamento, o que já foi realizado e os exames disponíveis. Evite enviar dados que identifiquem o paciente por canais abertos.",
  },
];

/**
 * Sete blocos. A autoridade técnica sobe para logo depois das situações
 * clínicas: o colega decide pela formação antes de se preocupar com o
 * processo. Escopo e devolutiva entram na mesma seção porque respondem à mesma
 * insegurança — o que acontece com o paciente dele e com a participação dele
 * no caso.
 */
export default function ParaDentistasPage() {
  return (
    <>
      <JsonLd data={faqSchema(professionalFaqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Para dentistas", path: "/para-dentistas" },
        ])}
      />

      <main data-rota="para-dentistas">
        <section className="dentist-hero section-soft-edge photo-hero">
          <HeroBackdrop page="para-dentistas" />
          <div className="container dentist-hero-grid">
            <div className="hero-photo-copy page-enter">
              <span className="eyebrow">Canal profissional</span>
              <h1>
                Quando um caso pede avaliação bucomaxilofacial,{" "}
                <span className="mark-accent">o cuidado precisa continuar integrado.</span>
              </h1>
              <p>
                Dentistas, ortodontistas e médicos podem discutir indicação,
                responsabilidades e sequência do tratamento com o Dr. Adriano
                Rocha Germano. Atendimento em João Pessoa e Natal.
              </p>

              <ul className="hero-badges">
                <li>
                  <Check size={13} aria-hidden="true" />
                  Discussão de casos
                </li>
                <li>
                  <Check size={13} aria-hidden="true" />
                  Planejamento conjunto
                </li>
                <li>
                  <Check size={13} aria-hidden="true" />
                  Continuidade do acompanhamento
                </li>
              </ul>

              <div className="hero-actions">
                <WhatsAppButton
                  ctaId="cta-hero-whatsapp"
                  message={whatsappMessage}
                  label="Discutir um caso"
                  className="button-whatsapp-solid"
                />
                <Link
                  id="cta-hero-formulario"
                  data-cta="cta-hero-formulario"
                  className="button button-secondary button-motion"
                  href={process.env.FORM_WEBHOOK_URL ? "#contato" : "#fluxo"}
                >
                  <ButtonContent>{process.env.FORM_WEBHOOK_URL ? "Solicitar retorno profissional" : "Ver como encaminhar"}</ButtonContent>
                </Link>
              </div>

              <div className="clinical-note">
                <CircleHelp size={19} aria-hidden="true" />
                <span>
                  Não envie por canais abertos dados que identifiquem o paciente.
                </span>
              </div>
            </div>

            <DoctorPortrait />
          </div>
        </section>

        <TrustMarquee items={[
          "Professor titular · UFRN",
          "Chefe do serviço · HUOL",
          "Presidente do Colégio Brasileiro · 2023–2024",
          "Banca de examinadores do Board · 2026",
        ]} />

        {/* 2 — quando faz sentido conversar: as situações e os tipos de caso
            no mesmo bloco, porque respondem juntos a "isso é para mim?". */}
        <section className="section section-white pain-section">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">Quando conversar</span>
              <h2>O tratamento chegou a uma etapa que precisa de outra especialidade.</h2>
            </div>

            <PainList items={painItems} />

            <aside className="consequence-panel">
              <span className="consequence-icon" aria-hidden="true">
                <Clock8 size={20} />
              </span>
              <div>
                <strong>Clareza para orientar a próxima etapa</strong>
                <p>
                  O contato pode começar pela dúvida clínica. A avaliação
                  especializada ajuda a organizar a conduta e não pressupõe
                  indicação cirúrgica.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <SectionWave to="var(--navy-800)" />

        {/* 3 — autoridade técnica, em registro de colega: formação e banca
            antes de qualquer explicação de processo. */}
        <section className="section section-mist method-section" id="formacao">
          <div className="container method-grid">
            <div className="method-copy">
              <span className="section-kicker">Com quem discutir o caso</span>
              <h2>{siteConfig.fullName}</h2>
              <p className="authority-role">
                {siteConfig.specialty} · {siteConfig.registry}
              </p>
              <ul className="method-points">
                {professionalCredentials.map((credential) => (
                  <li key={credential}>
                    <BadgeCheck size={16} aria-hidden="true" />
                    {credential}
                  </li>
                ))}
              </ul>
              {/* Para o colega, a prova mais forte não é o título — é ter
                  formado outros cirurgiões e montado os serviços onde os
                  casos complexos da região são tratados. */}
              <p>
                Fundou o serviço e a residência de Cirurgia Buco-Maxilo-Facial
                do HUOL e coordena o serviço para crianças com anomalias
                bucomaxilofaciais no Hospital Infantil Varela Santiago.
              </p>
              <p className="authority-links">
                <a className="text-link" href={siteConfig.boardCertificate} target="_blank" rel="noopener noreferrer">
                  Ver certificado do Board (2026)
                </a>
                <Link className="text-link" href="/sobre">
                  Formação completa <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </p>
            </div>

            <DoctorPortrait variant="authority" />
          </div>
        </section>

        <SectionWave from="var(--navy-800)" to="var(--sand-100)" flip />

        {/* 4 — escopo e devolutiva. A insegurança é uma só: o que acontece com
            o paciente dele e com a participação dele no caso. */}
        <section className="section journey-section" id="escopo">
          <div className="container">
            <div className="section-heading centered-heading">
              <span className="pill-badge">Escopo e devolutiva</span>
              <h2>Responsabilidades claras em cada etapa do cuidado.</h2>
              <p>A participação de cada profissional é combinada conforme o caso e o plano em andamento.</p>
            </div>

            <div className="scope-grid">
              <article>
                <h3>O que o Dr. Adriano conduz</h3>
                <ul className="case-list">
                  {scope.mine.map((item) => (
                    <li key={item}>
                      <Check size={17} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
              <article>
                <h3>O que segue com o encaminhador</h3>
                <ul className="case-list">
                  {scope.yours.map((item) => (
                    <li key={item}>
                      <Check size={17} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </div>

            <div className="handback">
              <h3>Como a devolutiva é combinada</h3>
              <div className="editorial-support-grid">
              <MediaPlaceholder kind="doctor-planning" />
              <dl className="open-questions">
                {handback.map((item) => (
                  <div key={item.title}>
                    <dt>{item.title}</dt>
                    <dd>{item.text}</dd>
                  </div>
                ))}
              </dl>
              </div>
            </div>

          </div>
        </section>

        {/* 5 — fluxo. */}
        <section className="section consultation-section" id="fluxo">
          <div className="container">
            <div className="section-heading centered-heading">
              <span className="pill-badge">O fluxo</span>
              <h2>Da dúvida clínica à continuidade do tratamento.</h2>
            </div>

            <ol className="flow-grid">
              {flow.map((step, index) => {
                const StepIcon = step.icon;

                return (
                  <li key={step.title}>
                    <span className="flow-index" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="consultation-icon" aria-hidden="true">
                      <StepIcon size={22} />
                    </span>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </li>
                );
              })}
            </ol>

            <div className="professional-next-step">
              <WhatsAppButton
                ctaId="cta-fluxo-whatsapp"
                message={whatsappMessage}
                label="Discutir indicação e sequência do caso"
                className="button-whatsapp-solid"
              />
              <p>A equipe orienta o primeiro contato e o canal para compartilhar a documentação.</p>
            </div>
          </div>
        </section>

        {/* 6 — espaço reservado para relatos reais de colegas. */}
          <section className="section reviews-section" id="colegas">
            <div className="container">
              {colleagueReviews.length ? <Reviews
                items={colleagueReviews}
                title="O que dizem os profissionais que encaminham"
              /> : <MediaPlaceholder kind="reviews-colleagues" className="reviews-media-reserved" />}
            </div>
          </section>

        {/* 7 — dúvidas residuais e contato, juntos. */}
        <section className="section contact-section" id="contato">
          <div className="container">
            <div className="closing-copy">
              <h2>Qual etapa do seu caso precisa ser esclarecida?</h2>
              <p>
                Comece pela dúvida que está impedindo o plano de avançar.
                O primeiro contato ajuda a organizar o encaminhamento e as
                informações necessárias para a avaliação.
              </p>
              <WhatsAppButton
                ctaId="cta-final-whatsapp"
                message={whatsappMessage}
                label="Falar com a equipe sobre um encaminhamento"
                className="button-whatsapp-solid"
              />
            </div>

            <ContactForm
              page="para-dentistas"
              variant="professional"
              available={Boolean(process.env.FORM_WEBHOOK_URL)}
              eyebrow="Canal profissional"
              title="Solicite um retorno profissional."
              description="Informe seu contato, área de atuação e o objetivo da conversa. A documentação clínica é compartilhada depois, pelo canal orientado pela equipe."
            />

            <div className="closing-faq" id="duvidas-profissionais">
              <h2>Dúvidas antes do primeiro encaminhamento.</h2>
              <FaqAccordion items={professionalFaqs} />
            </div>

            <p className="closing-dentist">
              <Handshake size={16} aria-hidden="true" />
              As informações clínicas detalhadas são discutidas em canal
              adequado, nunca por mensagem aberta.
            </p>
          </div>
        </section>
      </main>

      <FloatingWhatsApp message={whatsappMessage} />
    </>
  );
}
