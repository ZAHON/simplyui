'use client';
import type { SliderRootProps } from './slider-root.types';
import { forwardRef, useState } from 'react';
import { Root } from '@radix-ui/react-slider';
import { twMerge } from 'tailwind-merge';
import { useUncontrolled } from '../../../hooks/use-uncontrolled';
import { applayComponentDefaultProps } from '../../../utils/applay-component-default-props';
import { SliderContextProvider } from '../slider-context';
import { sliderRootStyles } from './slider-root.styles';

const defaultProps: Partial<SliderRootProps> = {
  color: 'primary',
  radius: 'full',
  size: '2',
};

export const SliderRoot = forwardRef<HTMLSpanElement, SliderRootProps>((props, ref) => {
  const {
    defaultValue,
    value,
    onValueChange,
    onValueCommit,
    disabled,
    min,
    max,
    color,
    radius,
    size,
    className,
    children,
    ...others
  } = applayComponentDefaultProps(defaultProps, props);

  const [thumbRef, setThumbRef] = useState<HTMLButtonElement | null>(null);

  const [_value, setValue] = useUncontrolled({
    defaultValue: defaultValue,
    value: value,
    finalValue: undefined,
    onChange: onValueChange,
  });

  function handleValueChange(value: number[]) {
    setValue(value[0]);
  }

  function handleValueCommit(value: number[]) {
    if (onValueCommit) onValueCommit(value[0]);
  }

  return (
    <SliderContextProvider value={{ value: _value, disabled, min, max, color, radius, size, thumbRef, setThumbRef }}>
      <Root
        ref={ref}
        dir="ltr"
        value={[_value]}
        min={min}
        max={max}
        disabled={disabled}
        onValueChange={handleValueChange}
        onValueCommit={handleValueCommit}
        className={twMerge(sliderRootStyles({ size }), className)}
        {...others}
      >
        {children}
      </Root>
    </SliderContextProvider>
  );
});

SliderRoot.displayName = 'Slider.Root';
