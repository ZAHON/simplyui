import type { Meta, StoryObj } from '@storybook/react';
import * as Label from '@/components/label';
import * as ScrollArea from '@/components/scroll-area';
import { NativeScrollArea } from '@/components/native-scroll-area';
import * as Select from '.';

const meta: Meta<typeof Select.Root> = {
  title: 'Inputs/Select',
  component: Select.Root,
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
    size: { options: ['1', '2', '3', '4'], control: 'select' },
    radius: { options: ['none', 'sm', 'md', 'lg', 'xl', 'full'], control: 'select' },
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
type Story = StoryObj<typeof Select.Root>;

export const Default: Story = {};

export const WithLabel: Story = {
  render: ({ size, disabled, ...others }) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', rowGap: '0.25rem' }}>
        <Label.Root htmlFor="test" size={size} disabled={disabled}>
          Pick one
        </Label.Root>
        <Select.Root size={size} disabled={disabled} {...others}>
          <Select.Trigger id="test">
            <Select.Value />
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
        </Select.Root>
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

export const WithScrollArea: Story = {
  args: {
    children: (
      <>
        <Select.Trigger>
          <Select.Value placeholder="Pick one" />
          <Select.Icon />
        </Select.Trigger>
        <Select.Portal>
          <Select.Content style={{ height: '10rem' }}>
            <ScrollArea.Root type="always">
              <Select.Viewport asChild style={{ paddingRight: '1rem' }}>
                <ScrollArea.Viewport>
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
                </ScrollArea.Viewport>
              </Select.Viewport>
              <ScrollArea.Scrollbar orientation="vertical">
                <ScrollArea.Thumb />
              </ScrollArea.Scrollbar>
            </ScrollArea.Root>
          </Select.Content>
        </Select.Portal>
      </>
    ),
  },
};

export const WithNativeScrollArea: Story = {
  args: {
    children: (
      <>
        <Select.Trigger>
          <Select.Value placeholder="Pick one" />
          <Select.Icon />
        </Select.Trigger>
        <Select.Portal>
          <Select.Content>
            <NativeScrollArea scrollbars="vertical" scrollbarBackground={false}>
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
            </NativeScrollArea>
          </Select.Content>
        </Select.Portal>
      </>
    ),
  },
};
