import type { ComponentPropsWithRef } from 'react';

export interface TooltipArrowProps extends ComponentPropsWithRef<'svg'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The height of the arrow in pixels.
   * @default 5
   */
  height?: number;

  /**
   * The width of the arrow in pixels.
   * @default 10
   */
  width?: number;
}
