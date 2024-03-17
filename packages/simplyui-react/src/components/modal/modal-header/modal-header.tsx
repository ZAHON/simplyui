'use client';
import type { ModalHeaderProps } from './modal-header.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Primitive } from '@/components/primitive';
import { useModalContentContext } from '../modal-content-context';
import { modalHeaderStyles } from './modal-header.styles';

export const ModalHeader = forwardRef<HTMLDivElement, ModalHeaderProps>((props, ref) => {
  const { className, children, ...others } = props;

  const { size } = useModalContentContext();

  return (
    <Primitive.div ref={ref} className={twMerge(modalHeaderStyles({ size }), className)} {...others}>
      {children}
    </Primitive.div>
  );
});

ModalHeader.displayName = 'ModalHeader';
