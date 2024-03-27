'use client';
import type { SegmentedControlRootProps, SegmentedControlRootStyle } from './segmented-control-root.types';
import { forwardRef, useMemo } from 'react';
import { Root } from '@radix-ui/react-radio-group';
import { twMerge } from 'tailwind-merge';
import { getValidChildren } from '../../../utils/get-valid-children';
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
  const { defaultValue, value, onValueChange, disabled, radius, size, style, className, children, ...others } =
    applayComponentDefaultProps(defaultProps, props);

  const [_value, setValue] = useUncontrolled({
    defaultValue: defaultValue,
    value: value,
    finalValue: '',
    onChange: onValueChange,
  });

  const { itemsCount, checkedItemIndex } = useMemo(() => {
    const validChildren = getValidChildren(children);
    const items = validChildren.filter(({ props }) => (props && 'value' in props ? true : false));

    const itemsCount = items.length;

    const checkedItemIndex = items.findIndex((child) => {
      const { props } = child;

      return props && 'value' in props ? props.value === _value : -1;
    });

    return { itemsCount, checkedItemIndex };
  }, [_value, children]);

  function handleValueChange(value: string) {
    if (!disabled) setValue(value);
  }

  const segmentedControlRootStyle: SegmentedControlRootStyle = {
    '--segmented-control-items-count': itemsCount,
    '--segmented-control-checked-item-index': checkedItemIndex,
    ...style,
  };

  return (
    <SegmentedControlContextProvider value={{ disabled, radius, size, value: _value }}>
      <Root
        ref={ref}
        dir="ltr"
        orientation="horizontal"
        value={_value}
        disabled={disabled}
        onValueChange={handleValueChange}
        style={segmentedControlRootStyle}
        className={twMerge(segmentedControlRootStyles({ radius, size }), className)}
        {...others}
      >
        {children}
      </Root>
    </SegmentedControlContextProvider>
  );
});

SegmentedControlRoot.displayName = 'SegmentedControl.Root';
