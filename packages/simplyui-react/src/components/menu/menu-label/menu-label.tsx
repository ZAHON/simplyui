'use client';
import type { MenuLabelProps } from './menu-label.types';
import { forwardRef } from 'react';
import { Label } from '@radix-ui/react-dropdown-menu';
import { twMerge } from 'tailwind-merge';
import { useMenuContentContext } from '../menu-content-context';
import { menuLabelStyles } from './menu-label.styles';

export const MenuLabel = forwardRef<HTMLDivElement, MenuLabelProps>((props, ref) => {
  const { className, children, ...others } = props;

  const { size } = useMenuContentContext();

  return (
    <Label ref={ref} className={twMerge(menuLabelStyles({ size }), className)} {...others}>
      {children}
    </Label>
  );
});

MenuLabel.displayName = 'Menu.Label';
