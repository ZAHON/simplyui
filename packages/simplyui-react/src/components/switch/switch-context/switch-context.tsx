'use client';
import type { SwitchContextValue, SwitchContextProviderProps } from './switch-context.types';
import { createContext, useContext } from 'react';

const SwitchContext = createContext<SwitchContextValue | undefined>(undefined);

export function SwitchContextProvider(props: SwitchContextProviderProps) {
  const { value, children } = props;

  return <SwitchContext.Provider value={value}>{children}</SwitchContext.Provider>;
}

export function useSwitchContext() {
  const context = useContext(SwitchContext);

  if (context === undefined) {
    throw new Error('useSwitchContext must be used within a SwitchContextProvider');
  }

  return context;
}
