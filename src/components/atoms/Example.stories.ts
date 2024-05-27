import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Button } from '@willeder/component-library'

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const PrimaryWilleder: Story = {
  args: {
    className: 'filled',
    children: 'Willeder Button',
  },
}
