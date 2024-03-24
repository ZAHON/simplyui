import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import * as Burger from '.';

const meta: Meta<typeof Burger.Root> = {
  title: 'Navigation/Burger',
  component: Burger.Root,
  args: {
    color: 'default',
    variant: 'subtle',
    size: '2',
    radius: 'md',
    disabled: false,
    children: <Burger.Icon />,
  },
  argTypes: {
    color: { options: ['default', 'primary', 'success', 'warning', 'danger'], control: 'select' },
    variant: { options: ['filled', 'light', 'outline', 'subtle', 'light-outline'], control: 'select' },
    size: { options: ['1', '2', '3', '4'], control: 'select' },
    radius: { options: ['none', 'sm', 'md', 'lg', 'xl', 'full'], control: 'select' },
    asChild: { control: false },
    defaultOpen: { control: false },
    open: { control: false },
    onOpenChange: { control: false },
    children: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Burger.Root>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <Burger.Root asChild open={open} onOpenChange={setOpen}>
        <div>
          <Burger.Icon />
        </div>
      </Burger.Root>
    );
  },
};
