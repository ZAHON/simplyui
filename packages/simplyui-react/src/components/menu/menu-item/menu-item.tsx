'use client';
import type { MenuItemProps } from './menu-item.types';
import { forwardRef } from 'react';
import { Item } from '@radix-ui/react-dropdown-menu';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '../../../utils/applay-component-default-props';
import { useMenuContentContext } from '../menu-content-context';
import { menuItemStyles } from './menu-item.styles';

const defaultProps: Partial<MenuItemProps> = {
  color: 'primary',
};

export const MenuItem = forwardRef<HTMLDivElement, MenuItemProps>((props, ref) => {
  const { color, className, children, ...others } = applayComponentDefaultProps(defaultProps, props);

  const { radius, size } = useMenuContentContext();

  return (
    <Item ref={ref} className={twMerge(menuItemStyles({ color, radius, size }), className)} {...others}>
      {children}
    </Item>
  );
});

MenuItem.displayName = 'Menu.Item';
