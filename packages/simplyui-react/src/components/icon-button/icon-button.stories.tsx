import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from '@/components/loader';
import { IconButton } from '.';

const meta: Meta<typeof IconButton> = {
  title: 'Buttons/IconButton',
  component: IconButton,
  args: {
    size: 'md',
    radius: 'md',
    type: 'button',
    variant: 'subtle',
    color: 'default',
    disabled: false,
    loading: false,
  },
  argTypes: {
    size: { control: 'select' },
    type: { control: 'select' },
    variant: { control: 'select' },
    color: { control: 'select' },
    radius: { control: 'select' },
    children: { control: false },
    asChild: { control: false },
  },
  render: ({ size, ...others }) => {
    const iconsizes = {
      sm: 15,
      md: 18,
      lg: 22,
      xl: 26,
    };

    return (
      <IconButton size={size} {...others}>
        <IconButton.Content>
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
            className="icon icon-tabler icon-tabler-search"
            viewBox="0 0 24 24"
          >
            <path stroke="none" d="M0 0h24v24H0z"></path>
            <path d="M3 10a7 7 0 1014 0 7 7 0 10-14 0M21 21l-6-6"></path>
          </svg>
        </IconButton.Content>
        <IconButton.Loader>
          <Loader size={size} variant="oval" color="currentColor" />
        </IconButton.Loader>
      </IconButton>
    );
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

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
