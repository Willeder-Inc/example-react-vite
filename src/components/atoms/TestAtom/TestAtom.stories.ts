import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import TestAtom from '.'

const meta = {
  title: 'Example/Button',
  component: TestAtom,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof TestAtom>

export default meta
type Story = StoryObj<typeof meta>

export const TestAtomComponent: Story = {
  args: {},
}
