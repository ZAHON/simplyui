import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface AlertRootProps extends ComponentPropsWithRef<'div'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The all parts of the alert.
   */
  children: ReactNode;

  /**
   * The color of the alert.
   * @default "danger"
   */
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger';

  /**
   * The border radius value of the alert.
   * @default "md"
   */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

  /**
   * The size of the alert.
   * @default "2"
   */
  size?: '1' | '2' | '3' | '4';

  /**
   * The variant of the alert.
   * @default "light"
   */
  variant?: 'filled' | 'light' | 'outline' | 'light-outline';
}
