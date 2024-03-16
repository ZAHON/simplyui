import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface SelectValueProps extends ComponentPropsWithRef<'span'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The content that will be rendered inside the `Select.Value` when no `value` or `defaultValue` is set.
   */
  placeholder?: ReactNode;
}
