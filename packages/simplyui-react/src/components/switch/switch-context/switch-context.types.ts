import type { ReactNode } from 'react';

export interface SwitchContextValue {
  /**
   * The invaild state of the switch
   */
  invalid?: boolean;

  /**
   * The border radius value of the switch.
   */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

  /**
   * The size of the switch.
   */
  size?: '1' | '2' | '3' | '4';
}

export type SwitchContextProviderProps = {
  value: SwitchContextValue;
  children: ReactNode;
};
