import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface BadgeProps extends ComponentPropsWithRef<'span'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The content of the badge,
   */
  children: ReactNode;

  /**
   * The color of the badge.
   * @default "primary"
   */
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger';

  /**
   * The border radius value of the badge.
   * @default "full"
   */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

  /**
   * The size of the badge.
   * @default "2"
   */
  size?: '1' | '2' | '3' | '4';

  /**
   * The variant of the badge.
   * @default "light"
   */
  variant?: 'filled' | 'light' | 'outline' | 'light-outline';
}
