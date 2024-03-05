'use client';
import type { TextFieldContextValue, TextFieldContextProviderProps } from './text-field-context.types';
import { createContext, useContext } from 'react';

const TextFieldContext = createContext<TextFieldContextValue | undefined>(undefined);

export function TextFieldContextProvider(props: TextFieldContextProviderProps) {
  const { value, children } = props;

  return <TextFieldContext.Provider value={value}>{children}</TextFieldContext.Provider>;
}

export function useTextFieldContext() {
  const context = useContext(TextFieldContext);

  if (context === undefined) {
    throw new Error('useTextFieldContext must be used within a TextFieldContextProvider');
  }

  return context;
}
