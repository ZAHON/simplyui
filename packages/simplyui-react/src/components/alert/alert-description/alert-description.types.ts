import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface AlertDescriptionProps extends ComponentPropsWithRef<'p'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The content of the alert title.
   */
  children: ReactNode;
}
