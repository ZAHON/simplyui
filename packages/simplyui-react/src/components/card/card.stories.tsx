import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '.';

const meta: Meta<typeof Card> = {
  title: 'Data Display/Card',
  component: Card,
  args: {
    background: 'solid',
    radius: 'md',
    shadow: 'md',
    size: 'md',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eveniet, nobis numquam quasi repellat soluta error ipsa amet, perspiciatis enim optio accusantium, ex illo. Odit molestiae officiis exercitationem fugit consequuntur!',
  },
  argTypes: {
    background: { control: 'select' },
    radius: { control: 'select' },
    shadow: { control: 'select' },
    size: { control: 'select' },
    asChild: { control: false },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          maxWidth: '36rem',
          padding: '4rem',
          backgroundImage: 'linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {};

export const BackgroundSolid: Story = {
  args: {
    background: 'solid',
  },
};

export const BackgroundTranslucent: Story = {
  args: {
    background: 'translucent',
  },
};
