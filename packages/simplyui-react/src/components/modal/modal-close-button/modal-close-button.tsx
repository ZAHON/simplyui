'use client';
import type { ModalCloseButtonProps } from './modal-close-button.types';
import { forwardRef } from 'react';
import { Close } from '@radix-ui/react-dialog';
import { twMerge } from 'tailwind-merge';
import { modalCloseButtonStyles } from './modal-close-button.styles';

export const ModalCloseButton = forwardRef<HTMLButtonElement, ModalCloseButtonProps>((props, ref) => {
  const { className, children, ...others } = props;

  return (
    <Close ref={ref} className={twMerge(modalCloseButtonStyles(), className)} {...others}>
      {children}
    </Close>
  );
});

ModalCloseButton.displayName = 'ModalCloseButton';
