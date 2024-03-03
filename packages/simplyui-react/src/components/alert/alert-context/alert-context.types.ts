import type { ReactNode } from 'react';

export interface AlertContextValue {
  /**
   * The id of the alert title.
   */
  titleId: string;

  /**
   * The id of the alert description.
   */
  descriptionId: string;

  /**
   * The size of the alert.
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export type AlertContextProviderProps = {
  value: AlertContextValue;
  children: ReactNode;
};
