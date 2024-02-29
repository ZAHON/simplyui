'use client';
import type { SliderRangeProps } from './slider-range.types';
import { forwardRef } from 'react';
import { Range } from '@radix-ui/react-slider';
import { twMerge } from 'tailwind-merge';
import { useSliderContext } from '../slider-context';
import { sliderRangeStyles } from './slider-range.styles';

export const SliderRange = forwardRef<HTMLSpanElement, SliderRangeProps>((props, ref) => {
  const { className, children, ...others } = props;

  const { color, inverted, radius } = useSliderContext();

  return (
    <Range ref={ref} className={twMerge(sliderRangeStyles({ color, inverted, radius }), className)} {...others}>
      {children}
    </Range>
  );
});

SliderRange.displayName = 'SliderRange';
