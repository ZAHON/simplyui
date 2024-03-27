import type { ReactNode } from 'react';

export interface SliderContextValue {
  /**
   * The value of the slider.
   */
  value?: number;

  /**
   * The disabled state of the slider.
   */
  disabled?: boolean;

  /**
   * The maximum value for the range.
   */
  max?: number;

  /**
   * The minimum value for the range.
   */
  min?: number;

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

  /**
   * The reference to slider thumb element.
   */
  thumbRef: HTMLButtonElement | null;

  /**
   * Function that allow to set reference to slider thumb element.
   */
  setThumbRef: (node: HTMLButtonElement | null) => void;
}

export type SliderContextProviderProps = {
  value: SliderContextValue;
  children: ReactNode;
};
