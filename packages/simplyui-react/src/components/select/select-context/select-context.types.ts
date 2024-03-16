import type { ReactNode } from 'react';

export interface SelectContextValue {
  /**
   * The invalid state of the select.
   */
  invalid?: boolean;

  /**
   * The border radius value of the select.
   */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

  /**
   * The size of the select.
   * @default "2"
   */
  size?: '1' | '2' | '3' | '4';
}

export type SelectContextProviderProps = {
  value: SelectContextValue;
  children: ReactNode;
};
