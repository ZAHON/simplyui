import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface StatusDotProps extends ComponentPropsWithRef<'span'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The content of the status dot.
   */
  children?: ReactNode;

  /**
   * The color of the status dot.
   * @default "primary"
   */
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger';

  /**
   * The size of the status dot.
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';
}
