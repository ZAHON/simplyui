'use client';
import type { ModalCloseProps } from './modal-close.types';
import { forwardRef } from 'react';
import { Close } from '@radix-ui/react-dialog';

export const ModalClose = forwardRef<HTMLButtonElement, ModalCloseProps>((props, ref) => {
  const { children, ...others } = props;

  return (
    <Close ref={ref} {...others}>
      {children}
    </Close>
  );
});

ModalClose.displayName = 'ModalClose';
