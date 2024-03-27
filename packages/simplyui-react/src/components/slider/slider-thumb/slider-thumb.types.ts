import type { ComponentPropsWithRef } from 'react';

type HTMLAttributesToOmit = 'disabled';

export interface SliderThumbProps extends Omit<ComponentPropsWithRef<'button'>, HTMLAttributesToOmit> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;
}
