'use client';
import type { SliderMarkerProps } from './slider-marker.types';
import type { CSSProperties } from 'react';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { useSize } from '../../../hooks/use-size';
import { Primitive } from '../../primitive';
import { convertValueToPercentage } from '../../../utils/convert-value-to-percentage';
import { getMarkInBoundsOffset } from './utils/get-mark-in-bounds-offset';
import { useSliderContext } from '../slider-context';
import { sliderMarkerStyles } from './slider-marker.styles';

export const SliderMarker = forwardRef<HTMLSpanElement, SliderMarkerProps>((props, ref) => {
  const { value, style, className, children, ...others } = props;

  const { disabled, min, max, size, thumbRef } = useSliderContext();

  const thumbSize = useSize(thumbRef);
  const valueToPercentage = value === undefined ? 0 : convertValueToPercentage(value, min ?? 0, max ?? 100);
  const markInBoundsOffset = thumbSize ? getMarkInBoundsOffset(thumbSize.width, valueToPercentage, 1) : 0;

  const sliderMarkerStyle: CSSProperties = {
    left: `calc(${valueToPercentage}% + ${markInBoundsOffset}px)`,
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

SliderMarker.displayName = 'Slider.Marker';
