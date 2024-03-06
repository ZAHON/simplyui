import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from '.';

const meta: Meta<typeof Separator> = {
  title: 'Misc/Separator',
  component: Separator,
  args: {
    color: 'default',
    orientation: 'horizontal',
    decorative: true,
  },
  argTypes: {
    color: { control: 'select' },
    orientation: { control: 'select' },
    asChild: { control: false },
  },
  decorators: [
    (Story) => (
      <div style={{ height: '20rem' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Default: Story = {};

export const OrientationHorizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
};

export const OrientationVertical: Story = {
  args: {
    orientation: 'vertical',
  },
};
