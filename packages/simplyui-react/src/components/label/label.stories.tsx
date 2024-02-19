import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '.';

const meta: Meta<typeof Label> = {
  title: 'Inputs/Label',
  component: Label,
  args: {
    htmlFor: 'id',
    children: 'Label',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    size: { control: 'select' },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const SizeSM: Story = {
  args: {
    size: 'sm',
  },
};

export const SizeMD: Story = {
  args: {
    size: 'md',
  },
};

export const SizeLG: Story = {
  args: {
    size: 'lg',
  },
};

export const SizeXL: Story = {
  args: {
    size: 'xl',
  },
};
