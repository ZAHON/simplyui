'use client';
import type { SliderMarkerProps } from './slider-marker.types';
import type { CSSProperties } from 'react';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Primitive } from '@/components/primitive';
import { convertValueToPercentage } from '@/utils/convert-value-to-percentage';
import { getMarkInBoundsOffset } from './utils/get-mark-in-bounds-offset';
import { getSliderThumbSize } from './utils/get-slider-thumb-size';
import { useSliderContext } from '../slider-context';
import { sliderMarkerStyles } from './slider-marker.styles';

export const SliderMarker = forwardRef<HTMLSpanElement, SliderMarkerProps>((props, ref) => {
  const { value, style, className, children, ...others } = props;

  const { disabled, size } = useSliderContext();

  const percent = convertValueToPercentage(value, 0, 100);
  const sliderThumbSize = getSliderThumbSize(size);
  const markInBoundsOffset = sliderThumbSize ? getMarkInBoundsOffset(sliderThumbSize, percent, 1) : 0;

  const sliderMarkerStyle: CSSProperties = {
    left: `calc(${percent}% + ${markInBoundsOffset}px)`,
    ...style,
  };

  return (
    <Primitive.span
      ref={ref}
      role="presentation"
      data-disabled={disabled ? '' : undefined}
      style={sliderMarkerStyle}
      className={twMerge(sliderMarkerStyles({ size }), className)}
      {...others}
    >
      {children}
    </Primitive.span>
  );
});

SliderMarker.displayName = 'SliderMarker';
