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
  {
    name: "vex-button",
    type: "registry:ui",
    title: "Button",
    description:
      "Triggers an action. Five style variants and three sizes, with loading and disabled states plus leading/trailing icon slots.",
    author: REGISTRY_AUTHOR,
    dependencies: ["class-variance-authority"],
    files: [
      {
        diskPath: "registry/default/ui/vex-button.tsx",
        registryPath: "ui/vex-button.tsx",
        type: "registry:ui",
        target: "",
      },
    ],
  },
  {
    name: "vex-input",
    type: "registry:ui",
    title: "Input",
    description:
      "Single-line text field. Supports labels, hints, error states, leading/trailing icons, and any native input type. Three sizes, with disabled state and accessible label/error wiring.",
    author: REGISTRY_AUTHOR,
    dependencies: ["class-variance-authority"],
    files: [
      {
        diskPath: "registry/default/ui/vex-input.tsx",
        registryPath: "ui/vex-input.tsx",
        type: "registry:ui",
        target: "",
      },
    ],
  },
  {
    name: "vex-card",
    type: "registry:ui",
    title: "Card",
    description:
      "A surface container with padding, a border, and a subtle background. The base for most layout compositions — forwards className and all native div attributes.",
    author: REGISTRY_AUTHOR,
    files: [
      {
        diskPath: "registry/default/ui/vex-card.tsx",
        registryPath: "ui/vex-card.tsx",
        type: "registry:ui",
        target: "",
      },
    ],
  },
  {
    name: "vex-modal",
    type: "registry:ui",
    title: "Modal",
    description:
      "An accessible dialog with focus trap, ESC-to-close, and overlay click handling. Built on Radix Dialog primitives. Controlled via open/onClose; supports title, optional description, footer slot, and children body.",
    author: REGISTRY_AUTHOR,
    dependencies: ["@radix-ui/react-dialog"],
    files: [
      {
        diskPath: "registry/default/ui/vex-modal.tsx",
        registryPath: "ui/vex-modal.tsx",
        type: "registry:ui",
        target: "",
      },
    ],
  },
  {
    name: "vex-badge",
    type: "registry:ui",
    title: "Badge",
    description:
      "Compact status indicator. Six variants — default, teal, success, warning, danger, outline — using the role-token color set with tinted backgrounds and matching foreground text.",
    author: REGISTRY_AUTHOR,
    files: [
      {
        diskPath: "registry/default/ui/vex-badge.tsx",
        registryPath: "ui/vex-badge.tsx",
        type: "registry:ui",
        target: "",
      },
    ],
  },
];

export function getRegistryItem(name: string): RegistrySource | undefined {
  return REGISTRY_ITEMS.find((item) => item.name === name);
}
