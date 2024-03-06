import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from '.';

const meta: Meta<typeof Loader> = {
  title: 'Feedback/Loader',
  component: Loader,
  args: {
    size: '2',
    color: 'primary',
    variant: 'oval',
    speedSafe: 1000,
    speedReduce: 1500,
    label: 'Loading, please wait...',
  },
  argTypes: {
    size: { control: 'select' },
    color: { control: 'select' },
    variant: { control: 'select' },
    loaderSize: { control: 'text' },
    ref: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Default: Story = {};

export const VariantOval: Story = {
  args: {
    variant: 'oval',
  },
};

export const VariantDots: Story = {
  args: {
    variant: 'dots',
  },
};

export const CustomSize: Story = {
  args: {
    loaderSize: '5rem',
  },
};
