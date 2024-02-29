'use client';
import type { ScrollAreaCornerProps } from './scroll-area-corner.types';
import { forwardRef } from 'react';
import { Corner } from '@radix-ui/react-scroll-area';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils/applay-component-default-props';
import { scrollAreaCornerStyles } from './scroll-area-corner.styles';

const defaultProps: Partial<ScrollAreaCornerProps> = {
  withBackground: true,
};

export const ScrollAreaCorner = forwardRef<HTMLDivElement, ScrollAreaCornerProps>((props, ref) => {
  const { withBackground, className, children, ...others } = applayComponentDefaultProps(defaultProps, props);

  return (
    <Corner ref={ref} className={twMerge(scrollAreaCornerStyles({ withBackground }), className)} {...others}>
      {children}
    </Corner>
  );
});

ScrollAreaCorner.displayName = 'ScrollAreaCorner';
