import type { ReactNode } from 'react';

export interface BurgerContextValue {
  /**
   * The open state of the burger.
   */
  open?: boolean;

  /**
   * The disabled state of the burger.
   */
  disabled?: boolean;
}

export type BurgerContextProviderProps = {
  value: BurgerContextValue;
  children: ReactNode;
};
