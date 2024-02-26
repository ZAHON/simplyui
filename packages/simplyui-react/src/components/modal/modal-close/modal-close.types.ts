import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface ModalCloseProps extends ComponentPropsWithRef<'button'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   */
  asChild?: boolean;

  /**
   * The button that closes the modal.
   */
  children: ReactNode;

  /**
   * The relative position to `Modal.Content` of the button that closes the modal.
   */
  position?: 'top-end';
}
