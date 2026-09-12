import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronRight,
  Handshake,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { DoctorPortrait } from "@/components/doctor-portrait";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { JsonLd } from "@/components/json-ld";
import { Reviews } from "@/components/reviews";
import { SectionWave } from "@/components/section-wave";
import { TrustMarquee } from "@/components/trust-marquee";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { ctaLadder, patientReviews, treatments } from "@/lib/content";
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
    "Mestre e doutor pela UNICAMP, professor titular da UFRN e presidente do Colégio Brasileiro de CTBMF em 2023–2024. Consultórios em João Pessoa e Natal.",
  path: "/sobre",
  ogSlug: "sobre",
  absoluteTitle: true,
});

const whatsappMessage =
  "Olá, vi a página do Dr. Adriano e gostaria de entender como funciona a avaliação.";


/**
 * O eixo da indicação, em quatro afirmações. É o conteúdo humano que estava na
 * home: aqui ele serve a quem veio avaliar a pessoa, e lá ocupava a dobra que
 * o visitante de sintoma precisa para achar a própria condição.
 */
const decisionAxis = [
  {
    title: "Avaliar antes de indicar",
    text: "A consulta existe para entender a origem da queixa. Nenhuma conduta é definida antes do exame e dos exames que o caso pedir.",
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
                com consultórios em João Pessoa e Natal. A consulta começa pela
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
                  href="#areas"
                >
                  Ver as áreas de atuação
                </Link>
              </div>
            </div>

            <DoctorPortrait />
          </div>
        </section>

        <TrustMarquee items={credentialFacts} />

        {/* 2 — formação e credenciais, em uma seção só. A ordem é
            cronológica porque a trajetória é a informação: graduação, pós,
            cátedra, entidade. O registro profissional fecha o bloco. */}
        <section className="section section-white credentials-section" id="formacao">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">Formação e trajetória</span>
              <h2>Quase três décadas entre a universidade, o hospital e o consultório.</h2>
            </div>

            <ol className="career-timeline">
              {professionalTimeline.map((item) => (
                <li key={item.title}>
                  <span className="career-year">{item.year ?? ""}</span>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.detail}</p>
                  </div>
                </li>
              ))}
            </ol>

            <p className="career-registry">
              <BadgeCheck size={17} aria-hidden="true" />
              {siteConfig.registry} · especialista registrado nos dois estados
            </p>
          </div>
        </section>

        <SectionWave to="var(--navy-800)" />

        {/* 3 — o certificado vive DENTRO da explicação do que ele significa.
            Sozinho, ele é um documento que o paciente não sabe ler. */}
        <section className="section section-mist method-section" id="board">
          <div className="container method-grid">
            <div className="method-copy">
              <span className="section-kicker">A certificação</span>
              <h2>O que é esse Board, e por que ele importa para você.</h2>
              <p>
                O Colégio Brasileiro de Cirurgia e Traumatologia Buco-Maxilo-Facial
                mantém um processo de certificação próprio, separado do registro
                profissional. Ele avalia formação, experiência e conhecimento do
                cirurgião por meio de uma banca de examinadores da própria
                especialidade.
              </p>
              <p>
                O registro no Conselho autoriza o exercício da profissão. A
                certificação do Board é voluntária e diz outra coisa: que o
                trabalho daquele profissional foi examinado pelos pares. Em 2026,
                o Dr. Adriano recebeu essa certificação e passou a integrar a
                banca que avalia outros cirurgiões.
              </p>
              <p>
                Antes disso, em 2023 e 2024, presidiu o próprio Colégio
                Brasileiro — a entidade nacional da especialidade, que mantém
                essa certificação. {siteConfig.boardContext}
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

            <DoctorPortrait variant="authority" />
          </div>
        </section>

        <SectionWave from="var(--navy-800)" to="var(--sand-100)" flip />

        {/* 4 — como ele pensa uma indicação. */}
        <section className="section journey-section" id="conduta">
          <div className="container">
            <div className="section-heading centered-heading">
              <span className="pill-badge">O que orienta a conduta</span>
              <h2>Quando operar é o caminho, e quando não é.</h2>
              <p>
                Quase nenhum site publica quando não opera. Estes são os
                critérios que orientam a decisão aqui, e eles valem nas cinco
                áreas de atuação.
              </p>
            </div>

            <ul className="decision-criteria decision-criteria-wide">
              {decisionAxis.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 5 — atendimento e trabalho integrado, no mesmo bloco. */}
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
                  Dentista, ortodontista, médico do sono: quando existe um
                  profissional conduzindo o caso, o planejamento considera esse
                  cuidado e a comunicação entre as partes faz parte do trabalho.
                </p>
              </article>
              <article>
                <span className="consultation-icon" aria-hidden="true">
                  <ShieldCheck size={20} />
                </span>
                <h3>Atendimento particular</h3>
                <p>
                  Sem convênios. A equipe informa o valor da consulta antes do
                  agendamento, e os custos de um eventual tratamento são
                  apresentados conforme as etapas, antes de qualquer decisão.
                </p>
              </article>
              <article>
                <span className="consultation-icon" aria-hidden="true">
                  <MapPin size={20} />
                </span>
                <h3>Onde é o atendimento</h3>
                <p>
                  Dois consultórios, em {siteConfig.serviceArea}, cada um com
                  WhatsApp próprio. Endereços, mapas e rotas estão na página
                  inicial.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* 6 — experiência de pacientes. Sem relato aprovado, não renderiza. */}
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

        {/* 7 — áreas e contato encerram juntos. */}
        <section className="section contact-section" id="contato">
          <div className="container">
            <div className="closing-copy">
              <h2>Qual é a dúvida que trouxe você até aqui?</h2>
              <p>
                Se algo na sua mastigação, na sua mandíbula ou no seu sono
                mudou, a avaliação é o passo que esclarece o que está
                acontecendo — antes de qualquer decisão sobre tratamento.
              </p>
              <WhatsAppButton
                ctaId="cta-final-whatsapp"
                message={whatsappMessage}
                label={ctaLadder.consultation}
                className="button-whatsapp-solid"
              />
            </div>

            <ContactForm
              page="sobre"
              available={Boolean(process.env.FORM_WEBHOOK_URL)}
              eyebrow="Prefere que a equipe entre em contato?"
              title="Comece pela sua dúvida."
              description="Deixe seu nome e WhatsApp. A equipe responde em horário comercial e explica como funciona a consulta."
            />

            {/*
              As cinco rotas do site são as áreas com captação ativa, não o
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
              </ul>
              <p className="closing-areas-note">
                A atuação em cirurgia e traumatologia buco-maxilo-facial
                também inclui reconstrução maxilofacial avançada com técnicas
                microcirúrgicas, implantes faciais, prótese de articulação
                temporomandibular e tumores benignos dos maxilares e da face.
                Para discutir um caso assim,{" "}
                <Link href="/para-dentistas">fale pelo canal profissional</Link>.
              </p>
            </div>
          </div>
        </section>
      </main>

      <FloatingWhatsApp message={whatsappMessage} />
    </>
  );
}
