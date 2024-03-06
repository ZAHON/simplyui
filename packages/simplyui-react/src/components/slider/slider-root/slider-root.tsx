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
  variant: 'default',
};

export const SliderRoot = forwardRef<HTMLSpanElement, SliderRootProps>((props, ref) => {
  const { color, inverted, radius, size, variant, className, children, ...others } = applayComponentDefaultProps(
    defaultProps,
    props
  );

  return (
    <SliderContextProvider value={{ color, inverted, radius, size, variant }}>
      <Root
        ref={ref}
        dir="ltr"
        inverted={inverted}
        className={twMerge(sliderRootStyles({ size }), className)}
        {...others}
      >
        {children}
      </Root>
    </SliderContextProvider>
  );
});

SliderRoot.displayName = 'SliderRoot';
