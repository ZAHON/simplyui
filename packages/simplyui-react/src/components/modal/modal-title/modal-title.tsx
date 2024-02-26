'use client';
import type { ModalTitleProps } from './modal-title.types';
import { forwardRef } from 'react';
import { Title } from '@radix-ui/react-dialog';
import { twMerge } from 'tailwind-merge';
import { useModalContentContext } from '../modal-content-context';
import { modalTitleStyles } from './modal-title.styles';

export const ModalTitle = forwardRef<HTMLHeadingElement, ModalTitleProps>((props, ref) => {
  const { visuallyHidden, className, children, ...others } = props;

  const { size } = useModalContentContext();

  return (
    <Title ref={ref} className={twMerge(modalTitleStyles({ size, visuallyHidden }), className)} {...others}>
      {children}
    </Title>
  );
});

ModalTitle.displayName = 'ModalTitle';
