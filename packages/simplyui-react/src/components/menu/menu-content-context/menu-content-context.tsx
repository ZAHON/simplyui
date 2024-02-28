'use client';
import type { MenuContentContextValue, MenuContentContextProviderProps } from './menu-content-context.types';
import { createContext, useContext } from 'react';

const MenuContentContext = createContext<MenuContentContextValue | undefined>(undefined);

export function MenuContentContextProvider(props: MenuContentContextProviderProps) {
  const { value, children } = props;

  return <MenuContentContext.Provider value={value}>{children}</MenuContentContext.Provider>;
}

export function useMenuContentContext() {
  const context = useContext(MenuContentContext);

  if (context === undefined) {
    throw new Error('useMenuContentContext must be used within a MenuContentContextProvider');
  }

  return context;
}
