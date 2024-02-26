'use client';
import type { ModalBodyProps } from './modal-body.types';
import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { twMerge } from 'tailwind-merge';
import { useModalContentContext } from '../modal-content-context';
import { modalBodyStyles } from './modal-body.styles';

export const ModalBody = forwardRef<HTMLDivElement, ModalBodyProps>((props, ref) => {
  const { asChild, className, children, ...others } = props;

  const { size } = useModalContentContext();

  const Component = asChild ? Slot : 'div';

  return (
    <Component ref={ref} className={twMerge(modalBodyStyles({ size }), className)} {...others}>
      {children}
    </Component>
  );
});

ModalBody.displayName = 'ModalBody';
