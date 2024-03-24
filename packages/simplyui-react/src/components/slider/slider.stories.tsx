import type { Meta, StoryObj } from '@storybook/react';
import * as Label from '@/components/label';
import * as Slider from '.';

const meta: Meta<typeof Slider.Root> = {
  title: 'Inputs/Slider',
  component: Slider.Root,
  args: {
    color: 'primary',
    disabled: false,
    max: 100,
    min: 0,
    minStepsBetweenThumbs: 0,
    name: '',
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
    color: { options: ['default', 'primary', 'success', 'warning', 'danger'], control: 'select' },
    asChild: { control: false },
    children: { control: false },
    defaultValue: { control: false },
    onValueChange: { control: false },
    onValueCommit: { control: false },
    radius: { options: ['none', 'sm', 'md', 'lg', 'xl', 'full'], control: 'select' },
    size: { options: ['1', '2', '3', '4'], control: 'select' },
    value: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Slider.Root>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithLabel: Story = {
  render: ({ size, disabled, ...others }) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', rowGap: '0.25rem' }}>
        <Label.Root htmlFor="test" size={size} disabled={disabled}>
          Search the docs…
        </Label.Root>
        <Slider.Root size={size} disabled={disabled} {...others}>
          <Slider.Track>
            <Slider.Range />
          </Slider.Track>
          <Slider.Thumb id="test" aria-label="Thumb" />
        </Slider.Root>
      </div>
    );
  },
};

export const WithMarkers: Story = {
  args: {
    step: 10,
    children: (
      <>
        <Slider.Track>
          <Slider.Range />
          <Slider.Marker value={0}>0</Slider.Marker>
          <Slider.Marker value={10}>10</Slider.Marker>
          <Slider.Marker value={20}>20</Slider.Marker>
          <Slider.Marker value={30}>30</Slider.Marker>
          <Slider.Marker value={40}>40</Slider.Marker>
          <Slider.Marker value={50}>50</Slider.Marker>
          <Slider.Marker value={60}>60</Slider.Marker>
          <Slider.Marker value={70}>70</Slider.Marker>
          <Slider.Marker value={80}>80</Slider.Marker>
          <Slider.Marker value={90}>90</Slider.Marker>
          <Slider.Marker value={100}>100</Slider.Marker>
        </Slider.Track>
        <Slider.Thumb aria-label="Thumb 1" />
      </>
    ),
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
