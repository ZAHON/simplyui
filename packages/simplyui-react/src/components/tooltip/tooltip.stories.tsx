import type { Meta, StoryObj } from '@storybook/react';
import * as Button from '@/components/button';
import * as Tooltip from '.';

const meta: Meta<typeof Tooltip.Root> = {
  title: 'Overlays/Tooltip',
  component: Tooltip.Root,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <Tooltip.Provider>
        <Story />
      </Tooltip.Provider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Tooltip.Root>;

export const Default: Story = {
  render: () => {
    return (
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <Button.Root>
            <Button.Content>Hover</Button.Content>
          </Button.Root>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content>
            <Tooltip.Text>Add to library</Tooltip.Text>
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    );
  },
};

export const WithLarngeContent: Story = {
  render: () => {
    return (
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <Button.Root>
            <Button.Content>Hover</Button.Content>
          </Button.Root>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content>
            <Tooltip.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Tooltip.Text>
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    );
  },
};
