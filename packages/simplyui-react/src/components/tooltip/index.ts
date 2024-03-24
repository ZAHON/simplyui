'use client';

export type { TooltipProviderProps } from './tooltip-provider';
export { TooltipProvider } from './tooltip-provider';

export type { TooltipRootProps } from './tooltip-root';
export type { TooltipTriggerProps } from './tooltip-trigger';
export type { TooltipPortalProps } from './tooltip-portal';
export type { TooltipContentProps } from './tooltip-content';
export type { TooltipArrowProps } from './tooltip-arrow';
export type { TooltipTextProps } from './tooltip-text';

import { TooltipRoot } from './tooltip-root';
import { TooltipTrigger } from './tooltip-trigger';
import { TooltipPortal } from './tooltip-portal';
import { TooltipContent } from './tooltip-content';
import { TooltipArrow } from './tooltip-arrow';
import { TooltipText } from './tooltip-text';

/** Contains all the parts of a tooltip. */
export const Tooltip = Object.assign(TooltipRoot, {
  /** The button that toggles the tooltip. This component is based on the `button` element. By default, the `Tooltip.Content` will position itself against the trigger. */
  Trigger: TooltipTrigger,
  /** When used, portals the content part into the `body`. */
  Portal: TooltipPortal,
  /** The component that pops out when the tooltip is open. This component is based on the `div` element. */
  Content: TooltipContent,
  /** The text content of the tooltip. This component is based on the `p` element. */
  Text: TooltipText,
  /** An optional arrow element to render alongside the tooltip. This component is based on the `svg` element. This can be used to help visually link the trigger with the `Tooltip.Content`. Must be rendered inside `Tooltip.Content`. */
  Arrow: TooltipArrow,
});
