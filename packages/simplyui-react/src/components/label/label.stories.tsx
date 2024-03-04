import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '.';

const meta: Meta<typeof Label> = {
  title: 'Inputs/Label',
  component: Label,
  args: {
    children: 'This is a label element.',
    size: '2',
    tracking: 'normal',
    weight: 'regular',
    disabled: false,
    htmlFor: 'id',
  },
  argTypes: {
    size: { control: 'select' },
    tracking: { control: 'select' },
    weight: { control: 'select' },
    asChild: { control: false },
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

export const WithIndicator: Story = {
  render: ({ children, ...others }) => {
    return (
      <Label {...others}>
        {children}
        <Label.Indicator />
      </Label>
    );
  },
};
