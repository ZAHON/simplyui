'use client';
import type { SliderRootProps } from './slider-root.types';
import { forwardRef } from 'react';
import { Root } from '@radix-ui/react-slider';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils/applay-component-default-props';
import { SliderContextProvider } from '../slider-context';
import { sliderRootStyles } from './slider-root.styles';

const defaultProps: Partial<SliderRootProps> = {
  color: 'primary',
  radius: 'full',
  size: '2',
};

export const SliderRoot = forwardRef<HTMLSpanElement, SliderRootProps>((props, ref) => {
  const { disabled, color, radius, size, className, children, ...others } = applayComponentDefaultProps(
    defaultProps,
    props
  );

  return (
    <SliderContextProvider value={{ disabled, color, radius, size }}>
      <Root
        ref={ref}
        dir="ltr"
        disabled={disabled}
        className={twMerge(sliderRootStyles({ size }), className)}
        {...others}
      >
        {children}
      </Root>
    </SliderContextProvider>
  );
});

SliderRoot.displayName = 'SliderRoot';
