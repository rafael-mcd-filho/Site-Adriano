import { BadgeCheck } from "lucide-react";

type TrustMarqueeProps = {
  items: readonly [string, string, string, string];
};

/** Um único conjunto acessível; a cópia visual fecha o ciclo da animação. */
function Track({
  items,
  duplicate = false,
}: TrustMarqueeProps & { duplicate?: boolean }) {
  return (
    <div className="trust-set" aria-hidden={duplicate || undefined}>
      {items.map(label => (
        <span className="trust-item" key={label}>
          <BadgeCheck size={22} aria-hidden="true" />
          {label}
        </span>
      ))}
    </div>
  );
}

export function TrustMarquee({ items }: TrustMarqueeProps) {
  return (
    <aside
      id="credenciais"
      className="trust-bar"
      aria-label="Destaques do atendimento"
    >
      <div className="trust-window">
        <div className="trust-track">
          <Track items={items} />
          <Track items={items} duplicate />
        </div>
      </div>
    </aside>
  );
}
