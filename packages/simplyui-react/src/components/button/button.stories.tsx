import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from '@/components/loader';
import * as Button from '.';

const meta: Meta<typeof Button.Root> = {
  title: 'Buttons/Button',
  component: Button.Root,
  args: {
    size: '2',
    radius: 'md',
    type: 'button',
    variant: 'filled',
    color: 'primary',
    disabled: false,
    loading: false,
    fullWidth: false,
  },
  argTypes: {
    size: { options: ['1', '2', '3', '4'], control: 'select' },
    type: { options: ['submit', 'reset', 'button'], control: 'select' },
    variant: { options: ['filled', 'light', 'outline', 'subtle', 'light-outline'], control: 'select' },
    color: { options: ['default', 'primary', 'success', 'warning', 'danger'], control: 'select' },
    radius: { options: ['none', 'sm', 'md', 'lg', 'xl', 'full'], control: 'select' },
    children: { control: false },
    asChild: { control: false },
  },
  render: ({ size, ...others }) => {
    return (
      <Button.Root size={size} {...others}>
        <Button.Content>Edit profile</Button.Content>
        <Button.Loader>
          <Loader size={size} variant="dots" color="currentColor" />
        </Button.Loader>
      </Button.Root>
    );
  },
};

export default meta;
type Story = StoryObj<typeof Button.Root>;

export const Default: Story = {};

export const WithIcon: Story = {
  render: ({ size, ...others }) => {
    const iconSizes = {
      '1': 16,
      '2': 16,
      '3': 18,
      '4': 20,
    };

    return (
      <Button.Root size={size} {...others}>
        <Button.Content>
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
            strokeWidth="1.5"
            className="icon icon-tabler icon-tabler-pencil"
            viewBox="0 0 24 24"
          >
            <path stroke="none" d="M0 0h24v24H0z"></path>
            <path d="M4 20h4L18.5 9.5a2.828 2.828 0 10-4-4L4 16v4M13.5 6.5l4 4"></path>
          </svg>
          Edit profile
        </Button.Content>
        <Button.Loader>
          <Loader size={size} variant="dots" color="currentColor" />
        </Button.Loader>
      </Button.Root>
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
};
