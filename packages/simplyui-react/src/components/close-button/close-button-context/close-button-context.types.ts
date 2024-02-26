import type { ReactNode } from 'react';

export interface CloseButtonContextValue {
  /**
   * The size of the close button.
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';

  /**
   * The disabled state of the close button.
   */
  disabled?: boolean;
}

export interface CloseButtonContextProviderProps {
  value: CloseButtonContextValue;
  children: ReactNode;
}
