"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const COMMAND = "npx shadcn@latest init";

export function InstallChip() {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const onClick = async () => {
    try {
      await navigator.clipboard.writeText(COMMAND);
    } catch {}
    setCopied(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => setCopied(false), 1400);
  };

  useEffect(
    () => () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    },
    [],
  );

  return (
    <div className="mt-7 flex items-center gap-2 rounded-lg border border-wuko-border bg-wuko-card/60 py-1.5 pl-4 pr-1.5 font-mono text-[13px] text-wuko-text light:bg-wuko-card">
      <span className="text-wuko-accent">$</span>
      <span>{COMMAND}</span>
      <button
        type="button"
        onClick={onClick}
        aria-label={copied ? "Copied install command" : "Copy install command"}
        className="vk-ring inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-wuko-text-muted transition-colors hover:bg-wuko-border/40 hover:text-wuko-heading"
      >
        {copied ? (
          <Check
            size={14}
            strokeWidth={2.5}
            aria-hidden
            className="text-wuko-accent"
          />
        ) : (
          <Copy size={14} aria-hidden />
        )}
        {copied && (
          <span className="text-[11px] uppercase tracking-wide text-wuko-accent">
            Copied
          </span>
        )}
      </button>
    </div>
  );
}
