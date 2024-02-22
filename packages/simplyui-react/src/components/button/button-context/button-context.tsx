'use client';
import type { ButtonContextValue, ButtonContextProviderProps } from './button-context.types';
import { createContext, useContext } from 'react';

const ButtonContext = createContext<ButtonContextValue | undefined>(undefined);

export function ButtonContextProvider(props: ButtonContextProviderProps) {
  const { value, children } = props;

  return <ButtonContext.Provider value={value}>{children}</ButtonContext.Provider>;
}

export function useButtonContext() {
  const context = useContext(ButtonContext);

  if (context === undefined) {
    throw new Error('useButtonContext must be used within a ButtonContextProvider');
  }

  return context;
}
