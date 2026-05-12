import Link from "next/link";

export interface PagerLink {
  title: string;
  path: string;
}

export interface PagerProps {
  prev?: PagerLink;
  next?: PagerLink;
}

export function Pager({ prev, next }: PagerProps) {
  return (
    <div className="mt-16 grid grid-cols-2 gap-4 border-t border-wuko-border pt-8">
      {prev ? (
        <Link
          href={prev.path}
          className="group rounded-lg border border-wuko-border p-4 text-left transition-colors hover:border-wuko-accent/50 hover:bg-wuko-card/40"
        >
          <div className="mb-1 text-[11px] font-medium uppercase tracking-wider text-wuko-text-muted">
            ← Previous
          </div>
          <div className="text-sm font-semibold text-wuko-heading group-hover:text-wuko-accent">
            {prev.title}
          </div>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={next.path}
          className="group rounded-lg border border-wuko-border p-4 text-right transition-colors hover:border-wuko-accent/50 hover:bg-wuko-card/40"
        >
          <div className="mb-1 text-[11px] font-medium uppercase tracking-wider text-wuko-text-muted">
            Next →
          </div>
          <div className="text-sm font-semibold text-wuko-heading group-hover:text-wuko-accent">
            {next.title}
          </div>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
