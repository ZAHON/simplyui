'use client';
import type { ModalHeaderProps } from './modal-header.types';
import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { twMerge } from 'tailwind-merge';
import { useModalContentContext } from '../modal-content-context';
import { modalHeaderStyles } from './modal-header.styles';

export const ModalHeader = forwardRef<HTMLDivElement, ModalHeaderProps>((props, ref) => {
  const { asChild, className, children, ...others } = props;

  const { size } = useModalContentContext();

  const Component = asChild ? Slot : 'div';

  return (
    <Component ref={ref} className={twMerge(modalHeaderStyles({ size }), className)} {...others}>
      {children}
    </Component>
  );
});

ModalHeader.displayName = 'ModalHeader';
