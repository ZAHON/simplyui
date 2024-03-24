'use client';
import type { ModalDescriptionProps } from './modal-description.types';
import { forwardRef } from 'react';
import { Description } from '@radix-ui/react-dialog';
import { twMerge } from 'tailwind-merge';
import { useModalContentContext } from '../modal-content-context';
import { modalDescriptionStyles } from './modal-description.styles';

export const ModalDescription = forwardRef<HTMLHeadingElement, ModalDescriptionProps>((props, ref) => {
  const { visuallyHidden, className, children, ...others } = props;

  const { size } = useModalContentContext();

  return (
    <Description ref={ref} className={twMerge(modalDescriptionStyles({ size, visuallyHidden }), className)} {...others}>
      {children}
    </Description>
  );
});

ModalDescription.displayName = 'Modal.Description';
