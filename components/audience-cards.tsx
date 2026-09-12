import Link from "next/link";
import { Check } from "lucide-react";
import { MotifThumb } from "@/components/motif-thumb";
import { WhatsAppButton } from "@/components/whatsapp-button";

type Audience = {
  key: "paciente" | "dentista";
  badge: string;
  title: string;
  description: string;
  itemsLabel: string;
  items: string[];
  action: { href: string; label: string; ctaId: string };
  whatsapp: { ctaId: string; message: string; label: string };
};

const audiences: Audience[] = [
  {
    key: "paciente",
    badge: "Paciente",
    title: "Quero cuidar do que está me incomodando",
    description:
      "Você pode procurar a avaliação diretamente, mesmo sem saber o nome do problema ou qual tratamento precisa.",
    itemsLabel: "Esse caminho é para você que:",
    items: [
      "Convive com um incômodo e quer investigar.",
      "Recebeu uma indicação e precisa entendê-la.",
      "Busca uma segunda opinião antes de decidir.",
    ],
    action: {
      href: "#contato",
      label: "Prefiro deixar meu contato",
      ctaId: "cta-publico-paciente-formulario",
    },
    whatsapp: {
      ctaId: "cta-publico-paciente-whatsapp",
      message:
        "Olá, gostaria de entender como funciona uma avaliação com o Dr. Adriano.",
      label: "Quero entender meu caso",
    },
  },
  {
    key: "dentista",
    badge: "Profissional",
    title: "Quero discutir o caso de um paciente",
    description:
      "Converse sobre a etapa especializada e como integrá-la ao tratamento que você já conduz.",
    itemsLabel: "O primeiro contato ajuda a:",
    items: [
      "Discutir a dúvida clínica e os exames disponíveis.",
      "Alinhar a participação de cada profissional.",
      "Planejar a continuidade do acompanhamento.",
    ],
    action: {
      href: "/para-dentistas",
      label: "Conhecer o encaminhamento",
      ctaId: "cta-publico-dentista-pagina",
    },
    whatsapp: {
      ctaId: "cta-publico-dentista-whatsapp",
      message:
        "Olá, sou dentista e gostaria de conversar sobre um possível encaminhamento.",
      label: "Discutir um caso",
    },
  },
];

/**
 * Dois caminhos de contato, com linguagem própria para o paciente e para o
 * profissional. A lista curta evita repetir o processo da consulta na Home.
 */
export function AudienceCards() {
  return (
    <div className="audience-grid">
      {audiences.map((audience) => (
        <article className={"audience-card reveal audience-" + audience.key} key={audience.key}>
          <div className="audience-visual" aria-hidden="true">
            <MotifThumb type={audience.key === "paciente" ? "planning" : "joint"} />
            <span className="audience-badge">{audience.badge}</span>
          </div>

          <div className="audience-body">
            <h3>{audience.title}</h3>
            <p>{audience.description}</p>

            <p className="audience-label">{audience.itemsLabel}</p>
            <ul className="audience-list">
              {audience.items.map((item) => (
                <li key={item}>
                  <span className="audience-check" aria-hidden="true">
                    <Check size={11} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="audience-actions">
              <Link
                id={audience.action.ctaId}
                data-cta={audience.action.ctaId}
                className="text-link"
                href={audience.action.href}
              >
                {audience.action.label}
              </Link>
              <WhatsAppButton
                ctaId={audience.whatsapp.ctaId}
                message={audience.whatsapp.message}
                label={audience.whatsapp.label}
              />
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
