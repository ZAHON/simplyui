import type { ReactNode } from 'react';

export interface SliderContextValue {
  /**
   * The color of the slider.
   */
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger';

  /**
   * The border radius value of the slider.
   */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

  /**
   * The size of the slider.
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export type SliderContextProviderProps = {
  value: SliderContextValue;
  children: ReactNode;
};
