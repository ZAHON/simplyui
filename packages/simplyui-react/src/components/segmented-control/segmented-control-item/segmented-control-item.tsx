'use client';
import type { SegmentedControlItemProps } from './segmented-control-item.types';
import { forwardRef } from 'react';
import { Item } from '@radix-ui/react-radio-group';
import { twMerge } from 'tailwind-merge';
import { useSegmentedControlContext } from '../segmented-control-context';
import { segmentedControlItemStyles } from './segmented-control-item.styles';

export const SegmentedControlItem = forwardRef<HTMLButtonElement, SegmentedControlItemProps>((props, ref) => {
  const { className, children, ...others } = props;

  const { color, radius, size } = useSegmentedControlContext();

  return (
    <Item ref={ref} className={twMerge(segmentedControlItemStyles({ color, radius, size }), className)} {...others}>
      {children}
    </Item>
  );
});

SegmentedControlItem.displayName = 'SegmentedControl.Item';
