import type { ReactNode } from 'react';

export interface ButtonContextValue {
  /**
   * The disabled state of the button.
   */
  disabled?: boolean;

  /**
   * The loading state of the button.
   */
  loading?: boolean;

  /**
   * The size of the button.
   */
  size?: '1' | '2' | '3' | '4';
}

export type ButtonContextProviderProps = {
  value: ButtonContextValue;
  children: ReactNode;
};
