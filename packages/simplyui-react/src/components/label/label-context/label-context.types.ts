import type { ReactNode } from 'react';

export interface LabelContextValue {
  /**
   * The disabled state of the label.
   */
  disabled?: boolean;
}

export type LabelContextProviderProps = {
  value: LabelContextValue;
  children: ReactNode;
};
