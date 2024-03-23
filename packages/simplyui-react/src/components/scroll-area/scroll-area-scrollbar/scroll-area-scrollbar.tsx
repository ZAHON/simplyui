'use client';
import type { ScrollAreaScrollbarProps } from './scroll-area-scrollbar.types';
import { forwardRef } from 'react';
import { Scrollbar } from '@radix-ui/react-scroll-area';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils/applay-component-default-props';
import { scrollAreaScrollbarStyles } from './scroll-area-scrollbar.styles';

const defaultProps: Partial<ScrollAreaScrollbarProps> = {
  radius: 'none',
  size: '2',
  withBackground: true,
  withPadding: true,
};

export const ScrollAreaScrollbar = forwardRef<HTMLDivElement, ScrollAreaScrollbarProps>((props, ref) => {
  const { radius, size, withBackground, withPadding, className, children, ...others } = applayComponentDefaultProps(
    defaultProps,
    props
  );

  return (
    <Scrollbar
      ref={ref}
      className={twMerge(scrollAreaScrollbarStyles({ radius, size, withBackground, withPadding }), className)}
      {...others}
    >
      {children}
    </Scrollbar>
  );
});

ScrollAreaScrollbar.displayName = 'ScrollAreaScrollbar';
