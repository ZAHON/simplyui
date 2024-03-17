import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/button';
import { Popover } from '.';

const meta: Meta<typeof Popover> = {
  title: 'Overlays/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => (
    <Popover defaultOpen>
      <Popover.Trigger asChild>
        <Button>
          <Button.Content>Toggle popover</Button.Content>
        </Button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content style={{ width: '24rem' }}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam qui, fugit at, vero, nihil explicabo
            dignissimos accusamus facere ipsum numquam nostrum ad excepturi! Eaque cupiditate eligendi iusto
            perspiciatis blanditiis magnam!
          </p>
        </Popover.Content>
      </Popover.Portal>
    </Popover>
  ),
};

export const WithClose: Story = {
  render: () => (
    <Popover defaultOpen>
      <Popover.Trigger asChild>
        <Button>
          <Button.Content>Toggle popover</Button.Content>
        </Button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content style={{ width: '24rem' }}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam qui, fugit at, vero, nihil explicabo
            dignissimos accusamus facere ipsum numquam nostrum ad excepturi! Eaque cupiditate eligendi iusto
            perspiciatis blanditiis magnam!
          </p>
          <Popover.Close asChild>
            <Button color="danger" variant="light" fullWidth style={{ marginTop: '1rem' }}>
              <Button.Content>Close popover</Button.Content>
            </Button>
          </Popover.Close>
        </Popover.Content>
      </Popover.Portal>
    </Popover>
  ),
};

export const WithContentWidthTrigger: Story = {
  render: () => (
    <Popover defaultOpen>
      <Popover.Trigger asChild>
        <Button style={{ paddingInline: '4rem' }}>
          <Button.Content>Toggle popover</Button.Content>
        </Button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content width="trigger">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam qui, fugit at, vero, nihil explicabo
            dignissimos accusamus facere ipsum numquam nostrum ad excepturi! Eaque cupiditate eligendi iusto
            perspiciatis blanditiis magnam!
          </p>
        </Popover.Content>
      </Popover.Portal>
    </Popover>
  ),
};

export const WithContentSideTop: Story = {
  render: () => (
    <Popover defaultOpen>
      <Popover.Trigger asChild>
        <Button>
          <Button.Content>Toggle popover</Button.Content>
        </Button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content side="top" style={{ width: '24rem' }}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam qui, fugit at, vero, nihil explicabo
            dignissimos accusamus facere ipsum numquam nostrum ad excepturi! Eaque cupiditate eligendi iusto
            perspiciatis blanditiis magnam!
          </p>
        </Popover.Content>
      </Popover.Portal>
    </Popover>
  ),
};

export const WithContentSideRight: Story = {
  render: () => (
    <Popover defaultOpen>
      <Popover.Trigger asChild>
        <Button>
          <Button.Content>Toggle popover</Button.Content>
        </Button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content side="right" style={{ width: '24rem' }}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam qui, fugit at, vero, nihil explicabo
            dignissimos accusamus facere ipsum numquam nostrum ad excepturi! Eaque cupiditate eligendi iusto
            perspiciatis blanditiis magnam!
          </p>
        </Popover.Content>
      </Popover.Portal>
    </Popover>
  ),
};

export const WithContentSideBottom: Story = {
  render: () => (
    <Popover defaultOpen>
      <Popover.Trigger asChild>
        <Button>
          <Button.Content>Toggle popover</Button.Content>
        </Button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content side="bottom" style={{ width: '24rem' }}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam qui, fugit at, vero, nihil explicabo
            dignissimos accusamus facere ipsum numquam nostrum ad excepturi! Eaque cupiditate eligendi iusto
            perspiciatis blanditiis magnam!
          </p>
        </Popover.Content>
      </Popover.Portal>
    </Popover>
  ),
};

export const WithContentSideLeft: Story = {
  render: () => (
    <Popover defaultOpen>
      <Popover.Trigger asChild>
        <Button>
          <Button.Content>Toggle popover</Button.Content>
        </Button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content side="left" style={{ width: '24rem' }}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam qui, fugit at, vero, nihil explicabo
            dignissimos accusamus facere ipsum numquam nostrum ad excepturi! Eaque cupiditate eligendi iusto
            perspiciatis blanditiis magnam!
          </p>
        </Popover.Content>
      </Popover.Portal>
    </Popover>
  ),
};
