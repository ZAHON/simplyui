import type { Meta, StoryObj } from '@storybook/react';
import { CloseButton } from '.';

const meta: Meta<typeof CloseButton> = {
  title: 'Buttons/CloseButton',
  component: CloseButton,
  args: {
    size: 'md',
    radius: 'md',
    type: 'button',
    variant: 'subtle',
    color: 'default',
    disabled: false,
    children: <CloseButton.Icon />,
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
};

export default meta;
type Story = StoryObj<typeof CloseButton>;

export const Default: Story = {};

export const WithCustomIcon: Story = {
  render: ({ size, ...others }) => {
    const iconsizes = {
      sm: 15,
      md: 18,
      lg: 22,
      xl: 26,
    };

    return (
      <CloseButton size={size} {...others}>
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
          className="icon icon-tabler icon-tabler-eye-x"
          viewBox="0 0 24 24"
        >
          <path stroke="none" d="M0 0h24v24H0z"></path>
          <path d="M10 12a2 2 0 104 0 2 2 0 00-4 0"></path>
          <path d="M13.048 17.942A9.298 9.298 0 0112 18c-3.6 0-6.6-2-9-6 2.4-4 5.4-6 9-6 3.6 0 6.6 2 9 6a17.986 17.986 0 01-1.362 1.975M22 22l-5-5M17 22l5-5"></path>
        </svg>
      </CloseButton>
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
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
