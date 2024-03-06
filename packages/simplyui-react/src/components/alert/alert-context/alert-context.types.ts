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
  size?: '1' | '2' | '3' | '4';
}

export type AlertContextProviderProps = {
  value: AlertContextValue;
  children: ReactNode;
};
