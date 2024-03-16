'use client';
import type { SelectPortalProps } from './select-portal.types';
import { Portal } from '@radix-ui/react-select';

export function SelectPortal(props: SelectPortalProps) {
  const { children, ...others } = props;

  return <Portal {...others}>{children}</Portal>;
}
