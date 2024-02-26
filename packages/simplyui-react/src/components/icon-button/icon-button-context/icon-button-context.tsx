'use client';
import type { IconButtonContextValue, IconButtonContextProviderProps } from './icon-button-context.types';
import { createContext, useContext } from 'react';

const IconButtonContext = createContext<IconButtonContextValue | undefined>(undefined);

export function IconButtonContextProvider(props: IconButtonContextProviderProps) {
  const { value, children } = props;

  return <IconButtonContext.Provider value={value}>{children}</IconButtonContext.Provider>;
}

export function useIconButtonContext() {
  const context = useContext(IconButtonContext);

  if (context === undefined) {
    throw new Error('useIconButtonContext must be used within a IconButtonContextProvider');
  }

  return context;
}
