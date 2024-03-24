'use client';
import type { ModalOverlayProps } from './modal-overlay.types';
import { forwardRef } from 'react';
import { Overlay } from '@radix-ui/react-dialog';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '../../../utils/applay-component-default-props';
import { modalOverlayStyles } from './modal-overlay.styles';

const defaultProps: Partial<ModalOverlayProps> = {
  backdrop: 'opaque',
};

export const ModalOverlay = forwardRef<HTMLDivElement, ModalOverlayProps>((props, ref) => {
  const { backdrop, className, ...others } = applayComponentDefaultProps(defaultProps, props);

  return <Overlay ref={ref} className={twMerge(modalOverlayStyles({ backdrop }), className)} {...others} />;
});

ModalOverlay.displayName = 'ModalOverlay';
