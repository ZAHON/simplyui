'use client';
import type { SliderTrackProps } from './slider-track.types';
import { forwardRef } from 'react';
import { Track } from '@radix-ui/react-slider';
import { twMerge } from 'tailwind-merge';
import { useSliderContext } from '../slider-context';
import { sliderTrackStyles } from './slider-track.styles';

export const SliderTrack = forwardRef<HTMLSpanElement, SliderTrackProps>((props, ref) => {
  const { className, children, ...others } = props;

  const { radius, size } = useSliderContext();

  return (
    <Track ref={ref} className={twMerge(sliderTrackStyles({ radius, size }), className)} {...others}>
      {children}
    </Track>
  );
});

SliderTrack.displayName = 'Slider.Track';
