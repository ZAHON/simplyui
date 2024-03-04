import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from '.';

const meta: Meta<typeof Heading> = {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    as: 'h1',
    size: '6',
    color: 'foreground',
    tracking: 'tight',
    weight: 'bold',
    children: 'The quick brown fox jumps over the lazy dog',
  },
  argTypes: {
    as: { control: 'select' },
    color: { control: 'select' },
    size: { control: 'select' },
    tracking: { control: 'select' },
    weight: { control: 'select' },
    asChild: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {};

export const AsSlot: Story = {
  render: ({ children, ...others }) => {
    return (
      <Heading {...others} asChild>
        <span>{children}</span>
      </Heading>
    );
  },
};

export const AllSizes: Story = {
  render: ({ children, ...others }) => {
    const sizes = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'] as const;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', rowGap: '0.75rem' }}>
        {sizes.map((size) => (
          <Heading {...others} style={{ whiteSpace: 'nowrap' }} size={size}>
            {children}
          </Heading>
        ))}
      </div>
    );
  },
};

export const AllColors: Story = {
  render: ({ children, ...others }) => {
    const colors = ['foreground', 'default', 'primary', 'success', 'warning', 'danger'] as const;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', rowGap: '0.75rem' }}>
        {colors.map((color) => (
          <Heading {...others} color={color}>
            {children}
          </Heading>
        ))}
      </div>
    );
  },
};
