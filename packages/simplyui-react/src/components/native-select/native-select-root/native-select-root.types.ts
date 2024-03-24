import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface NativeSelectRootProps extends ComponentPropsWithRef<'div'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The all the parts of a native select.
   */
  children: ReactNode;

  /**
   * When `true`, prevents the user from interacting with the native select.
   * @default false
   */
  disabled?: boolean;

  /**
   * If `true`, the native select will be invalid.
   * @default false
   */
  invalid?: boolean;

  /**
   * The border radius value of the native select.
   * @default "md"
   */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

  /**
   * When `true`, indicates that the user must select a value before the owning form can be submitted.
   * @default false
   */
  required?: boolean;

  /**
   * The size of the native select.
   * @default "2"
   */
  size?: '1' | '2' | '3' | '4';

  /**
   * The variant of the native select.
   * @default "default"
   */
  variant?: 'default' | 'filled';
}
