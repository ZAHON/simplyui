'use client';
import type { SliderThumbProps } from './slider-thumb.types';
import { forwardRef } from 'react';
import { Thumb } from '@radix-ui/react-slider';
import { twMerge } from 'tailwind-merge';
import { useSliderContext } from '../slider-context';
import { sliderThumbStyles } from './slider-thumb.styles';

export const SliderThumb = forwardRef<HTMLSpanElement, SliderThumbProps>((props, ref) => {
  const { className, children, ...others } = props;

  const { color, radius, size } = useSliderContext();

  return (
    <Thumb ref={ref} className={twMerge(sliderThumbStyles({ color, radius, size }), className)} {...others}>
      {children}
    </Thumb>
  );
});

SliderThumb.displayName = 'Slider.Thumb';
