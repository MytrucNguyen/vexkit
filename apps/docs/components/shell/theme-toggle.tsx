"use client";

import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const toggle = () => {
    const next =
      document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("vex-theme", next);
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      className="wk-ring inline-flex h-9 w-9 items-center justify-center rounded-md border border-wuko-border bg-wuko-card/60 text-wuko-text transition-colors hover:text-wuko-heading light:bg-wuko-card"
    >
      <Sun size={18} aria-hidden className="light:hidden" />
      <Moon size={18} aria-hidden className="hidden light:inline" />
    </button>
  );
}
