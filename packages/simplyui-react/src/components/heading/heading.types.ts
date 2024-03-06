import type { HTMLAttributes, ReactNode } from 'react';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * Shorthand for changing the default rendered element into a semantically appropriate alternative.
   * @default "h1"
   */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

  /**
   * The content of the heading.
   */
  children: ReactNode;

  /**
   * The color of the heading.
   * @default "foreground"
   */
  color?: 'foreground' | 'default' | 'primary' | 'success' | 'warning' | 'danger';

  /**
   * The size of the heading.
   * @default "6"
   */
  size?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

  /**
   * The tracking (letter spacing) of the heading.
   * @default "tight"
   */
  tracking?: 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest';

  /**
   * The font weight of the heading.
   * @default "bold"
   */
  weight?: 'light' | 'regular' | 'medium' | 'semibold' | 'bold';
}
