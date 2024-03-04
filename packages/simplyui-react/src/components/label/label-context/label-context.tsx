'use client';
import type { LabelContextValue, LabelContextProviderProps } from './label-context.types';
import { createContext, useContext } from 'react';

const LabelContext = createContext<LabelContextValue | undefined>(undefined);

export function LabelContextProvider(props: LabelContextProviderProps) {
  const { value, children } = props;

  return <LabelContext.Provider value={value}>{children}</LabelContext.Provider>;
}

export function useLabelContext() {
  const context = useContext(LabelContext);

  if (context === undefined) {
    throw new Error('useLabelContext must be used within a LabelContextProvider');
  }

  return context;
}
