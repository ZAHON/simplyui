import type { Meta, StoryObj } from '@storybook/react';
import * as Button from '@/components/button';
import * as Popover from '.';

const meta: Meta<typeof Popover.Root> = {
  title: 'Overlays/Popover',
  component: Popover.Root,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Popover.Root>;

export const Default: Story = {
  render: () => (
    <Popover.Root defaultOpen>
      <Popover.Trigger asChild>
        <Button.Root>
          <Button.Content>Toggle popover</Button.Content>
        </Button.Root>
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
    </Popover.Root>
  ),
};

export const WithClose: Story = {
  render: () => (
    <Popover.Root defaultOpen>
      <Popover.Trigger asChild>
        <Button.Root>
          <Button.Content>Toggle popover</Button.Content>
        </Button.Root>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content style={{ width: '24rem' }}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam qui, fugit at, vero, nihil explicabo
            dignissimos accusamus facere ipsum numquam nostrum ad excepturi! Eaque cupiditate eligendi iusto
            perspiciatis blanditiis magnam!
          </p>
          <Popover.Close asChild>
            <Button.Root color="danger" variant="light" fullWidth style={{ marginTop: '1rem' }}>
              <Button.Content>Close popover</Button.Content>
            </Button.Root>
          </Popover.Close>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  ),
};

export const WithContentWidthTrigger: Story = {
  render: () => (
    <Popover.Root defaultOpen>
      <Popover.Trigger asChild>
        <Button.Root style={{ paddingInline: '4rem' }}>
          <Button.Content>Toggle popover</Button.Content>
        </Button.Root>
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
    </Popover.Root>
  ),
};

export const WithContentSideTop: Story = {
  render: () => (
    <Popover.Root defaultOpen>
      <Popover.Trigger asChild>
        <Button.Root>
          <Button.Content>Toggle popover</Button.Content>
        </Button.Root>
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
    </Popover.Root>
  ),
};

export const WithContentSideRight: Story = {
  render: () => (
    <Popover.Root defaultOpen>
      <Popover.Trigger asChild>
        <Button.Root>
          <Button.Content>Toggle popover</Button.Content>
        </Button.Root>
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
    </Popover.Root>
  ),
};

export const WithContentSideBottom: Story = {
  render: () => (
    <Popover.Root defaultOpen>
      <Popover.Trigger asChild>
        <Button.Root>
          <Button.Content>Toggle popover</Button.Content>
        </Button.Root>
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
    </Popover.Root>
  ),
};

export const WithContentSideLeft: Story = {
  render: () => (
    <Popover.Root defaultOpen>
      <Popover.Trigger asChild>
        <Button.Root>
          <Button.Content>Toggle popover</Button.Content>
        </Button.Root>
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
    </Popover.Root>
  ),
};
