import { FileText } from "lucide-react";
import type { ClinicalCase } from "@/lib/content";

/**
 * Um caso conduzido, em cartão, DENTRO da seção de etapas.
 *
 * Antes e depois está vedado na publicidade odontológica, e imagem de
 * procedimento também. O que resta — e faz o mesmo trabalho — é a narrativa da
 * condução: a situação, o que a avaliação encontrou, o que foi discutido, o
 * que foi decidido e como seguiu. Ela demonstra raciocínio clínico, que é
 * justamente o que este site vende, sem prometer que o desfecho se repete.
 *
 * Não existe galeria: o cartão vive junto das etapas porque responde a mesma
 * pergunta que elas — "como isso acontece na prática?". Um bloco de portfólio
 * à parte responderia a mesma coisa uma segunda vez.
 *
 * Sem `clinicalCase` na rota, nada é renderizado. Enquanto o cirurgião não
 * fornecer casos reais, desidentificados e aprovados por ele, este espaço fica
 * vazio — inventar um caso é outro problema, não uma solução de conversão.
 */
export function ClinicalCaseCard({ item }: { item?: ClinicalCase }) {
  if (!item) return null;

  const steps: Array<[string, string]> = [
    ["A situação", item.situation],
    ["O que a avaliação encontrou", item.evaluation],
    ["O que foi discutido", item.options],
    ["A decisão", item.decision],
    ["Como seguiu", item.followUp],
  ];

  return (
    <article className="clinical-case reveal">
      <header className="clinical-case-head">
        <span className="consultation-icon" aria-hidden="true">
          <FileText size={20} />
        </span>
        <div>
          <span className="section-kicker">Um caso conduzido</span>
          <h3>{item.title}</h3>
        </div>
      </header>

      <dl className="clinical-case-steps">
        {steps.map(([label, text]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{text}</dd>
          </div>
        ))}
      </dl>

      <p className="clinical-case-note">
        Relato de um caso individual, sem identificação do paciente. Cada
        situação é avaliada separadamente e desfechos semelhantes não são
        garantidos.
      </p>
    </article>
  );
}
