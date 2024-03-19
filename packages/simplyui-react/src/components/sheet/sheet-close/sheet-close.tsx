'use client';
import type { SheetCloseProps } from './sheet-close.types';
import { forwardRef } from 'react';
import { Close } from '@radix-ui/react-dialog';

export const SheetClose = forwardRef<HTMLButtonElement, SheetCloseProps>((props, ref) => {
  const { children, ...others } = props;

  return (
    <Close ref={ref} {...others}>
      {children}
    </Close>
  );
});

SheetClose.displayName = 'SheetClose';
