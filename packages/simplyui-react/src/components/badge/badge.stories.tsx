import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '.';

const meta: Meta<typeof Badge> = {
  title: 'Data Display/Badge',
  component: Badge,
  args: {
    children: 'Badge',
    color: 'primary',
    radius: 'full',
    size: 'md',
    variant: 'light',
  },
  argTypes: {
    color: { control: 'select' },
    radius: { control: 'select' },
    size: { control: 'select' },
    variant: { control: 'select' },
    asChild: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {};

export const WithIcon: Story = {
  render: ({ size, children, ...others }) => {
    const iconSizes = {
      sm: 14,
      md: 16,
      lg: 18,
    };

    return (
      <Badge size={size} {...others}>
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
          className="icon icon-tabler icon-tabler-shield"
          viewBox="0 0 24 24"
        >
          <path stroke="none" d="M0 0h24v24H0z"></path>
          <path d="M12 3a12 12 0 008.5 3A12 12 0 0112 21 12 12 0 013.5 6 12 12 0 0012 3"></path>
        </svg>
        {children}
      </Badge>
    );
  },
};
