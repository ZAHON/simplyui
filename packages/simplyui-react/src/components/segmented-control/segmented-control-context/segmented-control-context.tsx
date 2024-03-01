'use client';
import type {
  SegmentedControlContextValue,
  SegmentedControlContextProviderProps,
} from './segmented-control-context.types';
import { createContext, useContext } from 'react';

const SegmentedControlContext = createContext<SegmentedControlContextValue | undefined>(undefined);

export function SegmentedControlContextProvider(props: SegmentedControlContextProviderProps) {
  const { value, children } = props;

  return <SegmentedControlContext.Provider value={value}>{children}</SegmentedControlContext.Provider>;
}

export function useSegmentedControlContext() {
  const context = useContext(SegmentedControlContext);

  if (context === undefined) {
    throw new Error('useSegmentedControlContext must be used within a SegmentedControlContextProvider');
  }

  return context;
}
