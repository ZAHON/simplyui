import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface KbdProps extends ComponentPropsWithRef<'kbd'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The content of the kbd.
   */
  children: ReactNode;

  /**
   * The border radius value of the kbd.
   * @default "md"
   */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

  /**
   * The size of the kbd.
   * @default "3"
   */
  size?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
}
