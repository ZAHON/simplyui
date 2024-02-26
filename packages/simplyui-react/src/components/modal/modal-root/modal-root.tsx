'use client';
import type { ModalRootProps } from './modal-root.types';
import { Root } from '@radix-ui/react-dialog';

export function ModalRoot(props: ModalRootProps) {
  const { children, ...others } = props;

  return <Root {...others}>{children}</Root>;
}
