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
    color: 'default',
    size: '2',
    radius: 'md',
    disabled: false,
    name: '',
    loop: true,
    defaultValue: 'react',
    children: (
      <SegmentedControl.Content>
        <SegmentedControl.Indicator />
        <SegmentedControl.Item value="angular">Angular</SegmentedControl.Item>
        <SegmentedControl.Item value="react">React</SegmentedControl.Item>
        <SegmentedControl.Item value="svelte">Svelte</SegmentedControl.Item>
        <SegmentedControl.Item value="vue">Vue</SegmentedControl.Item>
      </SegmentedControl.Content>
    ),
  },
  argTypes: {
    defaultValue: { control: false },
    onValueChange: { control: false },
    color: { options: ['default', 'primary', 'success', 'warning', 'danger'], control: 'select' },
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

export const Default: Story = {};

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
          <SegmentedControl.Content>
            <SegmentedControl.Indicator />
            <SegmentedControl.Item value="angular">Angular</SegmentedControl.Item>
            <SegmentedControl.Item value="react">React</SegmentedControl.Item>
            <SegmentedControl.Item value="svelte">Svelte</SegmentedControl.Item>
            <SegmentedControl.Item value="vue">Vue</SegmentedControl.Item>
          </SegmentedControl.Content>
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
};

export const WithDisabledItem: Story = {
  args: {
    children: (
      <SegmentedControl.Content>
        <SegmentedControl.Indicator />
        <SegmentedControl.Item value="angular">Angular</SegmentedControl.Item>
        <SegmentedControl.Item value="react">React</SegmentedControl.Item>
        <SegmentedControl.Item disabled value="svelte">
          Svelte
        </SegmentedControl.Item>
        <SegmentedControl.Item value="vue">Vue</SegmentedControl.Item>
      </SegmentedControl.Content>
    ),
  },
};

export const ItemsWithTextAndIcon: Story = {
  render: ({ size, ...others }) => {
    const iconSizes = {
      '1': 16,
      '2': 16,
      '3': 18,
      '4': 20,
    };

    return (
      <SegmentedControl.Root size={size} {...others}>
        <SegmentedControl.Content>
          <SegmentedControl.Indicator />
          <SegmentedControl.Item value="angular">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={iconSizes[size as NonNullable<typeof size>]}
              width={iconSizes[size as NonNullable<typeof size>]}
              aria-hidden="true"
              focusable="false"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path stroke="none" d="M0 0h24v24H0z"></path>
              <path d="M5.428 17.245l6.076 3.471a1 1 0 00.992 0l6.076-3.471a1 1 0 00.495-.734l1.323-9.704a1 1 0 00-.658-1.078l-7.4-2.612a1 1 0 00-.665 0L4.268 5.73a1 1 0 00-.658 1.078l1.323 9.704a1 1 0 00.495.734z"></path>
              <path d="M9 15l3-8 3 8M10 13h4"></path>
            </svg>
            Angular
          </SegmentedControl.Item>
          <SegmentedControl.Item value="react">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={iconSizes[size as NonNullable<typeof size>]}
              width={iconSizes[size as NonNullable<typeof size>]}
              aria-hidden="true"
              focusable="false"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path stroke="none" d="M0 0h24v24H0z"></path>
              <path d="M6.306 8.711C3.704 9.434 2 10.637 2 12c0 2.21 4.477 4 10 4 .773 0 1.526-.035 2.248-.102M17.692 15.289C20.295 14.567 22 13.363 22 12c0-2.21-4.477-4-10-4-.773 0-1.526.035-2.25.102"></path>
              <path d="M6.305 15.287C5.629 17.902 5.82 19.98 7 20.66c1.913 1.105 5.703-1.877 8.464-6.66.387-.67.733-1.339 1.036-2M17.694 8.716C18.371 6.1 18.181 4.02 17 3.34 15.087 2.235 11.297 5.217 8.536 10c-.387.67-.733 1.34-1.037 2"></path>
              <path d="M12 5.424C10.075 3.532 8.18 2.658 7 3.34 5.087 4.444 5.774 9.217 8.536 14c.386.67.793 1.304 1.212 1.896M12 18.574c1.926 1.893 3.821 2.768 5 2.086 1.913-1.104 1.226-5.877-1.536-10.66-.375-.65-.78-1.283-1.212-1.897M11.5 12.866a1 1 0 101-1.732 1 1 0 00-1 1.732z"></path>
            </svg>
            React
          </SegmentedControl.Item>
          <SegmentedControl.Item value="svelte">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={iconSizes[size as NonNullable<typeof size>]}
              width={iconSizes[size as NonNullable<typeof size>]}
              aria-hidden="true"
              focusable="false"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path stroke="none" d="M0 0h24v24H0z"></path>
              <path d="M15 8l-5 3 .821-.495c1.86-1.15 4.412-.49 5.574 1.352a3.91 3.91 0 01-1.264 5.42l-5.053 3.126c-1.86 1.151-4.312.591-5.474-1.251a3.91 3.91 0 011.263-5.42l.26-.16"></path>
              <path d="M8 17l5-3-.822.496c-1.86 1.151-4.411.491-5.574-1.351a3.91 3.91 0 011.264-5.42l5.054-3.127c1.86-1.15 4.311-.59 5.474 1.252a3.91 3.91 0 01-1.264 5.42l-.26.16"></path>
            </svg>
            Svelte
          </SegmentedControl.Item>
          <SegmentedControl.Item value="vue">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={iconSizes[size as NonNullable<typeof size>]}
              width={iconSizes[size as NonNullable<typeof size>]}
              aria-hidden="true"
              focusable="false"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path stroke="none" d="M0 0h24v24H0z"></path>
              <path d="M16.5 4L12 12 7.5 4"></path>
              <path d="M3 4l9 16 9-16"></path>
            </svg>
            Vue
          </SegmentedControl.Item>
        </SegmentedControl.Content>
      </SegmentedControl.Root>
    );
  },
};
