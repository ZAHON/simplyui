import type { ReactNode } from 'react';

export interface IconButtonContextValue {
  /**
   * The size of the icon button.
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';

  /**
   * The disabled state of the icon button.
   */
  disabled?: boolean;

  /**
   * The loading state of the icon button.
   */
  loading?: boolean;
}

export type IconButtonContextProviderProps = {
  value: IconButtonContextValue;
  children: ReactNode;
};
