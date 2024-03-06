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
   * @default "3"
   */
  size?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

  /**
   * The tracking (letter spacing) of the code.
   * @default "normal"
   */
  tracking?: 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest';

  /**
   * The variant of the code.
   * @default "light"
   */
  variant?: 'filled' | 'light' | 'outline' | 'light-outline';

  /**
   * The font weight of the code.
   * @default "regular"
   */
  weight?: 'light' | 'regular' | 'medium' | 'semibold' | 'bold';
}
