'use client';
import type { SliderThumbProps } from './slider-thumb.types';
import { forwardRef } from 'react';
import { Thumb } from '@radix-ui/react-slider';
import { twMerge } from 'tailwind-merge';
import { Primitive } from '../../primitive';
import { useSliderContext } from '../slider-context';
import { sliderThumbStyles } from './slider-thumb.styles';

export const SliderThumb = forwardRef<HTMLButtonElement, SliderThumbProps>((props, ref) => {
  const { className, children, ...others } = props;

  const { color, radius, size } = useSliderContext();

  return (
    <Thumb asChild>
      <Primitive.button
        ref={ref}
        className={twMerge(sliderThumbStyles({ color, radius, size }), className)}
        {...others}
      >
        {children}
      </Primitive.button>
    </Thumb>
  );
});

SliderThumb.displayName = 'Slider.Thumb';
