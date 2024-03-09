'use client';
import type { SegmentedControlIndicatorProps } from './segmented-control-indicator.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Primitive } from '@/components/primitive';
import { useSegmentedControlContext } from '../segmented-control-context';
import { segmentedControlIndicatorStyles } from './segmented-control-indicator.styles';

export const SegmentedControlIndicator = forwardRef<HTMLDivElement, SegmentedControlIndicatorProps>((props, ref) => {
  const { className, children, ...others } = props;

  const { color, disabled, radius, value } = useSegmentedControlContext();

  if (!value) {
    return null;
  }

  return (
    <Primitive.div
      ref={ref}
      aria-hidden="true"
      data-disabled={disabled ? '' : undefined}
      className={twMerge(segmentedControlIndicatorStyles({ color, radius }), className)}
      {...others}
    >
      {children}
    </Primitive.div>
  );
});

SegmentedControlIndicator.displayName = 'SegmentedControlIndicator';
