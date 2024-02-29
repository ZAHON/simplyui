import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from '.';

const meta: Meta<typeof Slider> = {
  title: 'Inputs/Slider',
  component: Slider,
  args: {
    color: 'primary',
    disabled: false,
    inverted: false,
    max: 100,
    min: 0,
    minStepsBetweenThumbs: 0,
    name: '',
    orientation: 'horizontal',
    radius: 'full',
    size: 'md',
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

export const ThumbWithIcon: Story = {
  render: ({ size, ...others }) => {
    const iconSizes = {
      sm: 12,
      md: 16,
      lg: 18,
      xl: 20,
    };

    return (
      <Slider size={size} {...others}>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumb aria-label="Thumb 1">
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
            <path d="M15 8a5 5 0 010 8M17.7 5a9 9 0 010 14M6 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h2l3.5-4.5A.8.8 0 0111 5v14a.8.8 0 01-1.5.5L6 15"></path>
          </svg>
        </Slider.Thumb>
      </Slider>
    );
  },
};
