import type { ReactNode } from 'react';

export interface SliderContextValue {
  /**
   * The color of the slider.
   */
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger';

  /**
   * The inverted state of the slider.
   */
  inverted?: boolean;

  /**
   * The border radius value of the slider.
   */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

  /**
   * The size of the slider.
   */
  size?: '1' | '2' | '3' | '4';

  /**
   * The variant of the slider.
   */
  variant?: 'default' | 'filled';
}

export type SliderContextProviderProps = {
  value: SliderContextValue;
  children: ReactNode;
};
