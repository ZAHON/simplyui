import type { Meta, StoryObj } from '@storybook/react';
import { Code } from '.';

const meta: Meta<typeof Code> = {
  title: 'Typography/Code',
  component: Code,
  args: {
    children: 'React.createElement()',
    color: 'primary',
    radius: 'md',
    size: 'md',
    variant: 'light',
  },
  argTypes: {
    color: { control: 'select' },
    radius: { control: 'select' },
    size: { control: 'select' },
    variant: { control: 'select' },
    asChild: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Code>;

export const Default: Story = {};
