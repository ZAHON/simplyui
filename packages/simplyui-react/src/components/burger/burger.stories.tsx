import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Burger } from '.';

const meta: Meta<typeof Burger> = {
  title: 'Navigation/Burger',
  component: Burger,
  args: {
    disabled: false,
    radius: 'md',
    size: 'md',
    children: <Burger.Icon />,
  },
  argTypes: {
    radius: { control: 'select' },
    size: { control: 'select' },
    asChild: { control: false },
    defaultOpen: { control: false },
    open: { control: false },
    onOpenChange: { control: false },
    children: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Burger>;

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
      <Burger asChild open={open} onOpenChange={setOpen}>
        <div>
          <Burger.Icon />
        </div>
      </Burger>
    );
  },
};
