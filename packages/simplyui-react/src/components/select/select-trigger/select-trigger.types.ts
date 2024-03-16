import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface SelectTriggerProps extends ComponentPropsWithRef<'button'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The content of the select trigger - `Select.Value` and `Select.Icon`.
   */
  children: ReactNode;

  /**
   * The variant of the select trigger.
   * @default "default"
   */
  variant?: 'default' | 'filled';
}
