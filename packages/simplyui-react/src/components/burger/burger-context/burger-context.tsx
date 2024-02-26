'use client';
import type { BurgerContextValue, BurgerContextProviderProps } from './burger-context.types';
import { createContext, useContext } from 'react';

const BurgerContext = createContext<BurgerContextValue | undefined>(undefined);

export function BurgerContextProvider(props: BurgerContextProviderProps) {
  const { value, children } = props;

  return <BurgerContext.Provider value={value}>{children}</BurgerContext.Provider>;
}

export function useBurgerContext() {
  const context = useContext(BurgerContext);

  if (context === undefined) {
    throw new Error('useBurgerContext must be used within a BurgerContextProvider');
  }

  return context;
}
