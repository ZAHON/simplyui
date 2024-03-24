import type { Meta, StoryObj } from '@storybook/react';
import * as Button from '@/components/button';
import * as Menu from '.';
import { NativeScrollArea } from '@/components/native-scroll-area';

const meta: Meta<typeof Menu.Root> = {
  title: 'Overlays/Menu',
  component: Menu.Root,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Menu.Root>;

export const Default: Story = {
  render: () => (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button.Root>
          <Button.Content>Toggle menu</Button.Content>
        </Button.Root>
      </Menu.Trigger>
      <Menu.Portal>
        <Menu.Content>
          <Menu.Label>Application</Menu.Label>
          <Menu.Group>
            <Menu.Item>Settings</Menu.Item>
            <Menu.Item>Messages</Menu.Item>
            <Menu.Item>Gallery</Menu.Item>
            <Menu.Item>Search</Menu.Item>
          </Menu.Group>
          <Menu.Separator />
          <Menu.Label>Danger zone</Menu.Label>
          <Menu.Group>
            <Menu.Item>Transfer my data</Menu.Item>
            <Menu.Item color="danger">Delete my account</Menu.Item>
          </Menu.Group>
        </Menu.Content>
      </Menu.Portal>
    </Menu.Root>
  ),
};

export const WithDisabledItem: Story = {
  render: () => (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button.Root>
          <Button.Content>Toggle menu</Button.Content>
        </Button.Root>
      </Menu.Trigger>
      <Menu.Portal>
        <Menu.Content>
          <Menu.Label>Application</Menu.Label>
          <Menu.Group>
            <Menu.Item>Settings</Menu.Item>
            <Menu.Item disabled>Messages</Menu.Item>
            <Menu.Item>Gallery</Menu.Item>
            <Menu.Item>Search</Menu.Item>
          </Menu.Group>
          <Menu.Separator />
          <Menu.Label>Danger zone</Menu.Label>
          <Menu.Group>
            <Menu.Item>Transfer my data</Menu.Item>
            <Menu.Item color="danger">Delete my account</Menu.Item>
          </Menu.Group>
        </Menu.Content>
      </Menu.Portal>
    </Menu.Root>
  ),
};

export const WithNativeScrollArea: Story = {
  render: () => (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button.Root>
          <Button.Content>Toggle menu</Button.Content>
        </Button.Root>
      </Menu.Trigger>
      <Menu.Portal>
        <NativeScrollArea asChild scrollbarBackground={false}>
          <Menu.Content style={{ height: '10rem' }}>
            <Menu.Label>Application</Menu.Label>
            <Menu.Group>
              <Menu.Item>Settings</Menu.Item>
              <Menu.Item>Messages</Menu.Item>
              <Menu.Item>Gallery</Menu.Item>
              <Menu.Item>Search</Menu.Item>
            </Menu.Group>
            <Menu.Separator />
            <Menu.Label>Danger zone</Menu.Label>
            <Menu.Group>
              <Menu.Item>Transfer my data</Menu.Item>
              <Menu.Item color="danger">Delete my account</Menu.Item>
            </Menu.Group>
          </Menu.Content>
        </NativeScrollArea>
      </Menu.Portal>
    </Menu.Root>
  ),
};
