import type { ComponentPropsWithRef } from 'react';

export interface BurgerIconProps extends ComponentPropsWithRef<'span'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;
}
