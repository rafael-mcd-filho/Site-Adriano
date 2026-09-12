import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronRight,
  Handshake,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { AudienceCards } from "@/components/audience-cards";
import { ButtonContent } from "@/components/button-content";
import { ContactForm } from "@/components/contact-form";
import { DoctorPortrait } from "@/components/doctor-portrait";
import { EditorialStory } from "@/components/editorial-story";
import { FaqAccordion } from "@/components/faq-accordion";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { JsonLd } from "@/components/json-ld";
import { LocationSection } from "@/components/location-section";
import { MotifThumb } from "@/components/motif-thumb";
import { TrustMarquee } from "@/components/trust-marquee";
import { SectionWave } from "@/components/section-wave";
import { SectionBackdrop } from "@/components/section-backdrop";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { treatments } from "@/lib/content";
import { faqSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

/**
 * Título, motivo visual e os três pontos de cada card vêm de `lib/content.ts`.
 * Só a descrição curta e o rótulo de contexto são próprios da home — o resto
 * já é o conteúdo da página de destino e não pode divergir dela.
 *
 * A ordem segue a prioridade do plano de mídia: apneia e reconstrução entram
 * primeiro por não terem concorrente local mapeado.
 */
const areaCards: Array<{
  slug: string;
  badge: string;
  tone: "teal" | "navy";
  description: string;
  action: string;
}> = [
  {
    slug: "apneia-do-sono",
    badge: "Avaliação",
    tone: "teal",
    description:
      "Dormir a noite inteira e acordar sem disposição merece atenção. Entenda quando os maxilares entram na investigação da apneia.",
    action: "Entender o cuidado da apneia",
  },
  {
    slug: "reconstrucao-ossea",
    badge: "Possibilidades",
    tone: "navy",
    description:
      "Ouvir que falta osso pode frustrar o desejo de voltar a mastigar com conforto. Conheça as possibilidades de reconstrução e seus limites.",
    action: "Conhecer minhas possibilidades",
  },
  {
    slug: "cirurgia-atm",
    badge: "Dor e movimento",
    tone: "navy",
    description:
      "Escolher o que comer por medo da dor ou do travamento cansa. Investigue a origem do incômodo e os caminhos de cuidado.",
    action: "Entender minha dor na mandíbula",
  },
  {
    slug: "cirurgia-ortognatica",
    badge: "Função e mordida",
    tone: "navy",
    description:
      "Quando a mordida não encaixa, mastigar pode exigir esforço. Entenda se o seu caso pede aparelho, cirurgia ou cuidado conjunto.",
    action: "Entender se tenho indicação",
  },
  {
    slug: "implantes-dentarios",
    badge: "Planejamento",
    tone: "teal",
    description:
      "A falta de dentes ou a insegurança com a prótese interfere nas refeições e no sorriso? Veja o que avaliar para planejar sua reabilitação.",
    action: "Saber se posso fazer implante",
  },
];

/**
 * Ordem deliberada: as cinco primeiras são as perguntas que travam o
 * agendamento. As clínicas vêm depois — quem chega decidido a marcar não
 * deveria rolar por seis respostas sobre diagnóstico para achar o horário.
 */
const homeFaqs = [
  {
    question: "Como faço para agendar uma avaliação?",
    answer:
      "Pelo WhatsApp ou pelo formulário no fim desta página. A equipe responde em horário comercial, explica como funciona a avaliação e orienta o que levar na primeira consulta.",
  },
  {
    question: "O atendimento é por convênio ou particular?",
    answer:
      "O atendimento é particular, sem convênios. A equipe informa o valor da consulta antes do agendamento. Os custos de um eventual tratamento dependem das etapas propostas após a avaliação e são apresentados antes da sua decisão.",
  },
  {
    question: "Onde acontece o atendimento?",
    answer:
      "Em João Pessoa, PB. Confirme o endereço e as orientações de chegada com a equipe no agendamento.",
  },
  {
    question: "Qual é o horário de atendimento?",
    answer:
      "A equipe responde em horário comercial. Pelo WhatsApp ou formulário, você pode consultar os dias e horários disponíveis para atendimento.",
  },
  {
    question: "Existe avaliação online?",
    answer:
      "A avaliação buco-maxilo-facial depende de exame clínico presencial. Exames de imagem podem ser necessários conforme o caso. O WhatsApp ajuda com agendamento e dúvidas sobre a consulta; não substitui o exame.",
  },
  {
    question: "O que trata um cirurgião buco-maxilo-facial?",
    answer:
      "O especialista cuida de alterações dos maxilares, da face e da articulação da mandíbula. Dor ou travamento ao abrir a boca, dentes ausentes e mordida que não encaixa estão entre os motivos para buscar avaliação. Alguns casos de apneia também podem precisar da participação desse profissional.",
  },
  {
    question: "Toda avaliação resulta em cirurgia?",
    answer:
      "Não. A avaliação serve para compreender as queixas, investigar as causas e discutir possibilidades. Dependendo do diagnóstico, o cuidado pode ser conservador ou envolver outros profissionais. A cirurgia só é considerada quando há indicação.",
  },
  {
    question: "É necessário encaminhamento de outro dentista?",
    answer:
      "Nem sempre. O paciente pode solicitar uma avaliação diretamente. Quando já existe acompanhamento, a comunicação entre profissionais ajuda a integrar o cuidado.",
  },
  {
    question: "O formulário confirma um horário?",
    answer:
      "Não. O formulário envia uma solicitação para a equipe, que entra em contato pelo WhatsApp em horário comercial.",
  },
];

export default function Home() {
  const whatsappMessage =
    "Olá, vim pelo site e gostaria de entender como funciona a avaliação do meu caso.";

  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />

      <main>
        {/* A raiz é onde a identidade profissional completa fica apresentada:
            nome, especialidade e registro visíveis já na primeira dobra. Numa
            marca pessoal o rosto é o ativo de conversão, não uma ilustração. */}
        <section className="home-hero">
          <div className="container home-hero-grid">
            <div className="home-hero-copy page-enter">
              <span className="eyebrow">
                {siteConfig.specialty} · {siteConfig.city}
              </span>
              <h1>
                <span className="hero-name">{siteConfig.fullName}</span>
                Comer, sorrir ou{" "}
                <span className="mark-accent">dormir bem</span> deixou de ser simples?
              </h1>
              <p>
                Você evita certos alimentos, sente a mandíbula doer ou acorda
                sem descansar? Antes de falar em cirurgia, precisamos entender
                o seu caso. Avaliação buco-maxilo-facial em João Pessoa para
                investigar o que limita sua rotina e discutir como cuidar disso.
              </p>

              <ul className="hero-badges">
                <li>
                  <Check size={13} aria-hidden="true" />
                  {siteConfig.registry}
                </li>
                <li>
                  <Check size={13} aria-hidden="true" />
                  Certificação Board (FBCOMS)
                </li>
                <li>
                  <Check size={13} aria-hidden="true" />
                  Atendimento particular
                </li>
              </ul>

              <div className="hero-actions">
                <WhatsAppButton
                  ctaId="cta-hero-whatsapp"
                  message={whatsappMessage}
                  label="Quero entender meu caso"
                  className="button-whatsapp-solid"
                />
                <Link
                  id="cta-hero-areas"
                  data-cta="cta-hero-areas"
                  className="button button-secondary button-motion"
                  href="#areas"
                >
                  <ButtonContent>Encontrar o que me incomoda</ButtonContent>
                </Link>
              </div>

              <div className="hero-proof">
                <span>
                  <ShieldCheck size={17} aria-hidden="true" />
                  Você pode buscar orientação antes de decidir
                </span>
                <span>
                  <MapPin size={17} aria-hidden="true" />
                  {siteConfig.city}
                </span>
              </div>
            </div>

            <DoctorPortrait />
          </div>
        </section>

        <TrustMarquee />

        {/* Sobe da quinta para a segunda posição: o site é dele, e quem chega
            por indicação ou por busca de nome vem verificar quem é. */}
        <section className="section about-section section-soft-edge" id="sobre">
          <div className="container about-grid">
            <DoctorPortrait variant="authority" />
            <div className="about-copy">
              <span className="section-kicker light">Quem conduz a avaliação</span>
              <h2>
                Ser ouvido faz parte de ser bem cuidado.
              </h2>
              <p>
                Talvez você já tenha tentado aliviar o incômodo ou recebido
                opiniões diferentes. A consulta com o Dr. Adriano começa pela
                sua história: o que dói, o que você deixou de fazer e o que
                espera melhorar.
              </p>
              <p>
                A investigação reúne exame clínico e, quando necessários,
                exames complementares. As opções são discutidas com seus
                benefícios, limites e cuidados para que você participe da
                decisão. Se já existe outro profissional acompanhando o caso,
                o planejamento considera esse cuidado.
              </p>
              <ul className="credential-list">
                {siteConfig.credentials.map((credential) => (
                  <li key={credential}>
                    <BadgeCheck size={18} aria-hidden="true" />
                    {credential}
                  </li>
                ))}
              </ul>
              <p>{siteConfig.boardContext}</p>
              <p>
                <a className="text-link light-link" href={siteConfig.boardCertificate} target="_blank" rel="noopener noreferrer">
                  Ver certificado do Board (2026)
                </a>
              </p>
              <Link className="text-link light-link" href="#areas">
                Ver as áreas de atuação <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <SectionWave from="var(--navy-800)" to="var(--white)" flip />
        <section className="section areas-section" id="areas">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <span className="section-kicker">Áreas de atuação</span>
                <h2>O que trouxe você até aqui?</h2>
              </div>
              <p>
                Você não precisa saber o nome do tratamento. Comece pelo que
                incomoda e conheça os caminhos que podem fazer sentido para
                o seu caso.
              </p>
            </div>

            <div className="areas-grid">
              {areaCards.map((card) => {
                const treatment = treatments[card.slug];

                return (
                  <article className="area-card" key={card.slug}>
                    <div className="area-visual" aria-hidden="true">
                      <MotifThumb type={treatment.motif} />
                      <span
                        className={
                          card.tone === "teal"
                            ? "area-badge area-badge-teal"
                            : "area-badge"
                        }
                      >
                        {card.badge}
                      </span>
                    </div>

                    <div className="area-body">
                      <h3>{treatment.navLabel}</h3>
                      <p>{card.description}</p>
                      <ul className="area-cues">
                        {treatment.visualSummary.cues.map((cue) => (
                          <li key={cue}>
                            <Check size={11} aria-hidden="true" />
                            {cue}
                          </li>
                        ))}
                      </ul>
                      <Link className="area-link" href={"/" + treatment.slug}>
                        {card.action}
                        <span className="sr-only"> — {treatment.navLabel}</span>
                        <ChevronRight size={15} aria-hidden="true" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <EditorialStory
          id="sua-rotina"
          title="O que faz falta na sua rotina merece espaço na consulta."
          description="Conte o que você evita, o que já tentou e o que gostaria de retomar. Esse é o ponto de partida para investigar seu caso e conversar sobre as possibilidades de cuidado."
          href="#processo"
        />

        <section className="section audience-section" id="publicos">
          <div className="container">
            <div className="section-heading centered-heading">
              <span className="pill-badge">
                <Handshake size={13} aria-hidden="true" />
                Para quem atendemos
              </span>
              <h2>Uma dúvida sua. Um caso do seu paciente.</h2>
              <p>
                Escolha o caminho para conversar com a equipe, seja para buscar
                cuidado ou discutir um encaminhamento.
              </p>
            </div>

            <AudienceCards />
          </div>
        </section>

        <section className="section consultation-section" id="processo">
          <div className="container">
            <div className="section-heading centered-heading">
              <span className="pill-badge">Como funciona</span>
              <h2>Você não precisa chegar com todas as respostas.</h2>
            </div>
            <div className="consultation-grid">
              <article className="consultation-card">
                <h3>1. Saiba como agendar</h3>
                <p>
                  Fale com a equipe sobre valor, horários e o que levar.
                  Assim, você sabe como se preparar antes de agendar.
                </p>
              </article>
              <article className="consultation-card">
                <h3>2. Conte o que mudou na sua rotina</h3>
                <p>
                  Na consulta, conte o que sente e o que já tentou. O exame
                  clínico e os exames disponíveis ajudam a investigar o caso.
                </p>
              </article>
              <article className="consultation-card">
                <h3>3. Decida com mais clareza</h3>
                <p>
                  Entenda as opções, as etapas e o que ainda precisa ser
                  investigado. A indicação depende do seu caso, inclusive
                  quando o caminho é sem cirurgia.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section faq-section" id="duvidas">
          <SectionBackdrop />
          <div className="container faq-layout">
            <div className="section-heading centered-heading">
              <span className="pill-badge">Dúvidas frequentes</span>
              <h2>As perguntas que costumam vir antes de marcar.</h2>
            </div>

            <FaqAccordion items={homeFaqs} />

            <div className="faq-foot">
              <p>Não encontrou sua dúvida?</p>
              <WhatsAppButton
                ctaId="cta-duvidas-whatsapp"
                message="Olá, tenho uma dúvida que não encontrei no site."
                label="Perguntar pelo WhatsApp"
                className="button-whatsapp-solid"
              />
            </div>
          </div>
        </section>

        <SectionWave to="var(--navy-950)" />
        <section className="section contact-section" id="contato">
          <div className="container">
            <div className="closing-copy">
              <h2>O que você gostaria de voltar a fazer com mais conforto?</h2>
              <p>
                Comer sem receio, sorrir com mais confiança ou descansar melhor:
                na consulta, conte o que faz falta na sua rotina. A avaliação é o primeiro
                passo para entender as possibilidades de cuidado, sem
                compromisso com um procedimento.
              </p>
              <WhatsAppButton
                ctaId="cta-final-whatsapp"
                message={whatsappMessage}
                label="Quero entender meu caso"
                className="button-whatsapp-solid"
              />
            </div>

            <ContactForm
              page="home"
              available={Boolean(process.env.FORM_WEBHOOK_URL)}
              eyebrow="Prefere que a equipe entre em contato?"
              title="Vamos começar pela sua dúvida."
              description="Deixe seu contato para saber como agendar. A equipe responde pelo WhatsApp em horário comercial; os detalhes clínicos ficam para a consulta."
            />
          </div>
        </section>

        <LocationSection />
      </main>

      <FloatingWhatsApp message={whatsappMessage} />
    </>
  );
}
