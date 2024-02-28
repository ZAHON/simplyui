import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface ModalHeaderProps extends ComponentPropsWithRef<'div'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   */
  asChild?: boolean;

  /**
   * The content of the modal header.
   */
  children: ReactNode;
}