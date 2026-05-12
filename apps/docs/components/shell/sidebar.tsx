import { NavList } from "@/components/shell/nav-list";

export function Sidebar() {
  return (
    <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-64 shrink-0 overflow-y-auto border-r border-wuko-border bg-wuko-bg lg:block">
      <NavList />
    </aside>
  );
}
