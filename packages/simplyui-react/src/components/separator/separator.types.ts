import type { ComponentPropsWithRef } from 'react';

export interface SeparatorProps extends ComponentPropsWithRef<'div'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The color of the separator.
   * @default "default"
   */
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger';

  /**
   * When `true`, signifies that it is purely visual, carries no semantic meaning, and ensures it is not present in the accessibility tree.
   * @default true
   */
  decorative?: boolean;

  /**
   * The orientation of the separator.
   * @default "horizontal"
   */
  orientation?: 'horizontal' | 'vertical';
}
