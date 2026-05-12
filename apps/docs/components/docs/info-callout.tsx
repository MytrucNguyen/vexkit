import { Info } from "lucide-react";
import type { ReactNode } from "react";

export interface InfoCalloutProps {
  title?: string;
  children: ReactNode;
}

export function InfoCallout({ title, children }: InfoCalloutProps) {
  return (
    <div className="my-4 flex w-full gap-3 rounded-lg border border-wuko-accent/30 bg-wuko-accent/10 p-4">
      <Info
        aria-hidden="true"
        className="mt-0.5 h-4 w-4 shrink-0 text-wuko-accent"
      />
      <div className="min-w-0 flex-1">
        {title && (
          <div className="mb-1 text-sm font-semibold text-wuko-accent">
            {title}
          </div>
        )}
        <div className="text-[13.5px] leading-relaxed text-wuko-text">
          {children}
        </div>
      </div>
    </div>
  );
}
