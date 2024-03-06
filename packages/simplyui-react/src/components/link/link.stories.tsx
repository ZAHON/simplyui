import type { Meta, StoryObj } from '@storybook/react';
import { Link } from '.';

const meta: Meta<typeof Link> = {
  title: 'Navigation/Link',
  component: Link,
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    color: 'primary',
    disabled: false,
    external: false,
    href: '#',
    tracking: 'normal',
    size: '3',
    underline: 'none',
    weight: 'regular',
  },
  argTypes: {
    color: { control: 'select' },
    tracking: { control: 'select' },
    size: { control: 'select' },
    underline: { control: 'select' },
    weight: { control: 'select' },
    asChild: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const UnderlineActive: Story = {
  args: {
    underline: 'active',
  },
};

export const UnderlineAlways: Story = {
  args: {
    underline: 'always',
  },
};

export const UnderlineFocus: Story = {
  args: {
    underline: 'focus',
  },
};

export const UnderlineHover: Story = {
  args: {
    underline: 'hover',
  },
};

export const UnderlineNone: Story = {
  args: {
    underline: 'none',
  },
};

export const WithIcon: Story = {
  render: ({ size, children, ...others }) => {
    const iconSizes = {
      '1': 16,
      '2': 20,
      '3': 24,
      '4': 28,
      '5': 28,
      '6': 32,
      '7': 36,
      '8': 40,
      '9': 72,
    };

    return (
      <Link size={size} {...others}>
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
          <path d="M9 15l6-6M11 6l.463-.536a5 5 0 017.071 7.072L18 13M13 18l-.397.534a5.068 5.068 0 01-7.127 0 4.972 4.972 0 010-7.071L6 11"></path>
        </svg>
        {children}
      </Link>
    );
  },
};
