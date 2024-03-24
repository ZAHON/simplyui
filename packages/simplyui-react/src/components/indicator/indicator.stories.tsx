import type { Meta, StoryObj } from '@storybook/react';
import type { DotProps } from '.';
import { useState } from 'react';
import * as Avatar from '@/components/avatar';
import * as Label from '@/components/label';
import * as Slider from '@/components/slider';
import * as Switch from '@/components/switch';
import * as Indicator from '.';

const meta: Meta<typeof Indicator.Root> = {
  title: 'Data Display/Indicator',
  component: Indicator.Root,
};

export default meta;
type Story = StoryObj<typeof Indicator.Root>;

export const Default: Story = {
  render: () => {
    const [size, setSize] = useState([3]);

    return (
      <div style={{ maxWidth: '36rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', rowGap: '2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', rowGap: '0.5rem' }}>
            <Label.Root asChild>
              <span id="size">Size: {size[0]}</span>
            </Label.Root>
            <Slider.Root min={1} max={9} value={[size[0]]} onValueChange={(value) => setSize([...value])}>
              <Slider.Track>
                <Slider.Range />
              </Slider.Track>
              <Slider.Thumb aria-labelledby="size" />
            </Slider.Root>
          </div>
          <Indicator.Root>
            <Indicator.Dot size={size[0].toString() as DotProps['size']} />
            <Avatar.Root size={size[0].toString() as DotProps['size']}>
              <Avatar.Image
                src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                alt="A"
              />
              <Avatar.Fallback>A</Avatar.Fallback>
            </Avatar.Root>
          </Indicator.Root>
        </div>
      </div>
    );
  },
};

export const WithProcessingDot: Story = {
  render: () => {
    const [processing, setProcessing] = useState(true);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', rowGap: '1rem' }}>
        <Indicator.Root>
          <Indicator.Dot processing={processing} color="danger" />
          <Avatar.Root>
            <Avatar.Image
              src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
              alt="A"
            />
            <Avatar.Fallback>A</Avatar.Fallback>
          </Avatar.Root>
        </Indicator.Root>
        <div style={{ display: 'flex', alignItems: 'center', columnGap: '0.5rem' }}>
          <Switch.Root id="processing" checked={processing} onCheckedChange={setProcessing}>
            <Switch.Thumb />
          </Switch.Root>
          <Label.Root htmlFor="processing">Processing</Label.Root>
        </div>
      </div>
    );
  },
};

export const WithDisabledDot: Story = {
  render: () => {
    const [disabled, setDisabled] = useState(true);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', rowGap: '1rem' }}>
        <Indicator.Root>
          <Indicator.Dot disabled={disabled} color="danger" />
          <Avatar.Root>
            <Avatar.Image
              src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
              alt="A"
            />
            <Avatar.Fallback>A</Avatar.Fallback>
          </Avatar.Root>
        </Indicator.Root>
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

export const WithBorderDot: Story = {
  render: () => {
    const [withBorder, setWithBorder] = useState(true);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', rowGap: '1rem' }}>
        <Indicator.Root>
          <Indicator.Dot withBorder={withBorder} />
          <Avatar.Root>
            <Avatar.Image
              src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
              alt="A"
            />
            <Avatar.Fallback>A</Avatar.Fallback>
          </Avatar.Root>
        </Indicator.Root>
        <div style={{ display: 'flex', alignItems: 'center', columnGap: '0.5rem' }}>
          <Switch.Root id="with-border" checked={withBorder} onCheckedChange={setWithBorder}>
            <Switch.Thumb />
          </Switch.Root>
          <Label.Root htmlFor="with-border">With border</Label.Root>
        </div>
      </div>
    );
  },
};

export const WithOffsetDot: Story = {
  render: () => {
    const [offset, setOffset] = useState([6]);

    return (
      <div style={{ maxWidth: '36rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', rowGap: '2rem' }}>
          <Indicator.Root>
            <Indicator.Dot offset={offset[0]} position="bottom-end" withBorder />
            <Avatar.Root radius="full">
              <Avatar.Image
                src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                alt="A"
              />
              <Avatar.Fallback>A</Avatar.Fallback>
            </Avatar.Root>
          </Indicator.Root>
          <div style={{ display: 'flex', flexDirection: 'column', rowGap: '0.25rem' }}>
            <Label.Root asChild>
              <span id="offset">Offset: {offset[0]}</span>
            </Label.Root>
            <Slider.Root min={0} max={10} value={[offset[0]]} onValueChange={(value) => setOffset([...value])}>
              <Slider.Track>
                <Slider.Range />
              </Slider.Track>
              <Slider.Thumb aria-labelledby="offset" />
            </Slider.Root>
          </div>
        </div>
      </div>
    );
  },
};
