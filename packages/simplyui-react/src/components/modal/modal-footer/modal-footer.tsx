'use client';
import type { ModalFooterProps } from './modal-footer.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Primitive } from '../../primitive';
import { useModalContentContext } from '../modal-content-context';
import { modalFooterStyles } from './modal-footer.styles';

export const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>((props, ref) => {
  const { className, children, ...others } = props;

  const { size } = useModalContentContext();

  return (
    <Primitive.div ref={ref} className={twMerge(modalFooterStyles({ size }), className)} {...others}>
      {children}
    </Primitive.div>
  );
});

ModalFooter.displayName = 'Modal.Footer';
