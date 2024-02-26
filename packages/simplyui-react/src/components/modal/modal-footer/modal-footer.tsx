'use client';
import type { ModalFooterProps } from './modal-footer.types';
import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { twMerge } from 'tailwind-merge';
import { useModalContentContext } from '../modal-content-context';
import { modalFooterStyles } from './modal-footer.styles';

export const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>((props, ref) => {
  const { asChild, className, children, ...others } = props;

  const { size } = useModalContentContext();

  const Component = asChild ? Slot : 'div';

  return (
    <Component ref={ref} className={twMerge(modalFooterStyles({ size }), className)} {...others}>
      {children}
    </Component>
  );
});

ModalFooter.displayName = 'ModalFooter';
