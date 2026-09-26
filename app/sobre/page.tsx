import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronRight,
  Handshake,
  MapPin,
  Quote,
  ShieldCheck,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { DoctorPortrait } from "@/components/doctor-portrait";
import { MediaPlaceholder } from "@/components/media-placeholder";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { JsonLd } from "@/components/json-ld";
import { Reviews } from "@/components/reviews";
import { SectionWave } from "@/components/section-wave";
import { TrustMarquee } from "@/components/trust-marquee";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { patientReviews, treatments } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import {
  areaNavigation,
  credentialFacts,
  professionalTimeline,
  siteConfig,
} from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Dr. Adriano Rocha Germano | Cirurgião Bucomaxilofacial",
  socialTitle: "Dr. Adriano Rocha Germano",
  description:
    "Mestre e doutor pela UNICAMP, professor titular da UFRN e presidente do Colégio Brasileiro de CTBMF em 2023–2024. Consultórios em Natal e João Pessoa.",
  path: "/sobre",
  ogSlug: "sobre",
  absoluteTitle: true,
});

const whatsappMessage =
  "Olá, vi a página do Dr. Adriano e gostaria de entender como funciona a avaliação.";

const careerGroups = [
  {
    id: "formacao-academica",
    title: "Formação",
    items: professionalTimeline.filter((item) =>
      ["Graduação em Odontologia", "Especialista em Cirurgia e Traumatologia Buco-Maxilo-Facial", "Mestrado e doutorado", "Pós-doutorado"].includes(item.title),
    ),
  },
  {
    id: "experiencia",
    title: "Experiência",
    items: professionalTimeline.filter((item) =>
      ["Professor da UFRN, por concurso", "Hospital Infantil Varela Santiago"].includes(item.title),
    ),
  },
  {
    id: "reconhecimento",
    title: "Reconhecimento",
    items: professionalTimeline.filter((item) =>
      ["Certificação Board pela ALACIBU", "Presidente do Colégio Brasileiro de Cirurgia e Traumatologia Buco-Maxilo-Facial", "Certificação Board e banca de examinadores", "Presidente do COBRAC-Natal", "Membro titular do Colégio Brasileiro"].includes(item.title),
    ),
  },
];

/**
 * O eixo da indicação, em quatro afirmações. É o conteúdo humano que estava na
 * home: aqui ele serve a quem veio avaliar a pessoa, e lá ocupava a dobra que
 * o visitante de sintoma precisa para achar a própria condição.
 */
const decisionAxis = [
  {
    title: "Avaliar antes de indicar",
    text: "Histórico, exame clínico e exames complementares ajudam a compreender a queixa e os fatores envolvidos.",
  },
  {
    title: "Explicar as alternativas",
    text: "Cada opção é apresentada com o que se espera dela, seus limites e seus riscos — inclusive as que não envolvem cirurgia.",
  },
  {
    title: "Operar quando existe indicação",
    text: "A cirurgia é discutida quando os benefícios esperados justificam os riscos e as alternativas já foram consideradas.",
  },
  {
    title: "Não operar quando não existe",
    text: "Quando não há indicação cirúrgica, isso é dito com o motivo, e o cuidado segue pelo caminho que fizer sentido.",
  },
];

export default function SobrePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Dr. Adriano", path: "/sobre" }])} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          url: siteConfig.url + "/sobre",
          inLanguage: "pt-BR",
          isPartOf: { "@id": siteConfig.url + "/#website" },
          // A pessoa inteira — formação, filiações, credenciais — mora no
          // grafo do layout. Aqui só a referência, para não haver dois nós
          // descrevendo a mesma pessoa com dados diferentes.
          mainEntity: { "@id": siteConfig.url + "/#person" },
        }}
      />

      <main data-rota="sobre">
        {/* 1 — quem é, dito de uma vez. Quem chega aqui já entendeu o próprio
            problema e está avaliando a pessoa: a página não precisa de dor,
            nem de mecanismo, só de densidade de prova. */}
        <section className="inner-hero about-hero section-soft-edge">
          <div className="container inner-hero-grid">
            <div className="inner-hero-copy page-enter">
              <span className="eyebrow">Quem conduz a avaliação</span>
              <h1>
                <span className="hero-name">{siteConfig.fullName}</span>
                Entender o caso inteiro antes de{" "}
                <span className="mark-accent">falar em cirurgia</span>.
              </h1>
              <p>
                Cirurgião bucomaxilofacial, professor titular da UFRN e chefe do
                serviço da especialidade no Hospital Universitário Onofre Lopes,
                com consultórios em Natal e João Pessoa. A consulta começa pela
                sua história, e a conduta vem do que o exame mostrar — não de
                um protocolo pronto.
              </p>

              <ul className="hero-badges">
                <li>
                  <Check size={13} aria-hidden="true" />
                  {siteConfig.registry}
                </li>
                <li>
                  <Check size={13} aria-hidden="true" />
                  Mestre e doutor · UNICAMP
                </li>
                <li>
                  <Check size={13} aria-hidden="true" />
                  {siteConfig.serviceArea}
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
                  className="text-link hero-secondary-link"
                  href="#formacao"
                >
                  Ver formação e credenciais
                </Link>
              </div>
            </div>

            <DoctorPortrait profileHref="#formacao" />
          </div>
        </section>

        <TrustMarquee items={credentialFacts} />

        {/* A trajetória é agrupada por significado, preservando os fatos e anos informados. */}
        <section className="section section-white credentials-section" id="formacao">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">Formação e trajetória</span>
              <h2>Quase três décadas entre a universidade, o hospital e o consultório.</h2>
            </div>

            <nav className="career-navigation" aria-label="Navegar pela trajetória profissional">
              {careerGroups.map((group) => (
                <a key={group.id} href={"#" + group.id}>{group.title}</a>
              ))}
              <a href="#board">Ver certificação</a>
              <a href="#cirurgia-pediatrica">Atuação pediátrica</a>
            </nav>

            <div className="career-groups">
              {careerGroups.map((group) => (
                <article className="career-group" id={group.id} key={group.id}>
                  <h3>{group.title}</h3>
                  <ol className="career-timeline">
                    {group.items.map((item) => (
                      <li key={item.title}>
                        {item.year && <span className="career-year">{item.year}</span>}
                        <strong>{item.title}</strong>
                        <p>{item.detail}</p>
                      </li>
                    ))}
                  </ol>
                </article>
              ))}
            </div>

            <p className="career-registry">
              <BadgeCheck size={17} aria-hidden="true" />
              {siteConfig.registry} · especialista registrado nos dois estados
            </p>

            <aside className="career-editorial" aria-label="Fala pessoal do Dr. Adriano">
              <blockquote className="personal-note">
                <div className="personal-lead">
                  <span className="section-kicker">Em primeira pessoa</span>
                  <Quote size={44} strokeWidth={1.5} aria-hidden="true" />
                  <h3>Por que escolhi esta especialidade</h3>
                  <p>A Cirurgia e Traumatologia Buco-Maxilo-Facial entrou na minha vida quando percebi que poderia ir muito além de transformar sorrisos e faces: poderia contribuir para uma verdadeira transformação na vida dos meus pacientes.</p>
                </div>
                <div className="personal-body">
                  <p>Mais do que resultados estéticos, essa especialidade me permite proporcionar qualidade de vida, aliviar sofrimentos e angústias e promover mudanças significativas em aspectos fundamentais como a função mastigatória, a fala e a respiração.</p>
                  <p>E, sobretudo, encontrei na Cirurgia e Traumatologia Buco-Maxilo-Facial a possibilidade de contribuir para o bem-estar e a autoestima de muitos pacientes, favorecendo não apenas mudanças físicas, mas também impactos positivos em sua saúde emocional e qualidade de vida.</p>
                  <footer>Dr. Adriano Rocha Germano <span>· Cirurgião bucomaxilofacial</span></footer>
                </div>
              </blockquote>
            </aside>
          </div>
        </section>

        <SectionWave to="var(--navy-800)" />

        {/* 3 — o certificado vive DENTRO da explicação do que ele significa.
            Sozinho, ele é um documento que o paciente não sabe ler. */}
        <section className="section section-mist method-section" id="board">
          <div className="container method-grid">
            <div className="method-copy">
              <span className="section-kicker">A certificação</span>
              <h2>Uma certificação examinada por profissionais da especialidade.</h2>
              <p>
                Em 2022, o Dr. Adriano recebeu a certificação Board da Associação
                Latino-Americana de Cirurgia e Traumatologia Bucomaxilofacial
                (ALACIBU). Em 2026, foi certificado pelo Board do Colégio Brasileiro
                de Cirurgia e Traumatologia Buco-Maxilo-Facial (FBCOMS).
              </p>
              <p>
                O certificado brasileiro de 2026 também registra sua participação
                na banca de examinadores que avalia outros cirurgiões.
                {" "}{siteConfig.boardContext}
              </p>

              <a
                className="text-link"
                href={siteConfig.boardCertificate}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver o certificado completo <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>

            <DoctorPortrait variant="certificate" />
          </div>
        </section>

        <SectionWave from="var(--navy-800)" to="var(--sand-100)" flip />

        {/* 4 — como ele pensa uma indicação. */}
        <section className="section journey-section" id="conduta">
          <div className="container">
            <div className="section-heading centered-heading">
              <span className="pill-badge">O que orienta a conduta</span>
              <h2>A indicação considera benefícios, riscos e alternativas.</h2>
              <p>
                Estes critérios orientam a decisão nas diferentes áreas de
                atuação, desde o acompanhamento até um possível tratamento cirúrgico.
              </p>
            </div>

            <div className="editorial-support-grid">
            <MediaPlaceholder kind="doctor-consultation" />
            <ul className="decision-criteria decision-criteria-wide">
              {decisionAxis.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
            </div>
          </div>
        </section>

        {/* 5 — uma área institucional sustentada pela atuação informada pelo
            profissional. Ela permanece aqui enquanto não houver conteúdo
            suficiente para justificar uma rota própria. */}
        <section className="section section-white pediatric-section" id="cirurgia-pediatrica">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <span className="section-kicker">Cirurgia bucomaxilofacial pediátrica</span>
                <h2>Fissuras e anomalias craniofaciais podem exigir cuidado em diferentes fases do crescimento.</h2>
              </div>
              <p>
                O Dr. Adriano atua na avaliação e no planejamento cirúrgico de
                crianças com fissuras e outras anomalias bucomaxilofaciais,
                considerando o cuidado que cada criança já recebe.
              </p>
            </div>

            <div className="integration-grid pediatric-grid">
              <article>
                <span className="consultation-icon" aria-hidden="true">
                  <BadgeCheck size={20} />
                </span>
                <h3>Experiência em serviço pediátrico de anomalias craniofaciais</h3>
                <p>
                  Foi um dos fundadores e coordena o serviço de Cirurgia
                  Bucomaxilofacial do Hospital Infantil Varela Santiago, voltado
                  a crianças com anomalias bucomaxilofaciais, incluindo pacientes
                  com fissuras e síndromes.
                </p>
              </article>
              <article>
                <span className="consultation-icon" aria-hidden="true">
                  <ShieldCheck size={20} />
                </span>
                <h3>Decisões conforme cada etapa</h3>
                <p>
                  A conduta depende da avaliação, da fase de desenvolvimento e
                  do que já foi realizado. A sequência é explicada para a
                  família antes de qualquer decisão.
                </p>
              </article>
              <article>
                <span className="consultation-icon" aria-hidden="true">
                  <Handshake size={20} />
                </span>
                <h3>Cuidado integrado</h3>
                <p>
                  Quando outros profissionais acompanham a criança, a
                  comunicação ajuda a alinhar a participação cirúrgica às
                  demais etapas do cuidado.
                </p>
              </article>
            </div>

            <div className="pediatric-actions">
              <Link className="text-link" href="#contato">
                Entender como funciona a avaliação <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link className="text-link" href="/profissionais-da-saude">
                Discutir um caso pelo canal profissional <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* 6 — atendimento e trabalho integrado, no mesmo bloco. */}
        <section className="section authority-section" id="atuacao">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker light">Como o cuidado acontece</span>
              <h2>Uma etapa dentro do cuidado que você já recebe.</h2>
            </div>

            <div className="integration-grid">
              <article>
                <span className="consultation-icon" aria-hidden="true">
                  <Handshake size={20} />
                </span>
                <h3>Com quem já acompanha você</h3>
                <p>
                  Dentista, ortodontista, médico, fonoaudiólogo, psicólogo ou
                  fisioterapeuta: quando existe um profissional conduzindo o caso,
                  o planejamento considera esse cuidado e a comunicação entre
                  as partes faz parte do trabalho.
                </p>
              </article>
              <article>
                <span className="consultation-icon" aria-hidden="true">
                  <ShieldCheck size={20} />
                </span>
                <h3>Atendimento particular</h3>
                <p>
                  A consulta e os honorários da equipe são particulares. Muitos
                  procedimentos hospitalares podem ser autorizados pelo convênio,
                  conforme a cobertura de cada plano; os honorários profissionais
                  são pagos à parte. O reembolso pode ser parcial ou total,
                  dependendo do contrato. A equipe esclarece os custos antes
                  de qualquer decisão.
                </p>
              </article>
              <article>
                <span className="consultation-icon" aria-hidden="true">
                  <MapPin size={20} />
                </span>
                <h3>Onde é o atendimento</h3>
                <MediaPlaceholder kind="reception" compact className="integration-media" />
                <p>
                  Dois consultórios, em {siteConfig.serviceArea}, cada um com
                  WhatsApp próprio.
                </p>
                <Link className="text-link light-link" href="/#local">Ver endereços e como chegar <ArrowRight size={16} aria-hidden="true" /></Link>
              </article>
            </div>
          </div>
        </section>

        {/* 7 — a reserva identifica a prova real que ainda precisa ser fornecida. */}
        <section className="section reviews-section" id="avaliacoes">
          <div className="container">
            {patientReviews.length ? (
              <Reviews items={patientReviews} title="O que os pacientes dizem sobre o atendimento" />
            ) : (
              <MediaPlaceholder kind="reviews-patients" className="reviews-media-reserved" />
            )}
          </div>
        </section>

        {/* 8 — áreas e contato encerram juntos. */}
        <section className="section contact-section" id="contato">
          <div className="container">
            <div className="closing-copy">
              <h2>Qual é a dúvida que trouxe você até aqui?</h2>
              <p>
                Mudanças na mastigação, na mandíbula ou no sono podem ser
                o ponto de partida da conversa. Conte o que gostaria de entender.
              </p>
              <WhatsAppButton
                ctaId="cta-final-whatsapp"
                message={whatsappMessage}
                label="Escolher consultório e falar com a equipe"
                className="button-whatsapp-solid"
              />
              <p className="contact-expectation">A equipe informa horários, valor da consulta e o que levar. A indicação de qualquer procedimento depende da avaliação.</p>
            </div>

            <ContactForm
              page="sobre"
              available={Boolean(process.env.FORM_WEBHOOK_URL)}
              eyebrow="Prefere que a equipe entre em contato?"
              title="Comece pela sua dúvida."
              description="Deixe seu nome e WhatsApp. A equipe responde em horário comercial e explica como funciona a consulta."
            />

            {/*
              As rotas de tratamento são as áreas com captação ativa, não o
              limite da atuação. Quem chega procurando tumor benigno ou
              reconstrução microcirúrgica não encontrava nada — e era
              justamente quem mais precisa saber que existe alguém.
            */}
            <div className="closing-areas" id="areas">
              <h2>Áreas de atuação</h2>
              <ul>
                {areaNavigation.map((area) => {
                  const treatment = treatments[area.href.replace("/", "")];

                  return (
                    <li key={area.href}>
                      <Link href={area.href}>
                        <strong>{area.label}</strong>
                        {treatment && <span>{treatment.visualSummary.title}</span>}
                        <ChevronRight size={16} aria-hidden="true" />
                      </Link>
                    </li>
                  );
                })}
                <li>
                  <Link href="#cirurgia-pediatrica">
                    <strong>Fissuras e anomalias craniofaciais</strong>
                    <span>Atuação em cirurgia bucomaxilofacial pediátrica.</span>
                    <ChevronRight size={16} aria-hidden="true" />
                  </Link>
                </li>
              </ul>
              <p className="closing-areas-note">
                A atuação em cirurgia e traumatologia buco-maxilo-facial
                também inclui reconstrução maxilofacial avançada com técnicas
                microcirúrgicas, implantes faciais, prótese de articulação
                temporomandibular e outros casos de maior complexidade. Para
                discutir um caso assim,{" "}
                <Link href="/profissionais-da-saude">fale pelo canal profissional</Link>.
              </p>
            </div>
          </div>
        </section>
      </main>

      <FloatingWhatsApp />
    </>
  );
}
