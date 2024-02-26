'use client';
import type { ModalCloseProps } from './modal-close.types';
import { forwardRef } from 'react';
import { Close } from '@radix-ui/react-dialog';
import { twMerge } from 'tailwind-merge';
import { modalCloseStyles } from './modal-close.styles';

export const ModalClose = forwardRef<HTMLButtonElement, ModalCloseProps>((props, ref) => {
  const { position, className, children, ...others } = props;

  return (
    <Close ref={ref} className={twMerge(modalCloseStyles({ position }), className)} {...others}>
      {children}
    </Close>
  );
});

ModalClose.displayName = 'ModalClose';
