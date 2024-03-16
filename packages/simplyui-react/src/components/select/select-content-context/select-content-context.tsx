'use client';
import type { SelectContentContextValue, SelectContentContextProviderProps } from './select-content-context.types';
import { createContext, useContext } from 'react';

const SelectContentContext = createContext<SelectContentContextValue | undefined>(undefined);

export function SelectContentContextProvider(props: SelectContentContextProviderProps) {
  const { value, children } = props;

  return <SelectContentContext.Provider value={value}>{children}</SelectContentContext.Provider>;
}

export function useSelectContentContext() {
  const context = useContext(SelectContentContext);

  if (context === undefined) {
    throw new Error('useSelectContentContext must be used within a SelectContentContextProvider');
  }

  return context;
}
