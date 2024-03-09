import type { ComponentPropsWithRef } from 'react';

export interface CloseButtonIconProps extends ComponentPropsWithRef<'svg'> {
  /**
   * The size of the icon.
   */
  size?: '1' | '2' | '3' | '4';
}
