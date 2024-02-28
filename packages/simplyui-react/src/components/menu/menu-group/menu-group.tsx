'use client';
import type { MenuGroupProps } from './menu-group.types';
import { forwardRef } from 'react';
import { Group } from '@radix-ui/react-dropdown-menu';

export const MenuGroup = forwardRef<HTMLDivElement, MenuGroupProps>((props, ref) => {
  const { children, ...others } = props;

  return (
    <Group ref={ref} {...others}>
      {children}
    </Group>
  );
});

MenuGroup.displayName = 'MenuGroup';
