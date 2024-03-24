import type { Meta, StoryObj } from '@storybook/react';
import * as Label from '@/components/label';
import * as Checkbox from '.';

const meta: Meta<typeof Checkbox.Root> = {
  title: 'Inputs/Checkbox',
  component: Checkbox.Root,
  args: {
    variant: 'default',
    color: 'primary',
    size: '2',
    radius: 'md',
    disabled: false,
    invalid: false,
    required: false,
    name: '',
    value: 'on',
    children: <Checkbox.Indicator />,
  },
  argTypes: {
    variant: { options: ['default', 'filled'], control: 'select' },
    color: { options: ['default', 'primary', 'success', 'warning', 'danger'], control: 'select' },
    radius: { options: ['none', 'sm', 'md', 'lg', 'xl', 'full'], control: 'select' },
    size: { options: ['1', '2', '3', '4'], control: 'select' },
    asChild: { control: false },
    defaultChecked: { control: false },
    checked: { control: false },
    onCheckedChange: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox.Root>;

export const Default: Story = {};

export const WithLabel: Story = {
  render: ({ size, disabled, ...others }) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', columnGap: '0.5rem' }}>
        <Checkbox.Root id="test" size={size} disabled={disabled} {...others}>
          <Checkbox.Indicator />
        </Checkbox.Root>
        <Label.Root htmlFor="test" size={size} disabled={disabled}>
          Agree to Terms and Conditions
        </Label.Root>
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

export const WithCustomIcon: Story = {
  render: ({ ...others }) => {
    return (
      <Checkbox.Root {...others}>
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
            viewBox="0 0 24 24"
          >
            <path stroke="none" d="M0 0h24v24H0z"></path>
            <path d="M19.5 12.572L12 20l-7.5-7.428A5 5 0 1112 6.006a5 5 0 117.5 6.572"></path>
          </svg>
        </Checkbox.Indicator>
      </Checkbox.Root>
    );
  },
};
