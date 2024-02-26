'use client';
import type { ModalContentContextValue, ModalContentContextProviderProps } from './modal-content-context.types';
import { createContext, useContext } from 'react';

const ModalContentContext = createContext<ModalContentContextValue | undefined>(undefined);

export function ModalContentContextProvider(props: ModalContentContextProviderProps) {
  const { value, children } = props;

  return <ModalContentContext.Provider value={value}>{children}</ModalContentContext.Provider>;
}

export function useModalContentContext() {
  const context = useContext(ModalContentContext);

  if (context === undefined) {
    throw new Error('useModalContentContext must be used within a ModalContentContextProvider');
  }

  return context;
}
