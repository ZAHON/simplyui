import type { ReactNode } from 'react';

export interface TooltipProviderProps {
  /**
   * The content of the tooltip provider.
   */
  children: ReactNode;

  /**
   * Prevents `Tooltip.Content` from remaining open when hovering. Disabling this has accessibility consequences.
   * @default false
   */
  disableHoverableContent?: boolean;

  /**
   * The duration from when the mouse enters a tooltip trigger until the tooltip opens.
   * @default 700
   */
  delayDuration?: number;

  /**
   * How much time a user has to enter another trigger without incurring a delay again.
   * @default 300
   */
  skipDelayDuration?: number;
}
