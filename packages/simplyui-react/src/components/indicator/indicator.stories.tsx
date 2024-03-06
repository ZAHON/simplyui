import type { Meta, StoryObj } from '@storybook/react';
import type { IndicatorDotProps } from '.';
import { useState } from 'react';
import { Avatar } from '@/components/avatar';
import { Label } from '@/components/label';
import { Slider } from '@/components/slider';
import { Switch } from '@/components/switch';
import { Indicator } from '.';

const meta: Meta<typeof Indicator> = {
  title: 'Data Display/Indicator',
  component: Indicator,
};

export default meta;
type Story = StoryObj<typeof Indicator>;

export const Default: Story = {
  render: () => {
    const [size, setSize] = useState([3]);

    return (
      <div style={{ maxWidth: '36rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', rowGap: '2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', rowGap: '0.5rem' }}>
            <Label asChild>
              <span id="size">Size: {size[0]}</span>
            </Label>
            <Slider min={1} max={9} value={[size[0]]} onValueChange={(value) => setSize([...value])}>
              <Slider.Track>
                <Slider.Range />
              </Slider.Track>
              <Slider.Thumb aria-labelledby="size" />
            </Slider>
          </div>
          <Indicator>
            <Indicator.Dot size={size[0].toString() as IndicatorDotProps['size']} />
            <Avatar size={size[0].toString() as IndicatorDotProps['size']}>
              <Avatar.Image
                src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                alt="A"
              />
              <Avatar.Fallback>A</Avatar.Fallback>
            </Avatar>
          </Indicator>
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
        <Indicator>
          <Indicator.Dot processing={processing} color="danger" />
          <Avatar>
            <Avatar.Image
              src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
              alt="A"
            />
            <Avatar.Fallback>A</Avatar.Fallback>
          </Avatar>
        </Indicator>
        <div style={{ display: 'flex', alignItems: 'center', columnGap: '0.5rem' }}>
          <Switch id="processing" checked={processing} onCheckedChange={setProcessing}>
            <Switch.Thumb />
          </Switch>
          <Label htmlFor="processing">Processing</Label>
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
        <Indicator>
          <Indicator.Dot disabled={disabled} color="danger" />
          <Avatar>
            <Avatar.Image
              src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
              alt="A"
            />
            <Avatar.Fallback>A</Avatar.Fallback>
          </Avatar>
        </Indicator>
        <div style={{ display: 'flex', alignItems: 'center', columnGap: '0.5rem' }}>
          <Switch id="disabled" checked={disabled} onCheckedChange={setDisabled}>
            <Switch.Thumb />
          </Switch>
          <Label htmlFor="disabled">Disabled</Label>
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
        <Indicator>
          <Indicator.Dot withBorder={withBorder} />
          <Avatar>
            <Avatar.Image
              src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
              alt="A"
            />
            <Avatar.Fallback>A</Avatar.Fallback>
          </Avatar>
        </Indicator>
        <div style={{ display: 'flex', alignItems: 'center', columnGap: '0.5rem' }}>
          <Switch id="with-border" checked={withBorder} onCheckedChange={setWithBorder}>
            <Switch.Thumb />
          </Switch>
          <Label htmlFor="with-border">With border</Label>
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
          <Indicator>
            <Indicator.Dot offset={offset[0]} position="bottom-end" withBorder />
            <Avatar radius="full">
              <Avatar.Image
                src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                alt="A"
              />
              <Avatar.Fallback>A</Avatar.Fallback>
            </Avatar>
          </Indicator>
          <div style={{ display: 'flex', flexDirection: 'column', rowGap: '0.25rem' }}>
            <Label asChild>
              <span id="offset">Offset: {offset[0]}</span>
            </Label>
            <Slider min={0} max={10} value={[offset[0]]} onValueChange={(value) => setOffset([...value])}>
              <Slider.Track>
                <Slider.Range />
              </Slider.Track>
              <Slider.Thumb aria-labelledby="offset" />
            </Slider>
          </div>
        </div>
      </div>
    );
  },
};
