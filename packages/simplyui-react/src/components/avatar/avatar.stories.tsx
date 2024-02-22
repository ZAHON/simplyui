import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '.';

const meta: Meta<typeof Avatar> = {
  title: 'Data Display/Avatar',
  component: Avatar,
  args: {
    size: 'md',
    radius: 'md',
    variant: 'light',
    color: 'primary',
    children: (
      <>
        <Avatar.Image
          src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
          alt="A"
        />
        <Avatar.Fallback delayMs={3000}>A</Avatar.Fallback>
      </>
    ),
  },
  argTypes: {
    size: { control: 'select' },
    radius: { control: 'select' },
    variant: { control: 'select' },
    color: { control: 'select' },
    children: { control: false },
    asChild: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {};

export const WithOnlyFallback: Story = {
  args: {
    children: <Avatar.Fallback>A</Avatar.Fallback>,
  },
};

export const Group: Story = {
  args: {
    radius: 'full',
  },
  render: ({ size, ...others }) => {
    return (
      <Avatar.Group spacing={size}>
        <Avatar size={size} {...others}>
          <Avatar.Image
            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
            alt="A"
          />
          <Avatar.Fallback delayMs={3000}>A</Avatar.Fallback>
        </Avatar>
        <Avatar size={size} {...others}>
          <Avatar.Image
            src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=256&h=256&dpr=2&q=80&fit=crop"
            alt="B"
          />
          <Avatar.Fallback delayMs={3000}>B</Avatar.Fallback>
        </Avatar>
        <Avatar size={size} {...others}>
          <Avatar.Image
            src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=256&h=256&dpr=2&fit=crop"
            alt="C"
          />
          <Avatar.Fallback delayMs={3000}>B</Avatar.Fallback>
        </Avatar>
        <Avatar size={size} {...others}>
          <Avatar.Fallback>+5</Avatar.Fallback>
        </Avatar>
      </Avatar.Group>
    );
  },
};
