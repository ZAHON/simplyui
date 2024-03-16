import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '.';

const meta: Meta<typeof Text> = {
  title: 'Typography/Text',
  component: Text,
  args: {
    as: 'p',
    size: '3',
    color: 'foreground',
    tracking: 'normal',
    weight: 'regular',
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
type Story = StoryObj<typeof Text>;

export const Default: Story = {};
