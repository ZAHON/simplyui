import type { ComponentPropsWithRef } from 'react';

export interface SheetOverlayProps extends ComponentPropsWithRef<'div'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   */
  asChild?: boolean;

  /**
   * The overlay backdrop type.
   * @default "opaque"
   */
  backdrop?: 'transparent' | 'opaque' | 'blur';

  /**
   * Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries. It inherits from `Modal.Portal`.
   */
  forceMount?: true;
}
