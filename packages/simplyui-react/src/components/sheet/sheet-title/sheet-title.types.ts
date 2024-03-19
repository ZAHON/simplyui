import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface SheetTitleProps extends ComponentPropsWithRef<'h2'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The accessible sheet title to be announced when the sheet is opened.
   */
  children: ReactNode;

  /**
   * When `true`, sheet title will be hidden from the screen in an accessible way.
   *
   * If you want to remove the sheet title entirely, remove this part and pass `aria-labelledby={undefined}` to `Sheet.Content` component.
   * @default false
   */
  visuallyHidden?: boolean;
}
