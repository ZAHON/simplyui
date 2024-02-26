'use client';
import { ModalPortalProps } from './modal-portal.types';
import { Portal } from '@radix-ui/react-dialog';

export function ModalPortal(props: ModalPortalProps) {
  const { children, ...others } = props;

  return <Portal {...others}>{children}</Portal>;
}
