import Image from "next/image";

/** Contexto ilustrativo decorativo, sem representar o consultório do profissional. */
export function SectionBackdrop() {
  return (
    <div className="section-backdrop" aria-hidden="true">
      <Image
        src="/images/editorial/consulta-contexto.webp"
        alt=""
        fill
        sizes="100vw"
      />
    </div>
  );
}
