'use client';
import type { MenuPortalProps } from './menu-portal.types';
import { Portal } from '@radix-ui/react-dropdown-menu';

export function MenuPortal(props: MenuPortalProps) {
  const { children, ...others } = props;

  return <Portal {...others}>{children}</Portal>;
}
