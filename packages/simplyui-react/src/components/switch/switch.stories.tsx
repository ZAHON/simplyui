import type { Meta, StoryObj } from '@storybook/react';
import * as Label from '@/components/label';
import * as Switch from '.';

const meta: Meta<typeof Switch.Root> = {
  title: 'Inputs/Switch',
  component: Switch.Root,
  args: {
    variant: 'default',
    size: '2',
    color: 'primary',
    radius: 'full',
    disabled: false,
    invalid: false,
    required: false,
    name: '',
    value: 'on',
    children: <Switch.Thumb />,
  },
  argTypes: {
    variant: { options: ['default', 'filled'], control: 'select' },
    size: { options: ['1', '2', '3', '4'], control: 'select' },
    color: { options: ['default', 'primary', 'success', 'warning', 'danger'], control: 'select' },
    radius: { options: ['none', 'sm', 'md', 'lg', 'xl', 'full'], control: 'select' },
    asChild: { control: false },
    defaultChecked: { control: false },
    checked: { control: false },
    onCheckedChange: { control: false },
    children: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Switch.Root>;

export const Default: Story = {};

export const WithLabel: Story = {
  render: ({ size, disabled, ...others }) => {
    return (
      <div style={{ display: 'flex', alignItems: 'center', columnGap: '0.5rem' }}>
        <Switch.Root id="test" size={size} disabled={disabled} {...others}>
          <Switch.Thumb />
        </Switch.Root>
        <Label.Root size={size} disabled={disabled} htmlFor="test">
          Sync settings
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

export const WithThumbIcon: Story = {
  render: ({ size, ...others }) => {
    const iconSizes = {
      '1': 12,
      '2': 16,
      '3': 18,
      '4': 20,
    };

    return (
      <Switch.Root size={size} {...others}>
        <Switch.Thumb>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={iconSizes[size as NonNullable<typeof size>]}
            width={iconSizes[size as NonNullable<typeof size>]}
            aria-hidden="true"
            focusable="false"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            className="icon icon-tabler icon-tabler-bell"
            viewBox="0 0 24 24"
          >
            <path stroke="none" d="M0 0h24v24H0z"></path>
            <path d="M10 5a2 2 0 114 0 7 7 0 014 6v3a4 4 0 002 3H4a4 4 0 002-3v-3a7 7 0 014-6M9 17v1a3 3 0 006 0v-1"></path>
          </svg>
        </Switch.Thumb>
      </Switch.Root>
    );
  },
};
