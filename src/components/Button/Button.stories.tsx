import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Design System/Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "danger", "outline"],
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
    isLoading: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Save Changes",
    variant: "primary",
    size: "md",
  },
};

export const Secondary: Story = {
  args: {
    label: "Cancel",
    variant: "secondary",
    size: "md",
  },
};

export const Danger: Story = {
  args: {
    label: "Delete Project",
    variant: "danger",
    size: "md",
  },
};

export const Loading: Story = {
  args: {
    label: "Deploying...",
    variant: "primary",
    size: "md",
    isLoading: true,
  },
};
