import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from '@/components/loader';
import * as IconButton from '.';

const meta: Meta<typeof IconButton.Root> = {
  title: 'Buttons/IconButton',
  component: IconButton.Root,
  args: {
    size: '2',
    radius: 'md',
    type: 'button',
    variant: 'subtle',
    color: 'default',
    disabled: false,
    loading: false,
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
    const iconSizes = {
      '1': 15,
      '2': 18,
      '3': 22,
      '4': 26,
    };

    return (
      <IconButton.Root size={size} {...others}>
        <IconButton.Content>
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
            viewBox="0 0 24 24"
          >
            <path stroke="none" d="M0 0h24v24H0z"></path>
            <path d="M3 10a7 7 0 1014 0 7 7 0 10-14 0M21 21l-6-6"></path>
          </svg>
        </IconButton.Content>
        <IconButton.Loader>
          <Loader size={size} variant="oval" color="currentColor" />
        </IconButton.Loader>
      </IconButton.Root>
    );
  },
};

export default meta;
type Story = StoryObj<typeof IconButton.Root>;

export const Default: Story = {};

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
