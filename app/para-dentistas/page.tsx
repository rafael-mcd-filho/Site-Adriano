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
import { ObjectionList } from "@/components/objection-list";
import { PainList } from "@/components/pain-list";
import { Reviews } from "@/components/reviews";
import { SectionWave } from "@/components/section-wave";
import { TrustMarquee } from "@/components/trust-marquee";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { colleagueReviews } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { credentialFacts, siteConfig } from "@/lib/site";

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

/**
 * Dúvidas do profissional que precisa integrar a etapa especializada.
 *
 * Não são só dentistas: o estudo do sono que aponta componente esquelético
 * chega pelo médico, e a página endereçava apenas o consultório odontológico.
 */
const painItems = [
  "A reabilitação depende de uma avaliação óssea antes de avançar.",
  "A dúvida sobre a ATM persiste e você precisa discutir a conduta.",
  "O plano ortodôntico exige alinhar a participação da cirurgia.",
  "O estudo do sono sugere componente esquelético e falta avaliar a face.",
  "Você precisa esclarecer a indicação antes de orientar o paciente.",
];

/**
 * O escopo declarado pelo próprio cirurgião.
 *
 * A lista cobria só as cinco rotas do site, e o site tem cinco rotas porque
 * são as cinco com captação ativa — não porque sejam tudo o que ele faz. Para
 * o colega que procura alguém capaz de conduzir um caso específico, a rota
 * publicada não é a fronteira da competência: retalho microcirúrgico e tumor
 * benigno são justamente os casos que um clínico não resolve sozinho e
 * precisa saber a quem mandar.
 */
const cases = [
  "Implantes complexos e reconstrução óssea.",
  "Reconstrução maxilofacial avançada, incluindo retalhos microcirúrgicos.",
  "Implantes faciais e reabilitação de áreas da face.",
  "Cirurgia e prótese de articulação temporomandibular.",
  "Cirurgia ortognática em conjunto com a sua ortodontia.",
  "Tumores benignos dos maxilares e da face.",
  "Avaliação de apneia com componente esquelético.",
  "Casos buco-maxilo-faciais que pedem discussão antes da conduta.",
];

/**
 * Escopo, em duas colunas explícitas.
 *
 * O que mais tranquiliza um clínico não é o que o cirurgião faz — é o que ele
 * NÃO faz. Isso estava implícito em "planejamento com seu dentista", e
 * implícito não tranquiliza ninguém que teme perder o paciente.
 */
const scope = {
  mine: [
    "Avaliação buco-maxilo-facial e definição da indicação cirúrgica.",
    "Reconstrução óssea e a etapa cirúrgica dos implantes, dentários e faciais.",
    "Reconstrução avançada, incluindo técnicas microcirúrgicas.",
    "Procedimentos na ATM, dos minimamente invasivos à prótese articular.",
    "Cirurgia ortognática e o acompanhamento pós-operatório dela.",
    "Remoção de tumores benignos dos maxilares e da face.",
  ],
  yours: [
    "A reabilitação protética e a escolha da prótese.",
    "A condução ortodôntica, antes e depois da etapa cirúrgica.",
    "O acompanhamento clínico e preventivo de rotina.",
    "A relação com o paciente, que continua sendo sua.",
  ],
};

/**
 * Devolutiva descrita como PROCESSO, não como promessa.
 *
 * A frase "seu paciente continua sendo seu" foi removida numa revisão
 * anterior, com razão: era um compromisso sobre comportamento futuro que o
 * site não pode garantir. O que ocupa o lugar dela não é outra promessa — é o
 * que efetivamente se combina, que o colega pode conferir na primeira conversa.
 */
const handback = [
  {
    title: "O que é comunicado",
    text: "Os achados da avaliação, a conduta proposta ou realizada, os cuidados necessários e a orientação para a etapa seguinte do seu plano.",
  },
  {
    title: "Quando",
    text: "Depois da avaliação, e novamente ao fim da etapa cirúrgica. Prazos e marcos são combinados no primeiro contato, conforme o caso.",
  },
  {
    title: "Por qual canal",
    text: "Pelo canal profissional combinado entre os dois. Dados que identifiquem o paciente não circulam por canais abertos.",
  },
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
                A etapa cirúrgica precisa avançar.{" "}
                <span className="mark-accent">O cuidado precisa continuar.</span>
              </h1>
              <p>
                Seu paciente tem um plano em andamento e uma questão que pede
                avaliação especializada. Dentistas, ortodontistas e médicos
                discutem indicação, escopo e continuidade do cuidado com o
                Dr. Adriano Rocha Germano, cirurgião bucomaxilofacial com
                consultórios em João Pessoa e Natal.
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

        <TrustMarquee items={credentialFacts} />

        {/* 2 — quando faz sentido conversar: as situações e os tipos de caso
            no mesmo bloco, porque respondem juntos a "isso é para mim?". */}
        <section className="section section-white pain-section">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">Quando conversar</span>
              <h2>O tratamento chegou a uma etapa que precisa de outra especialidade.</h2>
            </div>

            <PainList items={painItems} />

            <div className="case-block">
              <h3>Os casos que costumam chegar aqui</h3>
              <ul className="case-list">
                {cases.map((item) => (
                  <li key={item}>
                    <Check size={17} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

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
                {siteConfig.credentials.map((credential) => (
                  <li key={credential}>
                    <BadgeCheck size={16} aria-hidden="true" />
                    {credential}
                  </li>
                ))}
              </ul>
              <p>{siteConfig.boardContext}</p>
              {/* Para o colega, a prova mais forte não é o título — é ter
                  formado outros cirurgiões e montado os serviços onde os
                  casos complexos da região são tratados. */}
              <p>
                Fundou o Serviço de Cirurgia e Traumatologia Buco-Maxilo-Facial
                e o programa de residência do Hospital Universitário Onofre
                Lopes, onde é chefe do serviço, e coordena o atendimento de
                crianças com anomalias bucomaxilofaciais — incluindo pacientes
                fissurados e sindrômicos — no Hospital Infantil Varela Santiago.
              </p>
              <p>
                O histórico, os exames e o objetivo do encaminhamento dão
                contexto à avaliação. Esse diálogo aproxima a etapa
                especializada do plano restaurador, ortodôntico ou clínico que
                o paciente já segue.
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
              <h2>O que eu conduzo, o que continua com você.</h2>
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
                <h3>O que permanece com você</h3>
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

            <div className="objections-inline">
              <h3>O que precisa ficar claro entre os profissionais</h3>
              <ObjectionList items={objections} />
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
          </div>
        </section>

        {/* 6 — confiança entre colegas. Relato de colega não envolve dado de
            saúde e é a prova mais eficiente desta página. Sem material
            autorizado, não renderiza. */}
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
