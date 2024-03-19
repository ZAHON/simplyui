import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface SheetDescriptionProps extends ComponentPropsWithRef<'p'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The optional accessible sheet description to be announced when the sheet is opened.
   */
  children: ReactNode;

  /**
   * When `true`, sheet description will be hidden from the screen in an accessible way.
   *
   * If you want to remove the sheet description entirely, remove this part and pass `aria-describedby={undefined}` to `Sheet.Content` component.
   * @default false
   */
  visuallyHidden?: boolean;
}
