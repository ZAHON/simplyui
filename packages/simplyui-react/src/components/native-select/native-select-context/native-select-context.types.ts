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
  size?: 'sm' | 'md' | 'lg' | 'xl';

  /**
   * The variant of the native select.
   */
  variant?: 'default' | 'filled';

  /**
   * When `true`, indicate that native select contains slot.
   */
  withSlot?: boolean;
}

export type NativeSelectContextProviderProps = {
  value: NativeSelectContextValue;
  children: ReactNode;
};
