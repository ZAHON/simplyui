import type { ReactNode } from 'react';

export interface SliderContextValue {
  /**
   * The disabled state of the slider.
   */
  disabled?: boolean;

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
  size?: '1' | '2' | '3' | '4';
}

export type SliderContextProviderProps = {
  value: SliderContextValue;
  children: ReactNode;
};
