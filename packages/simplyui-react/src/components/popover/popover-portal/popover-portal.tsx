'use client';
import type { PopoverPortalProps } from './popover-portal.types';
import { Portal } from '@radix-ui/react-popover';

export function PopoverPortal(props: PopoverPortalProps) {
  const { children, ...others } = props;

  return <Portal {...others}>{children}</Portal>;
}
