"use client";

import { Plus } from "lucide-react";
import { useId, useState } from "react";

export type Faq = { question: string; answer: string };

/**
 * Acordeão exclusivo em um cartão único: abrir um item fecha o outro, e o
 * primeiro já vem aberto para a seção nunca aparecer vazia.
 *
 * A altura anima por `grid-template-rows: 0fr → 1fr`, não por `max-height`
 * chutado — a resposta pode ter qualquer comprimento sem cortar no fim nem
 * deixar sobra de espaço no meio da transição.
 */
export function FaqAccordion({ items }: { items: Faq[] }) {
  const [openIndex, setOpenIndex] = useState(0);
  const baseId = useId();

  return (
    <div className="faq-card">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = baseId + "-panel-" + index;

        return (
          <div className={isOpen ? "faq-item is-open" : "faq-item"} key={item.question}>
            <h3>
              <button
                type="button"
                className="faq-toggle"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <span>{item.question}</span>
                <span className="faq-sign" aria-hidden="true">
                  <Plus size={15} />
                </span>
              </button>
            </h3>

            {/* Sem `hidden`: `display: none` cortaria a transição. Quem tira o
                painel fechado da ordem de tabulação e do leitor de tela é o
                `visibility: hidden` do CSS. */}
            <div className="faq-panel" id={panelId}>
              <div className="faq-panel-inner">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
