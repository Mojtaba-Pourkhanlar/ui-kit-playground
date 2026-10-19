import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Design System/Atoms/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "danger", "info"],
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
  args: {
    label: "Next.js 15",
    variant: "primary",
    size: "md",
  },
};

export const Danger: Story = {
  args: {
    label: "React 19 Error",
    variant: "danger",
    size: "sm",
  },
};
export const Secondary: Story = {
  args: {
    label: "React 19 Error",
    variant: "secondary",
    size: "lg",
  },
};
