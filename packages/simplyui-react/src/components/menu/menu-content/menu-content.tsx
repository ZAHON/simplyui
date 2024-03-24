'use client';
import type { MenuContentProps } from './menu-content.types';
import { forwardRef } from 'react';
import { Content } from '@radix-ui/react-dropdown-menu';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '../../../utils/applay-component-default-props';
import { MenuContentContextProvider } from '../menu-content-context';
import { menuContentStyles } from './menu-content.styles';

const defaultProps: Partial<MenuContentProps> = {
  collisionPadding: 10,
  radius: 'md',
  shadow: 'md',
  size: '2',
  sideOffset: 8,
};

export const MenuContent = forwardRef<HTMLDivElement, MenuContentProps>((props, ref) => {
  const { radius, shadow, size, className, children, ...others } = applayComponentDefaultProps(defaultProps, props);

  return (
    <MenuContentContextProvider value={{ radius, size }}>
      <Content ref={ref} className={twMerge(menuContentStyles({ radius, shadow, size }), className)} {...others}>
        {children}
      </Content>
    </MenuContentContextProvider>
  );
});

MenuContent.displayName = 'MenuContent';
