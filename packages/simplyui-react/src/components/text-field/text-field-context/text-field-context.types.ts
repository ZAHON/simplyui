import type { ReactNode } from 'react';

export interface TextFieldContextValue {
  /**
   * The disabled state of the text field.
   */
  disabled?: boolean;

  /**
   * The invalid state of the text field.
   */
  invalid?: boolean;

  /**
   * The required state of the text field.
   */
  required?: boolean;

  /**
   * The border radius value of the text field.
   */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export type TextFieldContextProviderProps = {
  value: TextFieldContextValue;
  children: ReactNode;
};
