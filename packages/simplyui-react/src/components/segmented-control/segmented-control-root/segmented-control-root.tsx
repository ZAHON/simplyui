'use client';
import type { SegmentedControlRootProps } from './segmented-control-root.types';
import type { SegmentedControlContextValue } from '../segmented-control-context';
import { forwardRef, useId } from 'react';
import { twMerge } from 'tailwind-merge';
import { useUncontrolled } from '@/hooks/use-uncontrolled';
import { applayComponentDefaultProps } from '@/utils/applay-component-default-props';
import { Primitive } from '@/components/primitive';
import { SegmentedControlContextProvider } from '../segmented-control-context';
import { segmentedControlRootStyles } from './segmented-control-root.styles';

const defaultProps: Partial<SegmentedControlRootProps> = {
  color: 'default',
  radius: 'md',
  size: 'md',
};

export const SegmentedControlRoot = forwardRef<HTMLDivElement, SegmentedControlRootProps>((props, ref) => {
  const {
    color,
    defaultValue,
    disabled,
    name,
    onValueChange,
    radius,
    required,
    size,
    value,
    className,
    children,
    ...others
  } = applayComponentDefaultProps(defaultProps, props);

  const id = useId();

  const [_value, handleValueChange] = useUncontrolled({
    value: value,
    defaultValue: defaultValue,
    finalValue: '',
    onChange: onValueChange,
  });

  const groupName = name ? name : `segmented-control-${id}`;

  const segmentedControlContextValue: SegmentedControlContextValue = {
    color,
    disabled,
    handleValueChange,
    name: groupName,
    radius,
    size,
    value: _value,
  };

  return (
    <SegmentedControlContextProvider value={segmentedControlContextValue}>
      <Primitive.div
        ref={ref}
        role="radiogroup"
        data-disabled={disabled ? '' : undefined}
        aria-required={required ? true : undefined}
        className={twMerge(segmentedControlRootStyles({ radius, size }), className)}
        {...others}
      >
        {children}
      </Primitive.div>
    </SegmentedControlContextProvider>
  );
});

SegmentedControlRoot.displayName = 'SegmentedControlRoot';
