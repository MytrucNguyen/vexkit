import type { RegistrySource } from "./types";

export const REGISTRY_AUTHOR =
  "VexKit (https://github.com/MytrucNguyen/vexkit)";

export const REGISTRY_NAME = "vexkit";

export const REGISTRY_ITEMS: RegistrySource[] = [
  {
    name: "vex-placeholder",
    type: "registry:ui",
    title: "Placeholder",
    description:
      "Phase 3 plumbing test for the VexKit registry. Real primitives ship from Phase 5 onward.",
    author: REGISTRY_AUTHOR,
    files: [
      {
        diskPath: "registry/default/ui/vex-placeholder.tsx",
        registryPath: "ui/vex-placeholder.tsx",
        type: "registry:ui",
        target: "",
      },
    ],
  },
];

export function getRegistryItem(name: string): RegistrySource | undefined {
  return REGISTRY_ITEMS.find((item) => item.name === name);
}
