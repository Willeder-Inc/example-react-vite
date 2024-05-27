import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Input from "../Input";

const meta = {
  title: "Example/Input",
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Input>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Input Label",
    placeholder: "Placeholder",
    description: "Here goes your input Description",
    errorMessage: "Error Message",
  },
};
