import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface ModalDescriptionProps extends ComponentPropsWithRef<'p'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   */
  asChild?: boolean;

  /**
   * The optional accessible modal description to be announced when the modal is opened.
   */
  children: ReactNode;

  /**
   * When `true`, modal description will be hidden from the screen in an accessible way.
   *
   * If you want to remove the modal description entirely, remove this part and pass `aria-describedby={undefined}` to `Modal.Content`.
   * @default false
   */
  visuallyHidden?: boolean;
}
