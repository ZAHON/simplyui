import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface AlertTitleProps extends ComponentPropsWithRef<'p'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The content of the alert title.
   */
  children: ReactNode;

  /**
   * When `true`, alert title will be hidden from the screen in an accessible way.
   *
   * If you want to remove the alert title entirely, remove this part and pass `aria-labelledby={undefined}` to `Alert` component.
   * @default false
   */
  visuallyHidden?: boolean;
}
