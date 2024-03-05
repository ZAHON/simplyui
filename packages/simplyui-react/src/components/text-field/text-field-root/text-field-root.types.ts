import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface TextFieldRootProps extends ComponentPropsWithRef<'div'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The all the parts of a text field - `TextField.Input` and `TextField.Slot` components.
   */
  children: ReactNode;

  /**
   * When `true`, prevents the user from interacting with the text field.
   * @default false
   */
  disabled?: boolean;

  /**
   * If `true`, the text field will be invalid.
   * @default false
   */
  invalid?: boolean;

  /**
   * The border radius value of the text field.
   * @default "md"
   */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

  /**
   * When `true`, indicates that the user must type a value before the owning form can be submitted.
   * @default false
   */
  required?: boolean;

  /**
   * The size of the text field.
   * @default "2"
   */
  size?: '1' | '2' | '3' | '4';

  /**
   * The variant of the text field.
   * @default "default"
   */
  variant?: 'default' | 'filled';
}
