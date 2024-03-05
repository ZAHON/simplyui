import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '@/components/label';
import { Input } from '.';

const meta: Meta<typeof Input> = {
  title: 'Inputs/Input',
  component: Input,
  args: {
    placeholder: 'Search the docs…',
    variant: 'default',
    size: '2',
    radius: 'md',
    type: 'text',
    disabled: false,
    invalid: false,
    required: false,
  },
  argTypes: {
    variant: { control: 'select' },
    size: { control: 'select' },
    radius: { control: 'select' },
    type: { control: 'select' },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const WithLabel: Story = {
  render: ({ size, disabled, ...others }) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', rowGap: '0.25rem' }}>
        <Label htmlFor="test" size={size} disabled={disabled}>
          Search the docs…
        </Label>
        <Input id="test" size={size} disabled={disabled} {...others} />
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Invalid: Story = {
  args: {
    invalid: true,
  },
};
