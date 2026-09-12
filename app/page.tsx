import {
  ArrowRight,
  BadgeCheck,
  Check,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { ButtonContent } from "@/components/button-content";
import { ContactForm } from "@/components/contact-form";
import { DoctorPortrait } from "@/components/doctor-portrait";
import { FaqAccordion } from "@/components/faq-accordion";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { HeroBackdrop } from "@/components/hero-backdrop";
import { JsonLd } from "@/components/json-ld";
import { LocationSection } from "@/components/location-section";
import { MotifThumb, type MotifType } from "@/components/motif-thumb";
import { Reviews } from "@/components/reviews";
import { TrustMarquee } from "@/components/trust-marquee";
import { SectionWave } from "@/components/section-wave";
import { WhatsAppButton } from "@/components/whatsapp-button";
import {
  consultaEncaminhamento,
  consultaParticular,
  ctaLadder,
  patientReviews,
  treatments,
} from "@/lib/content";
import { faqSchema } from "@/lib/schema";
import { credentialFacts, siteConfig } from "@/lib/site";

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
  /** Desenho do card quando o motivo da rota não serve à grade da home. */
  thumb?: MotifType;
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
  {
    slug: "cirurgia-de-siso",
    badge: "Indicação",
    tone: "navy",
    description:
      "Inflamou de novo, entala comida ou apareceu no raio-X? Nem todo siso precisa sair — entenda o que decide a indicação no seu caso.",
    action: "Saber se preciso tirar",
    thumb: "wisdom",
  },
];

/**
 * O que orienta uma decisão.
 *
 * Vive dentro do bloco de quem conduz a avaliação, e não numa seção própria de
 * filosofia: credencial e critério respondem à mesma pergunta — "como esse
 * profissional decide o que fazer?" — e separá-los produzia dois blocos
 * grandes dizendo a mesma coisa em registros diferentes.
 */
const decisionCriteria = [
  {
    title: "Função antes de aparência",
    text: "Mastigar, respirar, falar e se mover sem dor são o que a avaliação procura entender primeiro.",
  },
  {
    title: "Indicação, não protocolo",
    text: "O que vale para um caso não vale para todos. A conduta vem do que o exame e os exames mostram.",
  },
  {
    title: "Alternativas explicadas",
    text: "As opções são apresentadas com o que se espera de cada uma, inclusive as que não envolvem cirurgia.",
  },
  {
    title: "Riscos ditos antes",
    text: "Benefícios esperados, riscos e limites fazem parte da conversa antes de qualquer decisão sua.",
  },
  {
    title: "Não operar também é conduta",
    text: "Quando não há indicação cirúrgica, isso é dito com o motivo — e o cuidado segue por outro caminho.",
  },
];

/**
 * As quatro dúvidas que decidem o agendamento ficam ABERTAS, dentro da seção
 * da primeira consulta. Estavam no acordeão, e acordeão fechado é conteúdo
 * invisível: quem não clica não lê justamente o que o faria marcar.
 */
const consultationQuestions = [
  consultaEncaminhamento,
  {
    question: "Preciso chegar com exames em mãos?",
    answer:
      "Não. Os exames que você já tem adiantam a conversa. Os que faltarem são solicitados depois da avaliação, e apenas quando acrescentam informação ao seu caso.",
  },
  {
    question: "A consulta já define uma cirurgia?",
    answer:
      "Não. A avaliação serve para compreender a queixa, investigar as causas e discutir possibilidades. Dependendo do diagnóstico, o cuidado pode ser conservador ou envolver outros profissionais. A cirurgia só é considerada quando há indicação.",
  },
  consultaParticular,
];

/**
 * Dúvidas RESIDUAIS. As que travam a decisão subiram para a seção da primeira
 * consulta; o que sobrou aqui é logística de quem já decidiu procurar.
 */
const homeFaqs = [
  {
    question: "Como faço para agendar uma avaliação?",
    answer:
      "Pelo WhatsApp ou pelo formulário nesta página. A equipe responde em horário comercial, explica como funciona a avaliação e orienta o que levar na primeira consulta.",
  },
  {
    question: "Onde e em que horários acontece o atendimento?",
    answer:
      "Em João Pessoa, PB, em horário comercial. Confirme o endereço, os dias disponíveis e as orientações de chegada com a equipe no agendamento.",
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
      <JsonLd data={faqSchema([...consultationQuestions, ...homeFaqs])} />

      <main data-rota="home">
        {/* Bloco 1 — quem atende e o que ele faz, respondido de uma vez: a
            identidade completa, a credencial verificável e os dois caminhos de
            ação na mesma dobra. Numa marca pessoal o rosto é o ativo de
            conversão, não uma ilustração. */}
        <section className="home-hero photo-hero">
          <HeroBackdrop page="home" />
          <div className="container home-hero-grid">
            <div className="home-hero-copy hero-photo-copy page-enter">
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

        <TrustMarquee items={credentialFacts} />

        {/* Bloco 2 — roteamento. É o trabalho principal da home, e por isso
            vem antes da biografia: quem chega por sintoma ou por anúncio
            precisa achar a própria condição, não a trajetória do profissional. */}
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
                      <MotifThumb type={card.thumb ?? treatment.motif} />
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
                        <span>
                          {card.action}
                          <span className="sr-only"> — {treatment.navLabel}</span>
                        </span>
                        <span className="area-link-arrow" aria-hidden="true">
                          <ArrowRight size={15} />
                        </span>
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Bloco 3 — quem conduz E como decide, juntos. O currículo completo
            fica em /sobre: a home apresenta o profissional, não conta a
            trajetória inteira. */}
        <section className="section about-section section-soft-edge section-with-wave" id="sobre">
          <div className="container about-grid">
            <DoctorPortrait variant="authority" />
            <div className="about-copy">
              <span className="section-kicker light">Quem conduz a avaliação</span>
              <h2>{siteConfig.fullName}</h2>
              <p className="authority-role">
                {siteConfig.specialty} · {siteConfig.registry}
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
                A consulta começa pela sua história: o que dói, o que você
                deixou de fazer e o que espera melhorar. A investigação reúne
                exame clínico e, quando necessários, exames complementares.
              </p>

              <ul className="decision-criteria">
                {decisionCriteria.map((item) => (
                  <li key={item.title}>
                    <strong>{item.title}</strong>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>

              <p className="authority-links">
                <a className="text-link light-link" href={siteConfig.boardCertificate} target="_blank" rel="noopener noreferrer">
                  Ver certificado do Board (2026)
                </a>
                <Link className="text-link light-link" href="/sobre">
                  Conhecer a formação completa <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </p>
            </div>
          </div>
          <SectionWave from="transparent" to="var(--sand-100)" flip />
        </section>

        {/* Bloco 4 — processo e as quatro dúvidas que decidem o agendamento,
            na mesma seção. Eram três blocos: processo, objeções e FAQ. */}
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

            <dl className="open-questions">
              {consultationQuestions.map((item) => (
                <div key={item.question}>
                  <dt>{item.question}</dt>
                  <dd>{item.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Bloco 5 — prova social. Sem relato aprovado, não renderiza: o
            espaço vazio é preferível ao depoimento inventado. */}
        {Boolean(patientReviews.length) && (
          <section className="section reviews-section" id="avaliacoes">
            <div className="container">
              <Reviews
                items={patientReviews}
                title="O que os pacientes dizem sobre o atendimento"
              />
            </div>
          </section>
        )}

        {/* Bloco 6 — contato e o que sobrou de dúvida. */}
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
                label={ctaLadder.consultation}
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

            <div className="closing-faq" id="duvidas">
              <h2>Dúvidas que costumam sobrar.</h2>
              <FaqAccordion items={homeFaqs} />
            </div>

            <p className="closing-dentist">
              É dentista e quer discutir um caso?{" "}
              <Link className="text-link light-link" href="/para-dentistas">
                Conheça o canal profissional
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </p>
          </div>
        </section>

        {/* Bloco 7 — onde isso acontece. Fecha a página: quem decidiu marcar
            sai daqui com endereço, horário e como chegar, e quem ainda não
            decidiu não precisa rolar por isso para chegar ao contato. */}
        <LocationSection />
      </main>

      <FloatingWhatsApp message={whatsappMessage} />
    </>
  );
}
