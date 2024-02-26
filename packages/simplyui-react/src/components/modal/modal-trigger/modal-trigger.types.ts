import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface ModalTriggerProps extends ComponentPropsWithRef<'button'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The button that opens the modal.
   */
  children: ReactNode;
}
