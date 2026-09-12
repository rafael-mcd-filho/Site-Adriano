import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  CalendarClock,
  ClipboardList,
  MessageSquareText,
} from "lucide-react";
import { ConversionTracker } from "@/app/obrigado/conversion-tracker";
import { ButtonContent } from "@/components/button-content";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { pageMetadata } from "@/lib/metadata";
import { practiceLocations, siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Solicitação recebida",
  description: "Confirmação de envio da solicitação de contato.",
  path: "/obrigado",
  index: false,
});

const steps = [
  {
    icon: ClipboardList,
    title: "A equipe confere seu contato",
    text: "Seu nome, número de WhatsApp e assunto ajudam a equipe a organizar o retorno.",
  },
  {
    icon: MessageSquareText,
    title: "Você recebe uma resposta",
    text: "A equipe fala com você pelo número informado, em horário comercial, para esclarecer o que precisa saber sobre o atendimento.",
  },
  {
    icon: CalendarClock,
    title: "O próximo passo é combinado",
    text: "Se desejar agendar, você recebe orientações sobre valor, horários disponíveis e o que levar à avaliação.",
  },
];

export default async function ObrigadoPage({
  searchParams,
}: {
  searchParams: Promise<{ origem?: string }>;
}) {
  const { origem } = await searchParams;
  const origin = origem || "site";

  return (
    <main className="thanks-page">
      <ConversionTracker origin={origin} />

      <section className="thanks-hero section-soft-edge">
        <div className="container thanks-hero-inner">
          <span className="pill-badge">Solicitação recebida</span>
          <h1>
            Recebemos seu pedido de contato. Vamos responder pelo{" "}
            <span className="mark-accent">WhatsApp</span>.
          </h1>
          <p>
            Não é necessário reenviar o formulário. A equipe responde em horário
            comercial. O horário da consulta será combinado nesse contato.
          </p>

          <div className="hero-actions">
            <WhatsAppButton
              ctaId="cta-obrigado-whatsapp"
              message="Olá, acabei de enviar uma solicitação pelo site e gostaria de complementar."
              label="Complementar pelo WhatsApp"
              fallbackHref="/#contato"
            />
            <Link className="button button-secondary button-motion" href="/">
              <ButtonContent icon={ArrowLeft}>Voltar para o início</ButtonContent>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <div className="section-heading centered-heading">
            <span className="pill-badge">O que acontece agora</span>
            <h2>O próximo passo será combinado com você.</h2>
          </div>

          <ol className="thanks-steps">
            {steps.map((step, index) => {
              const StepIcon = step.icon;

              return (
                <li key={step.title}>
                  <span className="process-number">{index + 1}</span>
                  <StepIcon size={21} aria-hidden="true" />
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              );
            })}
          </ol>

          {/* Dois acréscimos, não uma nova jornada comercial: salvar o número
              evita que a resposta chegue de um desconhecido — é onde mais se
              perde lead depois do envio —, e os links respondem o que a pessoa
              costuma querer saber enquanto espera. */}
          <div className="thanks-extra">
            <p>
              <strong>Salve o contato da equipe.</strong> O retorno vem pelo
              WhatsApp, em horário comercial. Com o número salvo, a mensagem não
              chega de um desconhecido.
            </p>
            <ul className="thanks-numbers">
              {practiceLocations.map((location) => (
                <li key={location.id}>
                  {location.city}: <strong>{location.whatsappDisplay}</strong>
                </li>
              ))}
            </ul>
            <ul>
              <li>
                <Link href="/#processo">Como funciona a primeira consulta</Link>
              </li>
              <li>
                <Link href="/sobre">Quem é o Dr. Adriano Rocha Germano</Link>
              </li>
              <li>
                <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer">
                  Instagram do Dr. Adriano
                </a>
              </li>
            </ul>
          </div>

          <p className="thanks-note">
            Evite enviar exames, diagnósticos ou informações clínicas por canais
            abertos. O meio adequado é indicado no retorno. O envio deste
            formulário não confirma um agendamento.
            {siteConfig.isDemo
              ? " Este site está em modo de demonstração."
              : ""}
          </p>
        </div>
      </section>
    </main>
  );
}
