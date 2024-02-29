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
  size: 'md',
};

export const SliderRoot = forwardRef<HTMLSpanElement, SliderRootProps>((props, ref) => {
  const { color, radius, size, className, children, ...others } = applayComponentDefaultProps(defaultProps, props);

  return (
    <SliderContextProvider value={{ color, radius, size }}>
      <Root ref={ref} dir="ltr" className={twMerge(sliderRootStyles({ size }), className)} {...others}>
        {children}
      </Root>
    </SliderContextProvider>
  );
});

SliderRoot.displayName = 'SliderRoot';
