import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Badge } from "@/registry/default/ui/vex-badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["default", "teal", "success", "warning", "danger", "outline"],
    },
    children: { control: "text" },
  },
  args: {
    variant: "default",
    children: "Default",
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
