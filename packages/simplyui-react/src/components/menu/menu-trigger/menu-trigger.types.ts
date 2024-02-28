import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface MenuTriggerProps extends ComponentPropsWithRef<'button'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The button that toggles the menu. By default, the `Menu.Content` will position itself against the trigger.
   */
  children: ReactNode;
}
