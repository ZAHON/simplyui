import type { ReactNode } from 'react';

export interface SliderTooltipContextValue {
  /**
   * The side of the slider tooltip.
   */
  side?: 'top' | 'bottom';

  /**
   * The shift x the slider tooltip.
   */
  shiftX?: number;
}

export type SliderTooltipContextProviderProps = {
  value: SliderTooltipContextValue;
  children: ReactNode;
};
