'use client';
import type { PopoverRootProps } from './popover-root.types';
import { Root } from '@radix-ui/react-popover';

export function PopoverRoot(props: PopoverRootProps) {
  const { children, ...others } = props;

  return <Root {...others}>{children}</Root>;
}
