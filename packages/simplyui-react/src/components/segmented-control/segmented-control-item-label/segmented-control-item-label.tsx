'use client';
import type { SegmentedControlItemLabelProps } from './segmented-control-item-label.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Primitive } from '../../primitive';
import { useSegmentedControlContext } from '../segmented-control-context';
import { useSegmentedControlItemContext } from '../segmented-control-item-context';
import { segmentedControlItemLabelStyles } from './segmented-control-item-label.styles';

export const SegmentedControlItemLabel = forwardRef<HTMLSpanElement, SegmentedControlItemLabelProps>((props, ref) => {
  const { type, className, children, ...others } = props;

  const { size, disabled: groupDisabled } = useSegmentedControlContext();
  const { state, disabled: itemDisabled } = useSegmentedControlItemContext();

  const isDisabled = groupDisabled ?? itemDisabled;

  return (
    <Primitive.span
      ref={ref}
      data-disabled={isDisabled ? '' : undefined}
      data-state={state}
      className={twMerge(segmentedControlItemLabelStyles({ size, type }), className)}
      {...others}
    >
      {children}
    </Primitive.span>
  );
});

SegmentedControlItemLabel.displayName = 'SegmentedControl.ItemLabel';
