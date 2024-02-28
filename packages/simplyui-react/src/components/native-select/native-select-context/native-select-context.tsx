'use client';
import type { NativeSelectContextValue, NativeSelectContextProviderProps } from './native-select-context.types';
import { createContext, useContext } from 'react';

const NativeSelectContext = createContext<NativeSelectContextValue | undefined>(undefined);

export function NativeSelectContextProvider(props: NativeSelectContextProviderProps) {
  const { value, children } = props;

  return <NativeSelectContext.Provider value={value}>{children}</NativeSelectContext.Provider>;
}

export function useNativeSelectContext() {
  const context = useContext(NativeSelectContext);

  if (context === undefined) {
    throw new Error('useNativeSelectContext must be used within a NativeSelectContextProvider');
  }

  return context;
}
