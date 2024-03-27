'use client';
import type { SliderThumbProps } from './slider-thumb.types';
import { forwardRef } from 'react';
import { Thumb } from '@radix-ui/react-slider';
import { twMerge } from 'tailwind-merge';
import { mergeRefs } from 'react-merge-refs';
import { Primitive } from '../../primitive';
import { useSliderContext } from '../slider-context';
import { sliderThumbStyles } from './slider-thumb.styles';

export const SliderThumb = forwardRef<HTMLButtonElement, SliderThumbProps>((props, ref) => {
  const { className, children, ...others } = props;

  const { disabled, color, radius, size, setThumbRef } = useSliderContext();

  return (
    <Thumb asChild>
      <Primitive.button
        ref={mergeRefs([(node) => setThumbRef(node), ref])}
        disabled={disabled}
        className={twMerge(sliderThumbStyles({ color, radius, size }), className)}
        {...others}
      >
        {children}
      </Primitive.button>
    </Thumb>
  );
});

SliderThumb.displayName = 'Slider.Thumb';
