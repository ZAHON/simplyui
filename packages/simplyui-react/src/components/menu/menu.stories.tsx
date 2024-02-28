import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/button';
import { Menu } from '.';

const meta: Meta<typeof Menu> = {
  title: 'Overlays/Menu',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  render: () => (
    <Menu defaultOpen>
      <Menu.Trigger asChild>
        <Button>
          <Button.Content>Toggle menu</Button.Content>
        </Button>
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
    </Menu>
  ),
};

export const WithDisabledItem: Story = {
  render: () => (
    <Menu defaultOpen>
      <Menu.Trigger asChild>
        <Button>
          <Button.Content>Toggle menu</Button.Content>
        </Button>
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
    </Menu>
  ),
};

export const WithContentSideTop: Story = {
  render: () => (
    <Menu defaultOpen>
      <Menu.Trigger asChild>
        <Button>
          <Button.Content>Toggle menu</Button.Content>
        </Button>
      </Menu.Trigger>
      <Menu.Portal>
        <Menu.Content side="top">
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
    </Menu>
  ),
};

export const WithContentSideRight: Story = {
  render: () => (
    <Menu defaultOpen>
      <Menu.Trigger asChild>
        <Button>
          <Button.Content>Toggle menu</Button.Content>
        </Button>
      </Menu.Trigger>
      <Menu.Portal>
        <Menu.Content side="right">
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
    </Menu>
  ),
};

export const WithContentSideBottom: Story = {
  render: () => (
    <Menu defaultOpen>
      <Menu.Trigger asChild>
        <Button>
          <Button.Content>Toggle menu</Button.Content>
        </Button>
      </Menu.Trigger>
      <Menu.Portal>
        <Menu.Content side="bottom">
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
    </Menu>
  ),
};

export const WithContentSideLeft: Story = {
  render: () => (
    <Menu defaultOpen>
      <Menu.Trigger asChild>
        <Button>
          <Button.Content>Toggle menu</Button.Content>
        </Button>
      </Menu.Trigger>
      <Menu.Portal>
        <Menu.Content side="left">
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
    </Menu>
  ),
};
