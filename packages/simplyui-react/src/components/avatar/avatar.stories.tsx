import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import * as Label from '@/components/label';
import * as Switch from '@/components/switch';
import * as Avatar from '.';

const meta: Meta<typeof Avatar.Root> = {
  title: 'Data Display/Avatar',
  component: Avatar.Root,
  args: {
    size: '3',
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
    size: { options: ['1', '2', '3', '4', '5', '6', '7', '8', '9'], control: 'select' },
    radius: { options: ['none', 'sm', 'md', 'lg', 'xl', 'full'], control: 'select' },
    variant: { options: ['filled', 'light', 'outline', 'transparent', 'light-outline'], control: 'select' },
    color: { options: ['default', 'primary', 'success', 'warning', 'danger'], control: 'select' },
    children: { control: false },
    asChild: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar.Root>;

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
    const [addBorderForAvatars, setAddBorderForAvatars] = useState(true);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', rowGap: '1rem' }}>
        <Avatar.Group spacing={size} addBorderForAvatars={addBorderForAvatars}>
          <Avatar.Root size={size} {...others}>
            <Avatar.Image
              src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
              alt="A"
            />
            <Avatar.Fallback delayMs={3000}>A</Avatar.Fallback>
          </Avatar.Root>
          <Avatar.Root size={size} {...others}>
            <Avatar.Image
              src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=256&h=256&dpr=2&q=80&fit=crop"
              alt="B"
            />
            <Avatar.Fallback delayMs={3000}>B</Avatar.Fallback>
          </Avatar.Root>
          <Avatar.Root size={size} {...others}>
            <Avatar.Image
              src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=256&h=256&dpr=2&fit=crop"
              alt="C"
            />
            <Avatar.Fallback delayMs={3000}>B</Avatar.Fallback>
          </Avatar.Root>
          <Avatar.Root size={size} {...others}>
            <Avatar.Fallback>+5</Avatar.Fallback>
          </Avatar.Root>
        </Avatar.Group>
        <div style={{ display: 'flex', alignItems: 'center', columnGap: '0.5rem' }}>
          <Switch.Root
            checked={addBorderForAvatars}
            onCheckedChange={setAddBorderForAvatars}
            id="add-border-for-avatars"
          >
            <Switch.Thumb />
          </Switch.Root>
          <Label.Root htmlFor="add-border-for-avatars">Add border for avatars</Label.Root>
        </div>
      </div>
    );
  },
};
