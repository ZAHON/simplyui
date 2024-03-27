import type { ComponentPropsWithRef } from 'react';

export interface SliderTooltipArrowProps extends ComponentPropsWithRef<'svg'> {
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
