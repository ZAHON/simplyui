'use client';
import type { CloseButtonContextValue, CloseButtonContextProviderProps } from './close-button-context.types';
import { createContext, useContext } from 'react';

const CloseButtonContext = createContext<CloseButtonContextValue | undefined>(undefined);

export function CloseButtonContextProvider(props: CloseButtonContextProviderProps) {
  const { value, children } = props;

  return <CloseButtonContext.Provider value={value}>{children}</CloseButtonContext.Provider>;
}

export function useCloseButtonContext() {
  const context = useContext(CloseButtonContext);

  if (context === undefined) {
    throw new Error('useCloseButtonContext must be used within a CloseButtonContextProvider');
  }

  return context;
}
