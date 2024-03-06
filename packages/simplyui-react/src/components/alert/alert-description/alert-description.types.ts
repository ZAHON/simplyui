import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface AlertDescriptionProps extends ComponentPropsWithRef<'p'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The content of the alert description.
   */
  children: ReactNode;

  /**
   * When `true`, alert description will be hidden from the screen in an accessible way.
   *
   * If you want to remove the alert description entirely, remove this part and pass `aria-describedby={undefined}` to `Alert` component.
   * @default false
   */
  visuallyHidden?: boolean;
}
