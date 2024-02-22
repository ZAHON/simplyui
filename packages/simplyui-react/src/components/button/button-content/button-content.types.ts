import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface ButtonContentProps extends ComponentPropsWithRef<'span'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The content of the button.
   */
  children: ReactNode;
}
