'use client';
import type { SliderTooltipContextValue, SliderTooltipContextProviderProps } from './slider-tooltip-context.types';
import { createContext, useContext } from 'react';

const SliderTooltipContext = createContext<SliderTooltipContextValue | undefined>(undefined);

export function SliderTooltipContextProvider(props: SliderTooltipContextProviderProps) {
  const { value, children } = props;

  return <SliderTooltipContext.Provider value={value}>{children}</SliderTooltipContext.Provider>;
}

export function useSliderTooltipContext() {
  const context = useContext(SliderTooltipContext);

  if (context === undefined) {
    throw new Error('useSliderTooltipContext must be used within a SliderTooltipContextProvider');
  }

  return context;
}
