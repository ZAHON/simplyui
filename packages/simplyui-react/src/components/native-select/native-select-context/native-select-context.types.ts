import type { ReactNode } from 'react';

export interface NativeSelectContextValue {
  /**
   * The disabled state of the native select.
   */
  disabled?: boolean;

  /**
   * The invalid state of the native select.
   */
  invalid?: boolean;

  /**
   * The border radius value of the native select.
   */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

  /**
   * The required state of the native select.
   */
  required?: boolean;

  /**
   * The size of the native select.
   */
  size?: '1' | '2' | '3' | '4';

  /**
   * The variant of the native select.
   */
  variant?: 'default' | 'filled';
}

export type NativeSelectContextProviderProps = {
  value: NativeSelectContextValue;
  children: ReactNode;
};
