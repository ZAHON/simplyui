import type { Meta, StoryObj } from '@storybook/react';
import * as Label from '@/components/label';
import * as NativeSelect from '.';

const meta: Meta<typeof NativeSelect.Root> = {
  title: 'Inputs/NativeSelect',
  component: NativeSelect.Root,
  args: {
    disabled: false,
    invalid: false,
    radius: 'md',
    required: false,
    size: '2',
    variant: 'default',
    children: (
      <>
        <NativeSelect.Input>
          <option value="angular">Angular</option>
          <option value="react">React</option>
          <option value="svelte">Svelte</option>
          <option value="vue">Vue</option>
        </NativeSelect.Input>
        <NativeSelect.Icon />
      </>
    ),
  },
  argTypes: {
    radius: { options: ['none', 'sm', 'md', 'lg', 'xl', 'full'], control: 'select' },
    size: { options: ['1', '2', '3', '4'], control: 'select' },
    variant: { options: ['default', 'filled', 'filled-outline'], control: 'select' },
    asChild: { control: false },
    children: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof NativeSelect.Root>;

export const Default: Story = {};

export const WithPlaceholder: Story = {
  args: {
    children: (
      <>
        <NativeSelect.Input placeholder="Select your favorite framework/library">
          <option value="angular">Angular</option>
          <option value="react">React</option>
          <option value="svelte">Svelte</option>
          <option value="vue">Vue</option>
        </NativeSelect.Input>
        <NativeSelect.Icon />
      </>
    ),
  },
};

export const WithSlot: Story = {
  render: ({ size, ...others }) => {
    const iconSizes = {
      '1': 14,
      '2': 16,
      '3': 18,
      '4': 20,
    };

    return (
      <NativeSelect.Root size={size} {...others}>
        <NativeSelect.Slot>
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
            viewBox="0 0 24 24"
          >
            <path stroke="none" d="M0 0h24v24H0z"></path>
            <path d="M4 7h16M4 17h16M7 4v16M17 4v16"></path>
          </svg>
        </NativeSelect.Slot>
        <NativeSelect.Input id="test">
          <option value="angular">Angular</option>
          <option value="react">React</option>
          <option value="svelte">Svelte</option>
          <option value="vue">Vue</option>
        </NativeSelect.Input>
        <NativeSelect.Icon />
      </NativeSelect.Root>
    );
  },
};

export const WithLabel: Story = {
  render: ({ size, disabled, ...others }) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', rowGap: '0.25rem' }}>
        <Label.Root htmlFor="test" size={size} disabled={disabled}>
          Select your favorite framework/library
        </Label.Root>
        <NativeSelect.Root size={size} disabled={disabled} {...others}>
          <NativeSelect.Input id="test">
            <option value="angular">Angular</option>
            <option value="react">React</option>
            <option value="svelte">Svelte</option>
            <option value="vue">Vue</option>
          </NativeSelect.Input>
          <NativeSelect.Icon />
        </NativeSelect.Root>
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
