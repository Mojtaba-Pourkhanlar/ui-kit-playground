import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

// تعریف متادیتاهای کامپوننت در استوری‌بوک
const meta: Meta<typeof Badge> = {
  title: "Design System/Atoms/Badge",
  component: Badge,
  tags: ["autodocs"], // تولید داکیومنت خودکار برای کامپوننت!
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

// استوری اول: حالت پیش‌فرض
export const Primary: Story = {
  args: {
    label: "Next.js 15",
    variant: "primary",
    size: "md",
  },
};

// استوری دوم: حالت اخطار یا خطر
export const Danger: Story = {
  args: {
    label: "React 19 Error",
    variant: "danger",
    size: "sm",
  },
};
// استوری دوم: حالت اخطار یا خطر
export const Secondary: Story = {
  args: {
    label: "React 19 Error",
    variant: "secondary",
    size: "lg",
  },
};
