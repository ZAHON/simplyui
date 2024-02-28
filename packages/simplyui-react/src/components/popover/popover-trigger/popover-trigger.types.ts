import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface PopoverTriggerProps extends ComponentPropsWithRef<'button'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The button that toggles the popover. By default, the `Popover.Content` will position itself against the trigger.
   */
  children: ReactNode;
}
