import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface ModalTitleProps extends ComponentPropsWithRef<'h2'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The accessible modal title to be announced when the modal is opened.
   */
  children: ReactNode;

  /**
   * When `true`, modal title will be hidden from the screen in an accessible way.
   * @default false
   */
  visuallyHidden?: boolean;
}
