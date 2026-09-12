import type { Metadata } from "next";
import {
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
import { FaqSection } from "@/components/faq-section";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { JsonLd } from "@/components/json-ld";
import { SectionWave } from "@/components/section-wave";
import { TrustMarquee } from "@/components/trust-marquee";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Encaminhamento para Cirurgia Buco-Maxilo-Facial",
  socialTitle: "Para dentistas | Dr. Adriano",
  description:
    "Discuta indicação, etapa cirúrgica e continuidade do cuidado com o Dr. Adriano Rocha Germano. Encaminhamento buco-maxilo-facial em João Pessoa.",
  path: "/para-dentistas",
  ogSlug: "para-dentistas",
});

const whatsappMessage =
  "Olá, sou dentista em João Pessoa e gostaria de conversar sobre um caso para encaminhamento.";

/** Dúvidas do profissional que precisa integrar a etapa especializada. */
const painItems = [
  "A reabilitação depende de uma avaliação óssea antes de avançar.",
  "A dúvida sobre a ATM persiste e você precisa discutir a conduta.",
  "O plano ortodôntico exige alinhar a participação da cirurgia.",
  "Você precisa esclarecer a indicação antes de orientar o paciente.",
];

/** Objeções reais ao encaminhamento, sem prometer controle sobre o paciente. */
const objections = [
  {
    belief: "Preciso ter a indicação cirúrgica definida?",
    reality:
      "A dúvida clínica pode ser o motivo do contato. Apresente a hipótese, o que já foi realizado e o que precisa ser esclarecido antes de seguir.",
  },
  {
    belief: "Como a etapa especializada entra no meu plano?",
    reality:
      "O planejamento considera o tratamento em andamento, os objetivos da etapa especializada e a sequência do acompanhamento. Esse alinhamento ajuda a orientar o paciente com mais clareza.",
  },
  {
    belief: "E se a avaliação apontar outro caminho?",
    reality:
      "Encaminhar para avaliação não pressupõe operar. Os achados podem indicar novas investigações, cuidado conservador ou uma revisão conjunta da sequência proposta.",
  },
];

const cases = [
  "Implantes complexos e reconstrução óssea.",
  "Cirurgia e prótese de articulação temporomandibular.",
  "Cirurgia ortognática em conjunto com a sua ortodontia.",
  "Avaliação de apneia com componente esquelético.",
  "Casos buco-maxilo-faciais que pedem discussão antes da conduta.",
];

const flow: Array<{ title: string; text: string; icon: typeof Send }> = [
  {
    title: "Apresente a dúvida clínica",
    text: "Comece pelo motivo do contato e pelo tratamento em andamento. A equipe orienta como compartilhar a documentação do caso.",
    icon: MessageSquareText,
  },
  {
    title: "Alinhe a etapa especializada",
    text: "Discuta o que precisa ser avaliado, os objetivos do encaminhamento e a participação de cada profissional.",
    icon: FileCheck2,
  },
  {
    title: "Integre os achados ao plano",
    text: "A avaliação ajuda a definir a conduta e a sequência possível. Se houver indicação cirúrgica, ela passa a fazer parte desse planejamento.",
    icon: Send,
  },
  {
    title: "Combine a continuidade",
    text: "Alinhe as informações de retorno, os cuidados necessários e o momento de seguir com as próximas etapas do tratamento.",
    icon: RotateCcw,
  },
];

const professionalFaqs = [
  {
    question: "Como fica o acompanhamento que já realizo?",
    answer:
      "O encaminhamento leva em conta o tratamento que você já conduz. No contato profissional, apresente o plano em andamento para alinhar a participação especializada e a continuidade do acompanhamento. O paciente participa das decisões sobre o próprio cuidado.",
  },
  {
    question: "E se os achados mudarem a conduta?",
    answer:
      "Novos achados podem exigir revisão do plano. A comunicação entre os profissionais ajuda a alinhar as mudanças e as orientações ao paciente, considerando as condições clínicas e a segurança do atendimento.",
  },
  {
    question: "Quais informações de retorno devo combinar?",
    answer:
      "Vale alinhar desde o encaminhamento os achados da avaliação, a conduta proposta ou realizada, os cuidados necessários e a orientação para a etapa seguinte. Combine também como essas informações serão compartilhadas.",
  },
  {
    question: "Posso discutir um caso antes de encaminhar?",
    answer:
      "Sim. O primeiro contato pode ser para esclarecer a dúvida e orientar o encaminhamento. Não é necessário chegar com uma conduta fechada; a avaliação do paciente poderá ser necessária para defini-la.",
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
        <section className="dentist-hero section-soft-edge">
          <div className="container dentist-hero-grid">
            <div className="page-enter">
              <span className="eyebrow">Canal profissional</span>
              <h1>
                A etapa cirúrgica precisa avançar.{" "}
                <span className="mark-accent">O cuidado precisa continuar.</span>
              </h1>
              <p>
                Seu paciente tem um plano em andamento e uma questão que pede
                avaliação especializada. Discuta indicação, escopo e
                continuidade do cuidado com o Dr. Adriano Rocha Germano,
                cirurgião bucomaxilofacial em João Pessoa.
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
                  href="#contato"
                >
                  <ButtonContent>Deixar meu contato</ButtonContent>
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

        <TrustMarquee
          items={[
            "Discussão de casos",
            "Planejamento conjunto",
            "Informações de retorno alinhadas",
            "Continuidade do acompanhamento",
          ]}
        />

        <section className="section section-white pain-section">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">Quando conversar</span>
              <h2>O tratamento chegou a uma etapa que precisa de outra especialidade.</h2>
            </div>

            <ul className="pain-list">
              {painItems.map((item) => (
                <li className="pain-item stagger-card" key={item}>
                  <span className="pain-mark" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <aside className="consequence-panel">
              <span className="consequence-icon" aria-hidden="true">
                <Clock8 size={20} />
              </span>
              <div>
                <strong>Clareza para orientar a próxima etapa</strong>
                <p>
                  Quando a dúvida clínica fica sem resposta, é difícil
                  explicar ao paciente o que vem a seguir. Uma discussão do
                  caso ajuda a organizar a investigação e a sequência do
                  tratamento.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="section objections-section">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">Antes do encaminhamento</span>
              <h2>O que precisa ficar claro entre os profissionais.</h2>
            </div>

            <ol className="objection-list">
              {objections.map((item, index) => (
                <li key={item.belief}>
                  <span className="objection-index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <strong>{item.belief}</strong>
                    <p>{item.reality}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <SectionWave />
        <section className="section section-mist method-section">
          <div className="container professional-grid">
            <div>
              <span className="section-kicker">Atuação conjunta</span>
              <h2>A cirurgia faz parte de um cuidado que já começou.</h2>
              <p>
                O histórico, os exames e o objetivo do encaminhamento dão
                contexto à avaliação. Esse diálogo aproxima a etapa
                especializada do plano restaurador, ortodôntico ou clínico
                que o paciente já segue.
              </p>
            </div>
            <ul className="case-list">
              {cases.map((item) => (
                <li key={item}>
                  <Check size={17} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <SectionWave from="var(--navy-800)" to="var(--white)" flip />
        <section className="section authority-section">
          <div className="container authority-grid">
            <DoctorPortrait variant="authority" />
            <div className="authority-copy">
              <span className="section-kicker light">Com quem discutir o caso</span>
              <h2>{siteConfig.fullName}</h2>
              <p className="authority-role">
                {siteConfig.specialty} · {siteConfig.registry}
              </p>
              <ul className="authority-credentials">
                {siteConfig.credentials.map((credential) => (
                  <li key={credential}>
                    <Handshake size={17} aria-hidden="true" />
                    {credential}
                  </li>
                ))}
              </ul>
              <p>
                Atuação em cirurgia buco-maxilo-facial, em {siteConfig.city}.
              </p>
              <p>{siteConfig.boardContext}</p>
              <a className="text-link light-link" href={siteConfig.boardCertificate} target="_blank" rel="noopener noreferrer">
                Ver certificado do Board (2026)
              </a>
            </div>
          </div>
        </section>

        <section className="section consultation-section">
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
          </div>
        </section>

        <FaqSection
          items={professionalFaqs}
          badge="Dúvidas profissionais"
          title="Dúvidas antes do primeiro encaminhamento."
          subtitle="As informações clínicas detalhadas são discutidas em canal adequado."
          footText="Quer conversar sobre um possível encaminhamento?"
          ctaId="cta-duvidas-dentistas-whatsapp"
          whatsappMessage={whatsappMessage}
          whatsappLabel="Discutir um caso"
          id="duvidas-profissionais"
        />

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
                label="Discutir um caso"
                className="button-whatsapp-solid"
              />
            </div>

            <ContactForm
              page="para-dentistas"
              available={Boolean(process.env.FORM_WEBHOOK_URL)}
              eyebrow="Canal profissional"
              title="Inicie uma conversa sobre o caso."
              description="Informe seu nome, WhatsApp e o objetivo do contato. Não envie dados identificáveis do paciente pelo formulário."
            />
          </div>
        </section>
      </main>

      <FloatingWhatsApp message={whatsappMessage} />
    </>
  );
}
