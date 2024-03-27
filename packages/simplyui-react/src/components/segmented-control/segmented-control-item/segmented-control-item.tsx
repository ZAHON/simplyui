'use client';
import type { SegmentedControlItemProps } from './segmented-control-item.types';
import { forwardRef } from 'react';
import { Item } from '@radix-ui/react-radio-group';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '../../../utils/applay-component-default-props';
import { SegmentedControlItemContextProvider } from '../segmented-control-item-context';
import { useSegmentedControlContext } from '../segmented-control-context';
import { segmentedControlItemStyles } from './segmented-control-item.styles';

const defaultProps: Partial<SegmentedControlItemProps> = {
  withSeparator: true,
};

export const SegmentedControlItem = forwardRef<HTMLButtonElement, SegmentedControlItemProps>((props, ref) => {
  const { disabled, value, withSeparator, className, children, ...others } = applayComponentDefaultProps(
    defaultProps,
    props
  );

  const { radius, size, value: groupValue } = useSegmentedControlContext();

  const state = value === groupValue ? 'checked' : 'unchecked';

  return (
    <SegmentedControlItemContextProvider value={{ disabled, state }}>
      <Item
        ref={ref}
        disabled={disabled}
        value={value}
        className={twMerge(segmentedControlItemStyles({ radius, size, withSeparator }), className)}
        {...others}
      >
        {children}
      </Item>
    </SegmentedControlItemContextProvider>
  );
});

SegmentedControlItem.displayName = 'SegmentedControl.Item';
