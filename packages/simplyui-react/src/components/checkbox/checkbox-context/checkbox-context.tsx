'use client';
import type { CheckboxContextValue, CheckboxContextProviderProps } from './checkbox-context.types';
import { createContext, useContext } from 'react';

const CheckboxContext = createContext<CheckboxContextValue | undefined>(undefined);

export function CheckboxContextProvider(props: CheckboxContextProviderProps) {
  const { value, children } = props;

  return <CheckboxContext.Provider value={value}>{children}</CheckboxContext.Provider>;
}

export function useCheckboxContext() {
  const context = useContext(CheckboxContext);

  if (context === undefined) {
    throw new Error('useCheckboxContext must be used within a CheckboxContextProvider');
  }

  return context;
}
