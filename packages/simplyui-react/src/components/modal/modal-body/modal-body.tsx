'use client';
import type { ModalBodyProps } from './modal-body.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Primitive } from '@/components/primitive';
import { useModalContentContext } from '../modal-content-context';
import { modalBodyStyles } from './modal-body.styles';

export const ModalBody = forwardRef<HTMLDivElement, ModalBodyProps>((props, ref) => {
  const { className, children, ...others } = props;

  const { size } = useModalContentContext();

  return (
    <Primitive.div ref={ref} className={twMerge(modalBodyStyles({ size }), className)} {...others}>
      {children}
    </Primitive.div>
  );
});

ModalBody.displayName = 'ModalBody';
