'use client';
import type { SheetRootProps } from './sheet-root.types';
import { Root } from '@radix-ui/react-dialog';

export function SheetRoot(props: SheetRootProps) {
  const { children, ...others } = props;

  return <Root {...others}>{children}</Root>;
}
