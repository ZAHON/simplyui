import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface TooltipTriggerProps extends ComponentPropsWithRef<'button'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The content of the button that toggles the tooltip.
   */
  children: ReactNode;
}
