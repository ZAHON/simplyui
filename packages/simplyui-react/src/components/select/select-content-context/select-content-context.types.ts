import type { ReactNode } from 'react';

export interface SelectContentContextValue {
  /**
   * The color of the item when highlighted.
   */
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger';

  /**
   * The variant of the item when highlighted.
   */
  variant?: 'filled' | 'light';
}

export type SelectContentContextProviderProps = {
  value: SelectContentContextValue;
  children: ReactNode;
};
