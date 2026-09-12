import { ArrowUpRight } from "lucide-react";
import type { ComponentType, ReactNode } from "react";

type ButtonContentProps = {
  children: ReactNode;
  icon?: ComponentType<{ size?: number }>;
  /** Variação do ícone; ambos permanecem fixos durante hover e foco. */
  seal?: "arrow" | "whatsapp";
};

export function ButtonContent({
  children,
  icon: Icon = ArrowUpRight,
  seal = "arrow",
}: ButtonContentProps) {
  return (
    <>
      <span className="button-label">{children}</span>
      <span className={"button-circle button-circle-" + seal} aria-hidden="true">
        <Icon size={seal === "whatsapp" ? 20 : 15} />
      </span>
    </>
  );
}
