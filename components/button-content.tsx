import { ArrowUpRight } from "lucide-react";
import type { ComponentType, ReactNode } from "react";

type ButtonContentProps = {
  children: ReactNode;
  icon?: ComponentType<{ size?: number }>;
};

export function ButtonContent({
  children,
  icon: Icon = ArrowUpRight,
}: ButtonContentProps) {
  return (
    <>
      <span className="button-label">{children}</span>
      <span className="button-circle" aria-hidden="true">
        <Icon size={15} />
      </span>
    </>
  );
}
