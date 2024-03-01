'use client';
import type {
  SegmentedControlItemContextValue,
  SegmentedControlItemContextProviderProps,
} from './segmented-control-item-context.types';
import { createContext, useContext } from 'react';

const SegmentedControlItemContext = createContext<SegmentedControlItemContextValue | undefined>(undefined);

export function SegmentedControlItemContextProvider(props: SegmentedControlItemContextProviderProps) {
  const { value, children } = props;

  return <SegmentedControlItemContext.Provider value={value}>{children}</SegmentedControlItemContext.Provider>;
}

export function useSegmentedControlItemContext() {
  const context = useContext(SegmentedControlItemContext);

  if (context === undefined) {
    throw new Error('useSegmentedControlItemContext must be used within a SegmentedControlItemContextProvider');
  }

  return context;
}
