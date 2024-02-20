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
