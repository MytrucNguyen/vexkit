"use client";

import { Search } from "lucide-react";

import { useSearch } from "@/components/shell/search-provider";

export function MobileSearchTrigger() {
  const { setOpen } = useSearch();

  return (
    <button
      type="button"
      onClick={() => setOpen(true)}
      aria-label="Search documentation"
      className="wk-ring inline-flex h-9 w-9 items-center justify-center rounded-md border border-wuko-border bg-wuko-card/60 text-wuko-text transition-colors hover:text-wuko-heading md:hidden"
    >
      <Search size={16} aria-hidden />
    </button>
  );
}
