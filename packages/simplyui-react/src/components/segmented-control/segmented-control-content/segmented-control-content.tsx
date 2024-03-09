'use client';
import type { SegmentedControlContentProps, SegmentedControlContentStyle } from './segmented-control-content.types';
import { forwardRef, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import { Primitive } from '@/components/primitive';
import { getValidChildren } from '@/utils/get-valid-children';
import { useSegmentedControlContext } from '../segmented-control-context';
import { segmentedControlContentStyles } from './segmented-control-content.styles';

export const SegmentedControlContent = forwardRef<HTMLDivElement, SegmentedControlContentProps>((props, ref) => {
  const { className, style, children, ...others } = props;

  const { disabled, value } = useSegmentedControlContext();

  const { itemsCount, checkedItemIndex } = useMemo(() => {
    const validChildren = getValidChildren(children);
    const items = validChildren.filter(({ props }) => (props && 'value' in props ? true : false));

    const itemsCount = items.length;

    const checkedItemIndex = items.findIndex((child) => {
      const { props } = child;

      return props && 'value' in props ? props.value === value : -1;
    });

    return { itemsCount, checkedItemIndex };
  }, [value, children]);

  const segmentedControlContentStyle: SegmentedControlContentStyle = {
    '--segmented-control-items-count': itemsCount,
    '--segmented-control-checked-item-index': checkedItemIndex,
    ...style,
  };

  return (
    <Primitive.div
      ref={ref}
      data-disabled={disabled ? '' : undefined}
      style={segmentedControlContentStyle}
      className={twMerge(segmentedControlContentStyles(), className)}
      {...others}
    >
      {children}
    </Primitive.div>
  );
});

SegmentedControlContent.displayName = 'SegmentedControlContent';
