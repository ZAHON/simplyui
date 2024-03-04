import type { ReactNode } from 'react';

export interface CheckboxContextValue {
  /**
   * The invaild state of the checkbox.
   */
  invalid?: boolean;
}

export type CheckboxContextProviderProps = {
  value: CheckboxContextValue;
  children: ReactNode;
};
