import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Design System/Atoms/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: "Username",
    placeholder: "e.g. mojtaba_dev",
    helperText: "Enter your public handle",
  },
};

export const WithError: Story = {
  args: {
    label: "Email Address",
    defaultValue: "invalid-email@",
    error: "Please provide a valid RFC-compliant email address.",
  },
};

export const Disabled: Story = {
  args: {
    label: "API Key",
    defaultValue: "sk-proj-****************",
    disabled: true,
  },
};
