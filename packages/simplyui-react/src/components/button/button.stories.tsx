import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from '@/components/loader';
import { Button } from '.';

const meta: Meta<typeof Button> = {
  title: 'Buttons/Button',
  component: Button,
  args: {
    size: 'md',
    radius: 'md',
    type: 'button',
    variant: 'filled',
    color: 'primary',
    disabled: false,
    loading: false,
    fullWidth: false,
  },
  argTypes: {
    size: { control: 'select' },
    type: { control: 'select' },
    variant: { control: 'select' },
    color: { control: 'select' },
    radius: { control: 'select' },
    children: { control: false },
  },
  render: ({ size, ...others }) => {
    return (
      <Button size={size} {...others}>
        <Button.Content>Edit profile</Button.Content>
        <Button.Loader>
          <Loader size={size} variant="dots" color="currentColor" />
        </Button.Loader>
      </Button>
    );
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const WithIcon: Story = {
  render: ({ size, ...others }) => {
    const iconsizes = {
      sm: 16,
      md: 16,
      lg: 18,
      xl: 20,
    };

    return (
      <Button size={size} {...others}>
        <Button.Content>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={iconsizes[size as NonNullable<typeof size>]}
            width={iconsizes[size as NonNullable<typeof size>]}
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
      </Button>
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

export const VariantFilled: Story = {
  args: {
    variant: 'filled',
  },
};

export const VariantLight: Story = {
  args: {
    variant: 'light',
  },
};

export const VariantOutline: Story = {
  args: {
    variant: 'outline',
  },
};

export const VariantSubtle: Story = {
  args: {
    variant: 'subtle',
  },
};
