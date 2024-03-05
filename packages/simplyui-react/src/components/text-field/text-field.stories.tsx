import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '@/components/label';
import { TextField } from '.';

const meta: Meta<typeof TextField> = {
  title: 'Inputs/TextField',
  component: TextField,
  args: {
    variant: 'default',
    size: '2',
    radius: 'md',
    disabled: false,
    invalid: false,
    required: false,
    children: <TextField.Input placeholder="Search the docs…" />,
  },
  argTypes: {
    variant: { control: 'select' },
    size: { control: 'select' },
    radius: { control: 'select' },
    asChild: { control: false },
    children: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {};

export const WithLabel: Story = {
  render: ({ size, disabled, ...others }) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', rowGap: '0.25rem' }}>
        <Label htmlFor="test" size={size} disabled={disabled}>
          Search the docs…
        </Label>
        <TextField size={size} disabled={disabled} {...others}>
          <TextField.Input id="test" />
        </TextField>
      </div>
    );
  },
};

export const WithSlots: Story = {
  render: ({ size, ...others }) => {
    const iconSizes = {
      '1': 14,
      '2': 16,
      '3': 18,
      '4': 20,
    };

    return (
      <TextField size={size} {...others}>
        <TextField.Slot>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={iconSizes[size as NonNullable<typeof size>]}
            height={iconSizes[size as NonNullable<typeof size>]}
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>
        </TextField.Slot>
        <TextField.Input placeholder="Search the docs…" />
        <TextField.Slot>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={iconSizes[size as NonNullable<typeof size>]}
            height={iconSizes[size as NonNullable<typeof size>]}
            aria-hidden="true"
            focusable="false"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            className="icon icon-tabler icon-tabler-dots"
            viewBox="0 0 24 24"
          >
            <path stroke="none" d="M0 0h24v24H0z"></path>
            <path d="M4 12a1 1 0 102 0 1 1 0 10-2 0M11 12a1 1 0 102 0 1 1 0 10-2 0M18 12a1 1 0 102 0 1 1 0 10-2 0"></path>
          </svg>
        </TextField.Slot>
      </TextField>
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
