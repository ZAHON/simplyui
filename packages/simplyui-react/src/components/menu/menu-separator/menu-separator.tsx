'use client';
import type { MenuSeparatorProps } from './menu-separator.types';
import { forwardRef } from 'react';
import { Separator } from '@radix-ui/react-dropdown-menu';
import { twMerge } from 'tailwind-merge';
import { useMenuContentContext } from '../menu-content-context';
import { menuSeparatorStyles } from './menu-separator.styles';

export const MenuSeparator = forwardRef<HTMLDivElement, MenuSeparatorProps>((props, ref) => {
  const { className, children, ...others } = props;

  const { size } = useMenuContentContext();

  return (
    <Separator ref={ref} className={twMerge(menuSeparatorStyles({ size }), className)} {...others}>
      {children}
    </Separator>
  );
});

MenuSeparator.displayName = 'MenuSeparator';
