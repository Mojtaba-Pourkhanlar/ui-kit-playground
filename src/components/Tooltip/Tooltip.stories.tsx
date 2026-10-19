import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Tooltip } from "./Tooltip";
import { Button } from "../Button/Button";

const meta: Meta<typeof Tooltip> = {
  title: "Design System/Atoms/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
    position: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    content: "Deploy to Production",
    position: "top",
    children: <Button label="Hover Me" variant="primary" />,
  },
};

export const RightAligned: Story = {
  args: {
    content: "Keyboard shortcut: ⌘K",
    position: "right",
    children: <Button label="Quick Actions" variant="secondary" />,
  },
};
