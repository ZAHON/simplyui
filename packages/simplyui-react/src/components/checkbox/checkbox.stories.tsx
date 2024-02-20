import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '@/components/label';
import { Checkbox } from '.';

const meta: Meta<typeof Checkbox> = {
  title: 'Inputs/Checkbox',
  component: Checkbox,
  args: {
    defaultChecked: false,
    size: 'md',
    radius: 'md',
    variant: 'default',
    color: 'primary',
    disabled: false,
    invalid: false,
    required: false,
    name: 'checkbox',
    value: 'on',
    children: <Checkbox.Indicator />,
  },
  argTypes: {
    size: { control: 'select' },
    radius: { control: 'select' },
    variant: { control: 'select' },
    color: { control: 'select' },
    checked: { control: false },
    onCheckedChange: { control: false },
    children: { control: false },
    asChild: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};

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

export const VariantDefault: Story = {
  args: {
    variant: 'default',
  },
};

export const VariantFilled: Story = {
  args: {
    variant: 'filled',
  },
};

export const WithLabel: Story = {
  render: ({ size, disabled, ...others }) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', columnGap: '0.5rem' }}>
        <Checkbox id="test" size={size} disabled={disabled} {...others}>
          <Checkbox.Indicator />
        </Checkbox>
        <Label htmlFor="test" size={size} disabled={disabled}>
          Agree to Terms and Conditions
        </Label>
      </div>
    );
  },
};

export const WithCustomIcon: Story = {
  render: ({ ...others }) => {
    return (
      <Checkbox {...others}>
        <Checkbox.Indicator>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            aria-hidden="true"
            focusable="false"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            className="icon icon-tabler icon-tabler-heart"
            viewBox="0 0 24 24"
          >
            <path stroke="none" d="M0 0h24v24H0z"></path>
            <path d="M19.5 12.572L12 20l-7.5-7.428A5 5 0 1112 6.006a5 5 0 117.5 6.572"></path>
          </svg>
        </Checkbox.Indicator>
      </Checkbox>
    );
  },
};
