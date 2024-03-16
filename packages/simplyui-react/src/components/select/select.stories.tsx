import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Label } from '@/components/label';
import { Select } from '.';

const meta: Meta<typeof Select> = {
  title: 'Inputs/Select',
  component: Select,
  args: {
    size: '2',
    radius: 'md',
    disabled: false,
    invalid: false,
    required: false,
    name: '',
    children: (
      <>
        <Select.Trigger>
          <Select.Value placeholder="Pick one" />
          <Select.Icon />
        </Select.Trigger>
        <Select.Portal>
          <Select.Content>
            <Select.ScrollUpButton />
            <Select.Viewport>
              <Select.Group>
                <Select.Label>Front-end frameworks</Select.Label>
                <Select.Item value="vue">
                  <Select.ItemText>Vue</Select.ItemText>
                  <Select.ItemIndicator />
                </Select.Item>
                <Select.Item value="react">
                  <Select.ItemText>React</Select.ItemText>
                  <Select.ItemIndicator />
                </Select.Item>
                <Select.Item value="angular">
                  <Select.ItemText>Angular</Select.ItemText>
                  <Select.ItemIndicator />
                </Select.Item>
                <Select.Item value="svelte">
                  <Select.ItemText>Svelte</Select.ItemText>
                  <Select.ItemIndicator />
                </Select.Item>
                <Select.Item value="backbone">
                  <Select.ItemText>Backbone</Select.ItemText>
                  <Select.ItemIndicator />
                </Select.Item>
                <Select.Item value="ember">
                  <Select.ItemText>Ember</Select.ItemText>
                  <Select.ItemIndicator />
                </Select.Item>
                <Select.Item value="polymer">
                  <Select.ItemText>Polymer</Select.ItemText>
                  <Select.ItemIndicator />
                </Select.Item>
              </Select.Group>
              <Select.Separator />
              <Select.Group>
                <Select.Label>Back-end frameworks</Select.Label>
                <Select.Item value="next">
                  <Select.ItemText>Next</Select.ItemText>
                  <Select.ItemIndicator />
                </Select.Item>
                <Select.Item value="express">
                  <Select.ItemText>Express</Select.ItemText>
                  <Select.ItemIndicator />
                </Select.Item>
                <Select.Item value="gatsby">
                  <Select.ItemText>Gatsby</Select.ItemText>
                  <Select.ItemIndicator />
                </Select.Item>
                <Select.Item value="meteor">
                  <Select.ItemText>Meteor</Select.ItemText>
                  <Select.ItemIndicator />
                </Select.Item>
                <Select.Item value="nuxt">
                  <Select.ItemText>Nuxt</Select.ItemText>
                  <Select.ItemIndicator />
                </Select.Item>
              </Select.Group>
            </Select.Viewport>
            <Select.ScrollDownButton />
          </Select.Content>
        </Select.Portal>
      </>
    ),
  },
  argTypes: {
    size: { control: 'select' },
    radius: { control: 'select' },
    defaultValue: { control: false },
    value: { control: false },
    onValueChange: { control: false },
    defaultOpen: { control: false },
    open: { control: false },
    onOpenChange: { control: false },
    children: { control: false },
  },
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '16rem' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {};

export const WithLabel: Story = {
  render: ({ size, disabled, ...others }) => {
    const [open, setOpen] = useState(false);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', rowGap: '0.25rem' }}>
        <Label onClick={() => setOpen(true)} htmlFor="test" size={size} disabled={disabled}>
          Pick one
        </Label>
        <Select open={open} onOpenChange={setOpen} size={size} disabled={disabled} {...others}>
          <Select.Trigger id="test" onClick={() => setOpen(true)}>
            <Select.Value />
            <Select.Icon />
          </Select.Trigger>
          <Select.Portal>
            <Select.Content onEscapeKeyDown={() => setOpen(false)} onPointerDownOutside={() => setOpen(false)}>
              <Select.ScrollUpButton />
              <Select.Viewport>
                <Select.Group>
                  <Select.Label>Front-end frameworks</Select.Label>
                  <Select.Item value="vue" onClick={() => setOpen(false)}>
                    <Select.ItemText>Vue</Select.ItemText>
                    <Select.ItemIndicator />
                  </Select.Item>
                  <Select.Item value="react" onClick={() => setOpen(false)}>
                    <Select.ItemText>React</Select.ItemText>
                    <Select.ItemIndicator />
                  </Select.Item>
                  <Select.Item value="angular" onClick={() => setOpen(false)}>
                    <Select.ItemText>Angular</Select.ItemText>
                    <Select.ItemIndicator />
                  </Select.Item>
                  <Select.Item value="svelte" onClick={() => setOpen(false)}>
                    <Select.ItemText>Svelte</Select.ItemText>
                    <Select.ItemIndicator />
                  </Select.Item>
                  <Select.Item value="backbone" onClick={() => setOpen(false)}>
                    <Select.ItemText>Backbone</Select.ItemText>
                    <Select.ItemIndicator />
                  </Select.Item>
                  <Select.Item value="ember" onClick={() => setOpen(false)}>
                    <Select.ItemText>Ember</Select.ItemText>
                    <Select.ItemIndicator />
                  </Select.Item>
                  <Select.Item value="polymer" onClick={() => setOpen(false)}>
                    <Select.ItemText>Polymer</Select.ItemText>
                    <Select.ItemIndicator />
                  </Select.Item>
                </Select.Group>
                <Select.Separator />
                <Select.Group>
                  <Select.Label>Back-end frameworks</Select.Label>
                  <Select.Item value="next" onClick={() => setOpen(false)}>
                    <Select.ItemText>Next</Select.ItemText>
                    <Select.ItemIndicator />
                  </Select.Item>
                  <Select.Item value="express" onClick={() => setOpen(false)}>
                    <Select.ItemText>Express</Select.ItemText>
                    <Select.ItemIndicator />
                  </Select.Item>
                  <Select.Item value="gatsby" onClick={() => setOpen(false)}>
                    <Select.ItemText>Gatsby</Select.ItemText>
                    <Select.ItemIndicator />
                  </Select.Item>
                  <Select.Item value="meteor" onClick={() => setOpen(false)}>
                    <Select.ItemText>Meteor</Select.ItemText>
                    <Select.ItemIndicator />
                  </Select.Item>
                  <Select.Item value="nuxt" onClick={() => setOpen(false)}>
                    <Select.ItemText>Nuxt</Select.ItemText>
                    <Select.ItemIndicator />
                  </Select.Item>
                </Select.Group>
              </Select.Viewport>
              <Select.ScrollDownButton />
            </Select.Content>
          </Select.Portal>
        </Select>
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithDisabledItems: Story = {
  args: {
    children: (
      <>
        <Select.Trigger>
          <Select.Value placeholder="Pick one" />
          <Select.Icon />
        </Select.Trigger>
        <Select.Portal>
          <Select.Content>
            <Select.ScrollUpButton />
            <Select.Viewport>
              <Select.Group>
                <Select.Label>Front-end frameworks</Select.Label>
                <Select.Item value="vue">
                  <Select.ItemText>Vue</Select.ItemText>
                  <Select.ItemIndicator />
                </Select.Item>
                <Select.Item value="react">
                  <Select.ItemText>React</Select.ItemText>
                  <Select.ItemIndicator />
                </Select.Item>
                <Select.Item disabled value="angular">
                  <Select.ItemText>Angular</Select.ItemText>
                  <Select.ItemIndicator />
                </Select.Item>
                <Select.Item disabled value="svelte">
                  <Select.ItemText>Svelte</Select.ItemText>
                  <Select.ItemIndicator />
                </Select.Item>
                <Select.Item value="backbone">
                  <Select.ItemText>Backbone</Select.ItemText>
                  <Select.ItemIndicator />
                </Select.Item>
                <Select.Item disabled value="ember">
                  <Select.ItemText>Ember</Select.ItemText>
                  <Select.ItemIndicator />
                </Select.Item>
                <Select.Item disabled value="polymer">
                  <Select.ItemText>Polymer</Select.ItemText>
                  <Select.ItemIndicator />
                </Select.Item>
              </Select.Group>
              <Select.Separator />
              <Select.Group>
                <Select.Label>Back-end frameworks</Select.Label>
                <Select.Item value="next">
                  <Select.ItemText>Next</Select.ItemText>
                  <Select.ItemIndicator />
                </Select.Item>
                <Select.Item value="express">
                  <Select.ItemText>Express</Select.ItemText>
                  <Select.ItemIndicator />
                </Select.Item>
                <Select.Item value="gatsby">
                  <Select.ItemText>Gatsby</Select.ItemText>
                  <Select.ItemIndicator />
                </Select.Item>
                <Select.Item value="meteor">
                  <Select.ItemText>Meteor</Select.ItemText>
                  <Select.ItemIndicator />
                </Select.Item>
                <Select.Item value="nuxt">
                  <Select.ItemText>Nuxt</Select.ItemText>
                  <Select.ItemIndicator />
                </Select.Item>
              </Select.Group>
            </Select.Viewport>
            <Select.ScrollDownButton />
          </Select.Content>
        </Select.Portal>
      </>
    ),
  },
};

export const Invalid: Story = {
  args: {
    invalid: true,
  },
};
