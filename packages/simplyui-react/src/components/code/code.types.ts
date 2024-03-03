import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface CodeProps extends ComponentPropsWithRef<'code'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The content of the code.
   */
  children: ReactNode;

  /**
   * The color of the code.
   * @default "primary"
   */
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger';

  /**
   * The border radius value of the code.
   * @default "md"
   */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

  /**
   * The size of the code.
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';

  /**
   * The variant of the code.
   * @default "light"
   */
  variant?: 'filled' | 'light' | 'outline' | 'light-outline';
}
