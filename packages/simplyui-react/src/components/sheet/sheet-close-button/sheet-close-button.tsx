'use client';
import type { SheetCloseButtonProps } from './sheet-close-button.types';
import { forwardRef } from 'react';
import { Close } from '@radix-ui/react-dialog';
import { twMerge } from 'tailwind-merge';
import { sheetCloseButtonStyles } from './sheet-close-button.styles';

export const SheetCloseButton = forwardRef<HTMLButtonElement, SheetCloseButtonProps>((props, ref) => {
  const { className, children, ...others } = props;

  return (
    <Close ref={ref} className={twMerge(sheetCloseButtonStyles(), className)} {...others}>
      {children}
    </Close>
  );
});

SheetCloseButton.displayName = 'Sheet.CloseButton';
