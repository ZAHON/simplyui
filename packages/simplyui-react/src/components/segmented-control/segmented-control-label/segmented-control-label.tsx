'use client';
import type { SegmentedControlLabelProps } from './segmented-control-label.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { useSegmentedControlContext } from '../segmented-control-context';
import { useSegmentedControlItemContext } from '../segmented-control-item-context';
import { segmentedControlLabelStyles } from './segmented-control-label.styles';

export const SegmentedControlLabel = forwardRef<HTMLLabelElement, SegmentedControlLabelProps>((props, ref) => {
  const { className, children, ...others } = props;

  const { color, radius, size } = useSegmentedControlContext();
  const { checked, disabled, id } = useSegmentedControlItemContext();

  return (
    <label
      ref={ref}
      htmlFor={id}
      data-disabled={disabled ? '' : undefined}
      data-state={checked ? 'checked' : 'unchecked'}
      className={twMerge(segmentedControlLabelStyles({ color, radius, size }), className)}
      {...others}
    >
      {children}
    </label>
  );
});

SegmentedControlLabel.displayName = 'SegmentedControlLabel';
