import type { Meta, StoryObj } from '@storybook/react';
import { StatusDot } from '.';

const meta: Meta<typeof StatusDot> = {
  title: 'Data Display/StatusDot',
  component: StatusDot,
  args: {
    children: '',
    color: 'primary',
    size: 'md',
  },
  argTypes: {
    color: { control: 'select' },
    size: { control: 'select' },
    asChild: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof StatusDot>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: {
    children: 'Status',
  },
};
