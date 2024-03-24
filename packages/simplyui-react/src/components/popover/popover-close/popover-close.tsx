'use client';
import type { PopoverCloseProps } from './popover-close.types';
import { forwardRef } from 'react';
import { Close } from '@radix-ui/react-popover';

export const PopoverClose = forwardRef<HTMLButtonElement, PopoverCloseProps>((props, ref) => {
  const { children, ...others } = props;

  return (
    <Close ref={ref} {...others}>
      {children}
    </Close>
  );
});

PopoverClose.displayName = 'Popover.Close';
