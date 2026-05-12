import type { ReactNode } from "react";

export interface H2Props {
  id?: string;
  children: ReactNode;
}

export function H2({ id, children }: H2Props) {
  return (
    <h2
      id={id}
      className="mt-10 mb-3 scroll-mt-24 text-[20px] font-semibold tracking-tight text-wuko-heading"
    >
      {children}
    </h2>
  );
}
