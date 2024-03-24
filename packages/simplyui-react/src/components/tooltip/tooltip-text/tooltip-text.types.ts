import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface TooltipTextProps extends ComponentPropsWithRef<'p'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The content of the text.
   */
  children: ReactNode;

  /**
   * The size of the text.
   * @default "1"
   */
  size?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

  /**
   * The tracking (letter spacing) of the text.
   * @default "normal"
   */
  tracking?: 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest';

  /**
   * The font weight of the text.
   * @default "regular"
   */
  weight?: 'light' | 'regular' | 'medium' | 'semibold' | 'bold';
}
