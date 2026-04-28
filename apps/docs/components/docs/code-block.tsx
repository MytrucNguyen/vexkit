import { Code2 } from "lucide-react";

export interface CodeBlockProps {
  code: string;
  lang?: string;
  filename?: string;
}

export function CodeBlock({ code, lang = "tsx", filename }: CodeBlockProps) {
  const label = filename ?? lang;

  return (
    <div className="overflow-hidden rounded-lg border border-vex-border bg-vex-card/40">
      <div className="flex min-h-9 items-center justify-between gap-3 border-b border-vex-border/70 bg-vex-card/60 px-3.5 py-2">
        <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-wider text-vex-text-muted">
          <Code2 aria-hidden="true" className="h-3.5 w-3.5" />
          <span>{label}</span>
        </div>
        <div aria-hidden="true" className="h-5 w-5" />
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-[12.5px] leading-relaxed text-vex-text">
        <code>{code}</code>
      </pre>
    </div>
  );
}
