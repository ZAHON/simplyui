import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '@/components/avatar';
import { Indicator } from '.';

const meta: Meta<typeof Indicator> = {
  title: 'Data Display/Indicator',
  component: Indicator,
  args: {
    children: (
      <>
        <Indicator.Dot />
        <Avatar>
          <Avatar.Image
            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
            alt="A"
          />
          <Avatar.Fallback>A</Avatar.Fallback>
        </Avatar>
      </>
    ),
  },
  argTypes: {
    asChild: { control: false },
    children: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Indicator>;

export const Default: Story = {};

export const WithProcessingDot: Story = {
  args: {
    children: (
      <>
        <Indicator.Dot processing color="danger" />
        <Avatar>
          <Avatar.Image
            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
            alt="A"
          />
          <Avatar.Fallback>A</Avatar.Fallback>
        </Avatar>
      </>
    ),
  },
};

export const WithBorderDot: Story = {
  args: {
    children: (
      <>
        <Indicator.Dot withBorder />
        <Avatar>
          <Avatar.Image
            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
            alt="A"
          />
          <Avatar.Fallback>A</Avatar.Fallback>
        </Avatar>
      </>
    ),
  },
};

export const WithOffsetDot: Story = {
  args: {
    children: (
      <>
        <Indicator.Dot offset={4} position="bottom-end" withBorder />
        <Avatar radius="full">
          <Avatar.Image
            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
            alt="A"
          />
          <Avatar.Fallback>A</Avatar.Fallback>
        </Avatar>
      </>
    ),
  },
};
