import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface CardProps extends ComponentPropsWithRef<'div'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The background type of the card.
   * @default "solid"
   */
  background?: 'solid' | 'translucent';

  /**
   * The content of the card.
   */
  children: ReactNode;

  /**
   * The border radius value of the card.
   * @default "md"
   */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

  /**
   * The shadow of the card.
   * @default "md"
   */
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl';

  /**
   * The size of the card.
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';
}
