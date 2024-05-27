import type { Meta, StoryObj } from "@storybook/react";
import Button from "..";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonDefault: Story = {
  args: {
    children: "Button",
    loaderComponent: "Loading...",
  },
};

export const ButtonWithIcon: Story = {
  args: {
    children: "Button",
    loaderComponent: "Loading...",
    icon: "🚀",
  },
};

export const LoadingDefault: Story = {
  args: {
    children: "Button",
    isLoading: true,
  },
};

export const LoadingWithCustom: Story = {
  args: {
    children: "Button",
    isLoading: true,
    loaderComponent: "Loading...",
  },
};
