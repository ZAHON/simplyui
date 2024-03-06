import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '.';

const meta: Meta<typeof Card> = {
  title: 'Data Display/Card',
  component: Card,
  args: {
    radius: 'md',
    shadow: 'md',
    size: '2',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eveniet, nobis numquam quasi repellat soluta error ipsa amet, perspiciatis enim optio accusantium, ex illo. Odit molestiae officiis exercitationem fugit consequuntur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eveniet, nobis numquam quasi repellat soluta error ipsa amet, perspiciatis enim optio accusantium, ex illo. Odit molestiae officiis exercitationem fugit consequuntur!',
  },
  argTypes: {
    radius: { control: 'select' },
    shadow: { control: 'select' },
    size: { control: 'select' },
    asChild: { control: false },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '36rem' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {};
