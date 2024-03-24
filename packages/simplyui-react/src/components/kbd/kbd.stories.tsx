import type { Meta, StoryObj } from '@storybook/react';
import { Kbd } from '.';

const meta: Meta<typeof Kbd> = {
  title: 'Typography/Kbd',
  component: Kbd,
  args: {
    children: '⌘ + Tab',
    radius: 'md',
    size: '2',
  },
  argTypes: {
    radius: { control: 'select' },
    size: { control: 'select' },
    asChild: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Kbd>;

export const Default: Story = {};
