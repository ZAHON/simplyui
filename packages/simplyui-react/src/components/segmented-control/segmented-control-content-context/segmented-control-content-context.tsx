'use client';
import type {
  SegmentedControlContentContextValue,
  SegmentedControlContentContextProviderProps,
} from './segmented-control-content-context.types';
import { createContext, useContext } from 'react';

const SegmentedControlContentContext = createContext<SegmentedControlContentContextValue | undefined>(undefined);

export function SegmentedControlContentContextProvider(props: SegmentedControlContentContextProviderProps) {
  const { value, children } = props;

  return <SegmentedControlContentContext.Provider value={value}>{children}</SegmentedControlContentContext.Provider>;
}

export function useSegmentedControlContentContext() {
  const context = useContext(SegmentedControlContentContext);

  if (context === undefined) {
    throw new Error('useSegmentedControlContentContext must be used within a SegmentedControlContentContextProvider');
  }

  return context;
}
