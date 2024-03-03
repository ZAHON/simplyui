'use client';
import type { AlertContextValue, AlertContextProviderProps } from './alert-context.types';
import { createContext, useContext } from 'react';

const AlertContext = createContext<AlertContextValue | undefined>(undefined);

export function AlertContextProvider(props: AlertContextProviderProps) {
  const { value, children } = props;

  return <AlertContext.Provider value={value}>{children}</AlertContext.Provider>;
}

export function useAlertContext() {
  const context = useContext(AlertContext);

  if (context === undefined) {
    throw new Error('useAlertContext must be used within a AlertContextProvider');
  }

  return context;
}
