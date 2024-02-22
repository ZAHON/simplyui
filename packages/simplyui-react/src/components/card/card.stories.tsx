import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '.';

const meta: Meta<typeof Card> = {
  title: 'Data Display/Card',
  component: Card,
  args: {
    radius: 'md',
    size: 'md',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eveniet, nobis numquam quasi repellat soluta error ipsa amet, perspiciatis enim optio accusantium, ex illo. Odit molestiae officiis exercitationem fugit consequuntur!',
  },
  argTypes: {
    radius: { control: 'select' },
    size: { control: 'select' },
    asChild: { control: false },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '32rem' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {};
