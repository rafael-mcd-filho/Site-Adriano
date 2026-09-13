import Image from "next/image";

const illustrations = {
  bite: { title: "Arcadas e contato da mordida", labels: ["Arcada superior", "Arcada inferior", "Contato entre os dentes"] },
  air: { title: "Maxilares e passagem de ar", labels: ["Maxila", "Mandíbula", "Passagem de ar"] },
  implant: { title: "Implante, prótese e suporte ósseo", labels: ["Coroa da prótese", "Implante", "Osso de suporte"] },
  layers: { title: "Região considerada no planejamento da reconstrução", labels: ["Futura reabilitação", "Região a avaliar", "Osso disponível"] },
  joint: { title: "Articulação da mandíbula e músculos", labels: ["Disco articular", "Côndilo da mandíbula", "Região muscular"] },
  alignment: { title: "Maxilares e relação entre as arcadas", labels: ["Maxila", "Mandíbula", "Mordida"] },
  wisdom: { title: "Siso incluso e estruturas próximas", labels: ["Siso incluso", "Dente vizinho", "Canal da mandíbula"] },
  "wisdom-positions": { title: "Posições possíveis do siso", labels: ["Erupcionado", "Parcialmente erupcionado", "Incluso"] },
} as const;

export type AnatomyIllustrationType = keyof typeof illustrations;

export function AnatomyIllustration({ type }: { type: AnatomyIllustrationType }) {
  const item = illustrations[type];
  return (
    <figure className="anatomy-illustration">
      <Image src={`/images/diagrams/${type}.svg`} width={600} height={400} alt={item.title} sizes="(max-width: 800px) 90vw, 500px" />
      <ol className="anatomy-legend">
        {item.labels.map((label, index) => <li key={label}><b>{index + 1}</b>{label}</li>)}
      </ol>
      <figcaption>Ilustração educativa esquemática. Não representa um caso individual.</figcaption>
    </figure>
  );
}
