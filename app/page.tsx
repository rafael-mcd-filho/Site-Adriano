import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  BedDouble,
  Bone,
  ChevronRight,
  CircleDotDashed,
  ClipboardCheck,
  ClipboardList,
  Clock3,
  Handshake,
  MapPin,
  MessageSquareText,
  ScanFace,
  ScanSearch,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import Link from "next/link";
import { ButtonContent } from "@/components/button-content";
import { ContactForm } from "@/components/contact-form";
import { ExitIntent } from "@/components/exit-intent";
import { JsonLd } from "@/components/json-ld";
import { VisualMotif } from "@/components/visual-motif";
import { FloatingWhatsApp, WhatsAppButton } from "@/components/whatsapp-button";
import { homeFormOptions } from "@/lib/content";
import { faqSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

const trustItems: Array<{ icon: LucideIcon; label: string; value: string }> = [
  { icon: BadgeCheck, label: "Especialidade", value: "Buco-Maxilo-Facial" },
  {
    icon: ClipboardCheck,
    label: "Registro demonstrativo",
    value: siteConfig.registry,
  },
  { icon: Clock3, label: "Contato da equipe", value: "Horário comercial" },
  { icon: MapPin, label: "Localização", value: siteConfig.city },
];

function TrustCell({ item }: { item: (typeof trustItems)[number] }) {
  const Icon = item.icon;

  return (
    <>
      <Icon aria-hidden="true" />
      <span>
        <small>{item.label}</small>
        {item.value}
      </span>
    </>
  );
}

/**
 * São cinco áreas paralelas, não etapas. Numerá-las (01…05) sugeria uma ordem
 * que não existe — o ícone já diferencia cada card.
 */
const areas: Array<{
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}> = [
  {
    title: "Apneia do sono",
    description: "Avaliação de fatores faciais e estruturais relacionados à respiração.",
    href: "/apneia-do-sono",
    icon: BedDouble,
  },
  {
    title: "Implantes dentários",
    description: "Planejamento que conecta estrutura, posição e futura reabilitação.",
    href: "/implantes-dentarios",
    icon: CircleDotDashed,
  },
  {
    title: "Reconstrução óssea",
    description: "Novas possibilidades para casos com perda óssea importante.",
    href: "/reconstrucao-ossea",
    icon: Bone,
  },
  {
    title: "DTM e ATM",
    description: "Diagnóstico e cuidado conservador ou cirúrgico conforme o caso.",
    href: "/dtm-atm",
    icon: Activity,
  },
  {
    title: "Cirurgia ortognática",
    description: "Função, equilíbrio facial e planejamento integrado à ortodontia.",
    href: "/cirurgia-ortognatica",
    icon: ScanFace,
  },
];

/** Cada etapa ganha o próprio ícone: quatro vezes o mesmo era decoração. */
const homeProcess: Array<[string, string, LucideIcon]> = [
  ["Escuta", "Histórico, queixas, tratamentos anteriores e objetivos.", MessageSquareText],
  ["Avaliação", "Exame clínico e análise do impacto funcional.", Stethoscope],
  ["Exames", "Solicitados ou revisados somente quando necessários.", ScanSearch],
  ["Orientação", "Possibilidades, limites e sequência explicados com clareza.", ClipboardList],
];

const homeFaqs = [
  {
    question: "O que trata um cirurgião buco-maxilo-facial?",
    answer:
      "O especialista avalia e trata alterações dos maxilares, face, articulação temporomandibular e estruturas relacionadas, incluindo casos funcionais, traumáticos e reconstrutivos.",
  },
  {
    question: "Toda avaliação resulta em cirurgia?",
    answer:
      "Não. A avaliação serve para compreender o caso e definir possibilidades. Em DTM e ATM, por exemplo, o cuidado conservador pode fazer parte do plano.",
  },
  {
    question: "É necessário encaminhamento de outro dentista?",
    answer:
      "Nem sempre. O paciente pode solicitar uma avaliação diretamente. Quando já existe acompanhamento, a comunicação entre profissionais ajuda a integrar o cuidado.",
  },
  {
    question: "Quais exames devo levar?",
    answer:
      "Leve exames, relatórios e informações de tratamentos anteriores que já possuir. Depois da avaliação, outros exames podem ser solicitados se forem realmente necessários.",
  },
  {
    question: "O atendimento é por convênio?",
    answer:
      "O atendimento é particular. A equipe explica o fluxo de avaliação quando responder à solicitação de contato.",
  },
  {
    question: "O formulário confirma um horário?",
    answer:
      "Não. O formulário envia uma solicitação para a equipe, que entra em contato pelo WhatsApp em horário comercial.",
  },
];

export default function Home() {
  const whatsappMessage =
    "Olá, gostaria de saber como funciona uma avaliação com o Dr. Adriano.";

  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />

      <main>
        <section className="home-hero section-soft-edge">
          <div className="container home-hero-grid">
            <div className="home-hero-copy page-enter">
              <span className="eyebrow">Cirurgia Buco-Maxilo-Facial · João Pessoa</span>
              <h1>
                Antes de decidir pela cirurgia, é preciso{" "}
                <span className="mark-accent">entender o caso por inteiro</span>.
              </h1>
              <p>
                Avaliação especializada para alterações da face, dos maxilares e
                da articulação temporomandibular, com diagnóstico, planejamento e
                uma indicação construída com cuidado.
              </p>
              <div className="hero-actions">
                <Link
                  id="cta-hero-formulario"
                  data-cta="cta-hero-formulario"
                  className="button button-motion"
                  href="#contato"
                >
                  <ButtonContent>Solicitar uma avaliação</ButtonContent>
                </Link>
                <WhatsAppButton ctaId="cta-hero-whatsapp" message={whatsappMessage} />
              </div>
              <div className="hero-proof">
                <span>
                  <ShieldCheck size={17} aria-hidden="true" />
                  Atendimento particular
                </span>
                <span>
                  <MapPin size={17} aria-hidden="true" />
                  João Pessoa, PB
                </span>
              </div>
            </div>

            <VisualMotif type="planning" label="Diagnóstico · Plano · Decisão" />
          </div>
        </section>

        <section className="trust-strip">
          <div className="container">
            <div className="trust-viewport">
              <div className="trust-grid">
                {trustItems.map((item) => (
                  <div key={item.label}>
                    <TrustCell item={item} />
                  </div>
                ))}
                {trustItems.map((item) => (
                  <div className="trust-clone" key={"clone-" + item.label} aria-hidden="true">
                    <TrustCell item={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section intro-section">
          <div className="container intro-grid">
            <div>
              <span className="section-kicker">Quando procurar</span>
              <h2>Funções do dia a dia podem revelar que algo precisa ser investigado.</h2>
            </div>
            <div className="intro-copy">
              <p>
                Mastigação, respiração, abertura da boca e encaixe da mordida
                dependem de estruturas que trabalham em conjunto.
              </p>
              <p>
                A avaliação individual organiza sintomas, exames e histórico para
                definir{" "}
                <span className="mark-soft">
                  se existe necessidade de tratamento
                </span>{" "}
                e qual especialidade deve participar.
              </p>
            </div>
          </div>
        </section>

        <section className="section areas-section" id="areas">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <span className="section-kicker">Áreas de atuação</span>
                <h2>Conhecimento especializado para diferentes pontos da jornada.</h2>
              </div>
              <p>
                Cada página explica sinais, avaliação, etapas e limites sem
                transformar informação em diagnóstico.
              </p>
            </div>

            <div className="areas-grid">
              {areas.map((area) => {
                const Icon = area.icon;

                return (
                  <Link className="area-card stagger-card" href={area.href} key={area.href}>
                    <Icon size={28} strokeWidth={1.6} aria-hidden="true" />
                    <h3>{area.title}</h3>
                    <p>{area.description}</p>
                    <span className="area-link">
                      Entender esta área <ChevronRight size={16} aria-hidden="true" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section about-section section-soft-edge" id="sobre">
          <div className="container about-grid">
            <div className="about-portrait" aria-hidden="true">
              <span className="portrait-initial">A</span>
              <span className="portrait-caption">Retrato profissional a substituir</span>
            </div>
            <div className="about-copy">
              <span className="section-kicker light">Dr. Adriano</span>
              <h2>Autoridade que pode ser verificada. Cuidado que pode ser compreendido.</h2>
              <p>
                A primeira versão utiliza dados demonstrativos. Na versão final,
                formação, títulos e registro serão publicados apenas depois da
                validação documental.
              </p>
              <ul className="credential-list">
                <li>
                  <BadgeCheck size={18} aria-hidden="true" />
                  {siteConfig.specialty}
                </li>
                <li>
                  <ShieldCheck size={18} aria-hidden="true" />
                  {siteConfig.registry} — demonstração
                </li>
                <li>
                  <MapPin size={18} aria-hidden="true" />
                  Atuação em João Pessoa
                </li>
              </ul>
              <Link className="text-link light-link" href="#processo">
                Conhecer o processo <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section className="section process-section" id="processo">
          <div className="container">
            <div className="section-heading centered-heading">
              <span className="section-kicker">Como funciona</span>
              <h2>Uma avaliação que transforma informação em um próximo passo claro.</h2>
              <p>
                <span className="mark-soft">Sem prometer tratamento</span> antes
                de entender o diagnóstico e as condições individuais.
              </p>
            </div>

            <ol className="process-grid">
              {homeProcess.map(([title, text, Icon], index) => {
                const StepIcon = Icon as LucideIcon;

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

            <div className="section-cta">
              <p>Faz sentido para o seu caso?</p>
              <div className="section-cta-actions">
                <Link
                  id="cta-processo-formulario"
                  data-cta="cta-processo-formulario"
                  className="button button-motion"
                  href="#contato"
                >
                  <ButtonContent>Solicitar uma avaliação</ButtonContent>
                </Link>
                <WhatsAppButton
                  ctaId="cta-processo-whatsapp"
                  message={whatsappMessage}
                  label="Tirar uma dúvida"
                  compact
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section referral-preview">
          <div className="container referral-grid">
            <div className="referral-visual" aria-hidden="true">
              <span>Dentista</span>
              <span className="referral-line">→</span>
              <span>Avaliação</span>
              <span className="referral-line return">←</span>
              <span>Continuidade</span>
            </div>
            <div>
              <span className="section-kicker">Para dentistas</span>
              <h2>Seu paciente continua sendo seu.</h2>
              <p>
                Um canal profissional para discutir casos, encaminhar com contexto
                e{" "}
                <span className="mark-soft">
                  manter a comunicação durante a etapa especializada
                </span>
                .
              </p>
              <Link
                id="cta-dentistas-fluxo"
                data-cta="cta-dentistas-fluxo"
                className="button button-secondary"
                href="/para-dentistas"
              >
                Conhecer o fluxo de encaminhamento
                <Handshake size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section className="section location-section">
          <div className="container location-grid">
            <div>
              <span className="section-kicker">Atendimento</span>
              <h2>João Pessoa, com orientação inicial pelo WhatsApp.</h2>
              <p>
                O endereço definitivo será inserido antes da publicação. Hospitais
                onde o profissional atua não serão divulgados no site.
              </p>
            </div>
            <div className="location-card">
              <MapPin aria-hidden="true" />
              <span>
                <small>Localização</small>
                {siteConfig.address}
              </span>
              <Clock3 aria-hidden="true" />
              <span>
                <small>Equipe</small>
                {siteConfig.hours}
              </span>
            </div>
          </div>
        </section>

        <section className="section faq-section" id="duvidas">
          <div className="container faq-grid">
            <div className="faq-heading">
              <span className="section-kicker">Dúvidas frequentes</span>
              <h2>Informação antes da decisão.</h2>
              <p>
                Respostas objetivas para reduzir incerteza sem substituir a
                consulta.
              </p>

              <div className="faq-aside">
                <strong>Sua dúvida não está aqui?</strong>
                <p>
                  A equipe responde pelo WhatsApp em horário comercial.
                </p>
                <WhatsAppButton
                  ctaId="cta-duvidas-whatsapp"
                  message="Olá, tenho uma dúvida que não encontrei no site."
                  label="Perguntar pelo WhatsApp"
                  compact
                />
              </div>
            </div>
            <div className="faq-list">
              {homeFaqs.map((faq) => (
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
              page="home"
              question="Sobre qual assunto você deseja conversar?"
              options={homeFormOptions}
            />
          </div>
        </section>
      </main>

      <FloatingWhatsApp message={whatsappMessage} />
      <ExitIntent message="Olá, estava no site e fiquei com uma dúvida." />
    </>
  );
}

