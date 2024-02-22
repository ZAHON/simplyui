import type { ReactNode } from 'react';

export interface ButtonContextValue {
  /**
   * The size of the button.
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';

  /**
   * The disabled state of the button.
   */
  disabled?: boolean;

  /**
   * The loading state of the button.
   */
  loading?: boolean;
}

export type ButtonContextProviderProps = {
  value: ButtonContextValue;
  children: ReactNode;
};
