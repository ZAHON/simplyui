import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface PopoverAnchorProps extends ComponentPropsWithRef<'div'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The content of the optional element to position the `Popover.Content` against. If this part is not used, the content will position alongside the `Popover.Trigger`.
   */
  children: ReactNode;
}
