'use client';
import type { SliderContextValue, SliderContextProviderProps } from './slider-context.types';
import { createContext, useContext } from 'react';

const SliderContext = createContext<SliderContextValue | undefined>(undefined);

export function SliderContextProvider(props: SliderContextProviderProps) {
  const { value, children } = props;

  return <SliderContext.Provider value={value}>{children}</SliderContext.Provider>;
}

export function useSliderContext() {
  const context = useContext(SliderContext);

  if (context === undefined) {
    throw new Error('useSliderContext must be used within a SliderContextProvider');
  }

  return context;
}
