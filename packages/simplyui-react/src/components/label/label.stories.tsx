import type { Meta, StoryObj } from '@storybook/react';
import * as Label from '.';

const meta: Meta<typeof Label.Root> = {
  title: 'Typography/Label',
  component: Label.Root,
  args: {
    children: 'This is a label element.',
    size: '3',
    tracking: 'normal',
    weight: 'regular',
    disabled: false,
    htmlFor: 'id',
  },
  argTypes: {
    size: { options: ['1', '2', '3', '4', '5', '6', '7', '8', '9'], control: 'select' },
    tracking: { options: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest'], control: 'select' },
    weight: { options: ['light', 'regular', 'medium', 'semibold', 'bold'], control: 'select' },
    asChild: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Label.Root>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithIndicator: Story = {
  render: ({ children, ...others }) => {
    return (
      <Label.Root {...others}>
        {children}
        <Label.Indicator />
      </Label.Root>
    );
  },
};
