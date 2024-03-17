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
   *
   * If you want to remove the modal title entirely, remove this part and pass `aria-labelledby={undefined}` to `Modal.Content` component.
   * @default false
   */
  visuallyHidden?: boolean;
}
