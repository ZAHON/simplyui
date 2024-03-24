'use client';
import type { SegmentedControlRootProps } from './segmented-control-root.types';
import { forwardRef } from 'react';
import { Root } from '@radix-ui/react-radio-group';
import { twMerge } from 'tailwind-merge';
import { useUncontrolled } from '../../../hooks/use-uncontrolled';
import { applayComponentDefaultProps } from '../../../utils/applay-component-default-props';
import { SegmentedControlContextProvider } from '../segmented-control-context';
import { segmentedControlRootStyles } from './segmented-control-root.styles';

const defaultProps: Partial<SegmentedControlRootProps> = {
  color: 'default',
  radius: 'md',
  size: '2',
};

export const SegmentedControlRoot = forwardRef<HTMLDivElement, SegmentedControlRootProps>((props, ref) => {
  const { defaultValue, value, onValueChange, color, disabled, radius, size, className, children, ...others } =
    applayComponentDefaultProps(defaultProps, props);

  const [_value, setValue] = useUncontrolled({
    defaultValue: defaultValue,
    value: value,
    finalValue: '',
    onChange: onValueChange,
  });

  function handleValueChange(value: string) {
    if (!disabled) setValue(value);
  }

  return (
    <SegmentedControlContextProvider value={{ color, disabled, radius, size, value: _value }}>
      <Root
        ref={ref}
        dir="ltr"
        orientation="horizontal"
        value={_value}
        disabled={disabled}
        onValueChange={handleValueChange}
        className={twMerge(segmentedControlRootStyles({ radius, size }), className)}
        {...others}
      >
        {children}
      </Root>
    </SegmentedControlContextProvider>
  );
});

SegmentedControlRoot.displayName = 'SegmentedControl.Root';
