'use client';
import type { ScrollAreaThumbProps } from './scroll-area-thumb.types';
import { forwardRef } from 'react';
import { Thumb } from '@radix-ui/react-scroll-area';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '../../../utils/applay-component-default-props';
import { scrollAreaThumbStyles } from './scroll-area-thumb.styles';

const defaultProps: Partial<ScrollAreaThumbProps> = {
  radius: 'full',
};

export const ScrollAreaThumb = forwardRef<HTMLDivElement, ScrollAreaThumbProps>((props, ref) => {
  const { radius, className, children, ...others } = applayComponentDefaultProps(defaultProps, props);

  return (
    <Thumb ref={ref} className={twMerge(scrollAreaThumbStyles({ radius }), className)} {...others}>
      {children}
    </Thumb>
  );
});

ScrollAreaThumb.displayName = 'ScrollArea.Thumb';
