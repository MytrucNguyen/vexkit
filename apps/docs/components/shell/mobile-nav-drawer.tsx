"use client";

import { useMobileNav } from "@/components/shell/mobile-nav-provider";
import { NavList } from "@/components/shell/nav-list";

export function MobileNavDrawer() {
  const { open, closeDrawer } = useMobileNav();

  return (
    <>
      {open && (
        <div
          onClick={closeDrawer}
          aria-hidden
          className="vk-backdrop fixed inset-0 z-40"
        />
      )}
      <aside
        className={[
          "fixed left-0 top-14 z-40 h-[calc(100vh-3.5rem)] w-64 overflow-y-auto",
          "border-r border-wuko-border bg-wuko-bg",
          "transition-transform duration-200 ease-out",
          open ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        <NavList onNavigate={closeDrawer} />
      </aside>
    </>
  );
}
