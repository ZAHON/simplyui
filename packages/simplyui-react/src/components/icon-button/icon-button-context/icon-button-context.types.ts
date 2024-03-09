import type { ReactNode } from 'react';

export interface IconButtonContextValue {
  /**
   * The disabled state of the icon button.
   */
  disabled?: boolean;

  /**
   * The loading state of the icon button.
   */
  loading?: boolean;

  /**
   * The size of the icon button.
   */
  size?: '1' | '2' | '3' | '4';
}

export type IconButtonContextProviderProps = {
  value: IconButtonContextValue;
  children: ReactNode;
};
