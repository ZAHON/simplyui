import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from '.';

const meta: Meta<typeof Slider> = {
  title: 'Inputs/Slider',
  component: Slider,
  args: {
    variant: 'default',
    color: 'primary',
    disabled: false,
    inverted: false,
    max: 100,
    min: 0,
    minStepsBetweenThumbs: 0,
    name: '',
    orientation: 'horizontal',
    radius: 'full',
    size: '2',
    step: 1,
    defaultValue: [50],
    children: (
      <>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumb aria-label="Thumb 1" />
      </>
    ),
  },
  argTypes: {
    variant: { control: 'select' },
    color: { control: 'select' },
    asChild: { control: false },
    children: { control: false },
    defaultValue: { control: false },
    onValueChange: { control: false },
    onValueCommit: { control: false },
    orientation: { control: 'select' },
    radius: { control: 'select' },
    size: { control: 'select' },
    value: { control: false },
  },
  decorators: [
    (Story) => (
      <div style={{ height: '20rem' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const OrientationVertical: Story = {
  args: {
    orientation: 'vertical',
  },
};

export const RangeSlider: Story = {
  args: {
    minStepsBetweenThumbs: 1,
    defaultValue: [25, 50],
    children: (
      <>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumb aria-label="Thumb 1" />
        <Slider.Thumb aria-label="Thumb 2" />
      </>
    ),
  },
};
