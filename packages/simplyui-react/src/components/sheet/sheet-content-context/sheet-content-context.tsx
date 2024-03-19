'use client';
import type { SheetContentContextValue, SheetContentContextProviderProps } from './sheet-content-context.types';
import { createContext, useContext } from 'react';

const SheetContentContext = createContext<SheetContentContextValue | undefined>(undefined);

export function SheetContentContextProvider(props: SheetContentContextProviderProps) {
  const { value, children } = props;

  return <SheetContentContext.Provider value={value}>{children}</SheetContentContext.Provider>;
}

export function useSheetContentContext() {
  const context = useContext(SheetContentContext);

  if (context === undefined) {
    throw new Error('useSheetContentContext must be used within a SheetContentContextProvider');
  }

  return context;
}
