"use client";

import { Search } from "lucide-react";

import { useSearch } from "@/components/shell/search-provider";

export function SearchTrigger() {
  const { setOpen } = useSearch();

  return (
    <button
      type="button"
      onClick={() => setOpen(true)}
      aria-label="Search documentation"
      className="hidden h-9 w-72 items-center gap-2 rounded-md border border-wuko-border bg-wuko-card px-3 text-left text-sm text-wuko-text-muted transition-colors hover:border-wuko-text-muted focus-visible:border-wuko-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wuko-accent/30 md:inline-flex"
    >
      <Search size={14} aria-hidden className="text-wuko-text-muted" />
      <span className="flex-1">Search docs…</span>
      <kbd className="pointer-events-none inline-flex items-center gap-0.5 rounded border border-wuko-border bg-wuko-bg px-1.5 py-0.5 font-mono text-[10px] text-wuko-text-muted">
        <span className="text-[11px]">⌘</span>K
      </kbd>
    </button>
  );
}
