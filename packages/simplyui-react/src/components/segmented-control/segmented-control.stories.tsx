import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import * as Button from '@/components/button';
import * as Label from '@/components/label';
import * as Switch from '@/components/switch';
import * as SegmentedControl from '.';

const meta: Meta<typeof SegmentedControl.Root> = {
  title: 'Inputs/SegmentedControl',
  component: SegmentedControl.Root,
  args: {
    size: '2',
    radius: 'md',
    disabled: false,
    name: '',
    loop: true,
    defaultValue: 'react',
  },
  argTypes: {
    defaultValue: { control: false },
    onValueChange: { control: false },
    radius: { options: ['none', 'sm', 'md', 'lg', 'xl', 'full'], control: 'select' },
    size: { options: ['1', '2', '3', '4'], control: 'select' },
    value: { control: false },
    asChild: { control: false },
    children: { control: false },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '36rem' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SegmentedControl.Root>;

export const Default: Story = {
  render: ({ ...props }) => {
    return (
      <SegmentedControl.Root {...props}>
        <SegmentedControl.Indicator />
        <SegmentedControl.Item value="angular">
          <SegmentedControl.ItemLabel type="unchecked">Angular</SegmentedControl.ItemLabel>
          <SegmentedControl.ItemLabel type="checked">Angular</SegmentedControl.ItemLabel>
        </SegmentedControl.Item>
        <SegmentedControl.Item value="react">
          <SegmentedControl.ItemLabel type="checked">React</SegmentedControl.ItemLabel>
          <SegmentedControl.ItemLabel type="unchecked">React</SegmentedControl.ItemLabel>
        </SegmentedControl.Item>
        <SegmentedControl.Item value="svelte">
          <SegmentedControl.ItemLabel type="checked">Svelte</SegmentedControl.ItemLabel>
          <SegmentedControl.ItemLabel type="unchecked">Svelte</SegmentedControl.ItemLabel>
        </SegmentedControl.Item>
        <SegmentedControl.Item value="vue">
          <SegmentedControl.ItemLabel type="checked">Vue</SegmentedControl.ItemLabel>
          <SegmentedControl.ItemLabel type="unchecked">Vue</SegmentedControl.ItemLabel>
        </SegmentedControl.Item>
      </SegmentedControl.Root>
    );
  },
};

export const Unset: Story = {
  render: ({ ...props }) => {
    const [value, setValue] = useState('');
    const [disabled, setDisabled] = useState(false);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', rowGap: '1rem' }}>
        <SegmentedControl.Root
          {...props}
          disabled={disabled}
          defaultValue={undefined}
          value={value}
          onValueChange={setValue}
        >
          <SegmentedControl.Indicator />
          <SegmentedControl.Item value="angular">
            <SegmentedControl.ItemLabel type="unchecked">Angular</SegmentedControl.ItemLabel>
            <SegmentedControl.ItemLabel type="checked">Angular</SegmentedControl.ItemLabel>
          </SegmentedControl.Item>
          <SegmentedControl.Item value="react">
            <SegmentedControl.ItemLabel type="checked">React</SegmentedControl.ItemLabel>
            <SegmentedControl.ItemLabel type="unchecked">React</SegmentedControl.ItemLabel>
          </SegmentedControl.Item>
          <SegmentedControl.Item value="svelte">
            <SegmentedControl.ItemLabel type="checked">Svelte</SegmentedControl.ItemLabel>
            <SegmentedControl.ItemLabel type="unchecked">Svelte</SegmentedControl.ItemLabel>
          </SegmentedControl.Item>
          <SegmentedControl.Item value="vue">
            <SegmentedControl.ItemLabel type="checked">Vue</SegmentedControl.ItemLabel>
            <SegmentedControl.ItemLabel type="unchecked">Vue</SegmentedControl.ItemLabel>
          </SegmentedControl.Item>
        </SegmentedControl.Root>

        <div style={{ display: 'flex', columnGap: '0.5rem' }}>
          <Button.Root onClick={() => setValue('')}>
            <Button.Content>Unset</Button.Content>
          </Button.Root>
          <Button.Root onClick={() => setValue('angular')}>
            <Button.Content>Angular</Button.Content>
          </Button.Root>
          <Button.Root onClick={() => setValue('react')}>
            <Button.Content>React</Button.Content>
          </Button.Root>
          <Button.Root onClick={() => setValue('svelte')}>
            <Button.Content>Svelte</Button.Content>
          </Button.Root>
          <Button.Root onClick={() => setValue('vue')}>
            <Button.Content>Vue</Button.Content>
          </Button.Root>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', columnGap: '0.5rem' }}>
          <Switch.Root id="disabled" checked={disabled} onCheckedChange={setDisabled}>
            <Switch.Thumb />
          </Switch.Root>
          <Label.Root htmlFor="disabled">Disabled</Label.Root>
        </div>
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: ({ ...props }) => {
    return (
      <SegmentedControl.Root {...props}>
        <SegmentedControl.Indicator />
        <SegmentedControl.Item value="angular">
          <SegmentedControl.ItemLabel type="unchecked">Angular</SegmentedControl.ItemLabel>
          <SegmentedControl.ItemLabel type="checked">Angular</SegmentedControl.ItemLabel>
        </SegmentedControl.Item>
        <SegmentedControl.Item value="react">
          <SegmentedControl.ItemLabel type="checked">React</SegmentedControl.ItemLabel>
          <SegmentedControl.ItemLabel type="unchecked">React</SegmentedControl.ItemLabel>
        </SegmentedControl.Item>
        <SegmentedControl.Item value="svelte">
          <SegmentedControl.ItemLabel type="checked">Svelte</SegmentedControl.ItemLabel>
          <SegmentedControl.ItemLabel type="unchecked">Svelte</SegmentedControl.ItemLabel>
        </SegmentedControl.Item>
        <SegmentedControl.Item value="vue">
          <SegmentedControl.ItemLabel type="checked">Vue</SegmentedControl.ItemLabel>
          <SegmentedControl.ItemLabel type="unchecked">Vue</SegmentedControl.ItemLabel>
        </SegmentedControl.Item>
      </SegmentedControl.Root>
    );
  },
};

export const WithDisabledItem: Story = {
  render: ({ ...props }) => {
    return (
      <SegmentedControl.Root {...props}>
        <SegmentedControl.Indicator />
        <SegmentedControl.Item value="angular">
          <SegmentedControl.ItemLabel type="unchecked">Angular</SegmentedControl.ItemLabel>
          <SegmentedControl.ItemLabel type="checked">Angular</SegmentedControl.ItemLabel>
        </SegmentedControl.Item>
        <SegmentedControl.Item value="react">
          <SegmentedControl.ItemLabel type="checked">React</SegmentedControl.ItemLabel>
          <SegmentedControl.ItemLabel type="unchecked">React</SegmentedControl.ItemLabel>
        </SegmentedControl.Item>
        <SegmentedControl.Item value="svelte" disabled>
          <SegmentedControl.ItemLabel type="checked">Svelte</SegmentedControl.ItemLabel>
          <SegmentedControl.ItemLabel type="unchecked">Svelte</SegmentedControl.ItemLabel>
        </SegmentedControl.Item>
        <SegmentedControl.Item value="vue">
          <SegmentedControl.ItemLabel type="checked">Vue</SegmentedControl.ItemLabel>
          <SegmentedControl.ItemLabel type="unchecked">Vue</SegmentedControl.ItemLabel>
        </SegmentedControl.Item>
      </SegmentedControl.Root>
    );
  },
};
