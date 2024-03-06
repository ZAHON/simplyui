import type { ReactNode } from 'react';

export interface TooltipRootProps {
  /**
   * The open state of the tooltip when it is initially rendered. Use when you do not need to control its open state.
   * @default false
   */
  defaultOpen?: boolean;

  /**
   * The controlled open state of the tooltip. Must be used in conjunction with `onOpenChange` property.
   * @default false
   */
  open?: boolean;

  /**
   * Event handler called when the open state of the tooltip changes.
   */
  onOpenChange?: (open: boolean) => void;

  /**
   * The all the parts of a tooltip.
   */
  children: ReactNode;

  /**
   * Override the duration given to the `TooltipProvider` to customise the open delay for a specific tooltip.
   * @default 700
   */
  delayDuration?: number;

  /**
   * Prevents `Tooltip.Content` from remaining open when hovering. Disabling this has accessibility consequences. Inherits from `TooltipProvider`.
   */
  disableHoverableContent?: boolean;
}
