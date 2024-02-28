'use client';
import type { MenuRootProps } from './menu-root.types';
import { Root } from '@radix-ui/react-dropdown-menu';

export function MenuRoot(props: MenuRootProps) {
  const { children, ...others } = props;

  return (
    <Root dir="ltr" {...others}>
      {children}
    </Root>
  );
}
