'use client';
import { SheetPortalProps } from './sheet-portal.types';
import { Portal } from '@radix-ui/react-dialog';

export function SheetPortal(props: SheetPortalProps) {
  const { children, ...others } = props;

  return <Portal {...others}>{children}</Portal>;
}
