'use client';
import type { ScrollAreaRootProps } from './scroll-area-root.types';
import { forwardRef } from 'react';
import { Root } from '@radix-ui/react-scroll-area';
import { twMerge } from 'tailwind-merge';
import { scrollAreaRootStyles } from './scroll-area-root.styles';

export const ScrollAreaRoot = forwardRef<HTMLDivElement, ScrollAreaRootProps>((props, ref) => {
  const { className, children, ...others } = props;

  return (
    <Root ref={ref} dir="ltr" className={twMerge(scrollAreaRootStyles(), className)} {...others}>
      {children}
    </Root>
  );
});

ScrollAreaRoot.displayName = 'ScrollArea.Root';
