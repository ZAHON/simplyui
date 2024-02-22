import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface AvatarFallbackProps extends ComponentPropsWithRef<'span'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * An element that renders when the image hasn't loaded. This means whilst it's loading, or if there was an error.
   */
  children: ReactNode;

  /**
   * Useful for delaying rendering so it only appears for those with slower connections.
   */
  delayMs?: number;
}
