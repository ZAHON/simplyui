import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Text } from '@/components/text';
import * as Button from '@/components/button';
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
    name: '',
    radius: 'full',
    size: '2',
    step: 1,
    defaultValue: 50,
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

export const WithTooltip: Story = {
  parameters: {
    layout: 'centered',
  },
  render: ({ ...props }) => {
    const [value, setValue] = useState(50);

    return (
      <div style={{ width: '34rem' }}>
        <Slider.Root {...props} value={value} onValueChange={setValue}>
          <Slider.Track>
            <Slider.Range />
          </Slider.Track>
          <Slider.Thumb aria-label="Thumb 1">
            <Slider.Tooltip side="top" type="always">
              <Slider.TooltipContent>
                <Slider.TooltipText>{(value) => `${value}%`}</Slider.TooltipText>
              </Slider.TooltipContent>
              <Slider.TooltipArrow />
            </Slider.Tooltip>
          </Slider.Thumb>
        </Slider.Root>
      </div>
    );
  },
};

export const Controlled: Story = {
  render: ({ ...props }) => {
    const [value, setValue] = useState(50);
    const [valueCommit, setValueCommit] = useState(50);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', rowGap: '1rem' }}>
        <Slider.Root {...props} value={value} onValueChange={setValue} onValueCommit={setValueCommit}>
          <Slider.Track>
            <Slider.Range />
          </Slider.Track>
          <Slider.Thumb aria-label="Thumb 1" />
        </Slider.Root>
        <Text>Value: {value}</Text>
        <Text>valueCommit: {valueCommit}</Text>
        <div style={{ display: 'flex', columnGap: '0.5rem' }}>
          <Button.Root onClick={() => setValue(0)}>
            <Button.Content>0</Button.Content>
          </Button.Root>
          <Button.Root onClick={() => setValue(25)}>
            <Button.Content>25</Button.Content>
          </Button.Root>
          <Button.Root onClick={() => setValue(50)}>
            <Button.Content>50</Button.Content>
          </Button.Root>
          <Button.Root onClick={() => setValue(75)}>
            <Button.Content>75</Button.Content>
          </Button.Root>
          <Button.Root onClick={() => setValue(100)}>
            <Button.Content>100</Button.Content>
          </Button.Root>
        </div>
      </div>
    );
  },
};
