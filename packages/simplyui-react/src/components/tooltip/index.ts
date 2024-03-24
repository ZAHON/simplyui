'use client';

import type { TooltipProviderProps } from './tooltip-provider';
import type { TooltipRootProps } from './tooltip-root';
import type { TooltipTriggerProps } from './tooltip-trigger';
import type { TooltipPortalProps } from './tooltip-portal';
import type { TooltipContentProps } from './tooltip-content';
import type { TooltipArrowProps } from './tooltip-arrow';
import type { TooltipTextProps } from './tooltip-text';

export type {
  TooltipProviderProps as ProviderProps,
  TooltipRootProps as RootProps,
  TooltipTriggerProps as TriggerProps,
  TooltipPortalProps as PortalProps,
  TooltipContentProps as ContentProps,
  TooltipArrowProps as ArrowProps,
  TooltipTextProps as TooltipTextProps,
};

import { TooltipProvider } from './tooltip-provider';
import { TooltipRoot } from './tooltip-root';
import { TooltipTrigger } from './tooltip-trigger';
import { TooltipPortal } from './tooltip-portal';
import { TooltipContent } from './tooltip-content';
import { TooltipArrow } from './tooltip-arrow';
import { TooltipText } from './tooltip-text';

export {
  /** Wraps your app to provide global functionality to your tooltips. */
  TooltipProvider as Provider,
  /** Contains all the parts of a tooltip. */
  TooltipRoot as Root,
  /** The button that toggles the tooltip. This component is based on the `button` element. By default, the `Tooltip.Content` will position itself against the trigger. */
  TooltipTrigger as Trigger,
  /** When used, portals the content part into the `body`. */
  TooltipPortal as Portal,
  /** The component that pops out when the tooltip is open. This component is based on the `div` element. */
  TooltipContent as Content,
  /** The text content of the tooltip. This component is based on the `p` element. */
  TooltipText as Text,
  /** An optional arrow element to render alongside the tooltip. This component is based on the `svg` element. This can be used to help visually link the trigger with the `Tooltip.Content`. Must be rendered inside `Tooltip.Content`. */
  TooltipArrow as Arrow,
};
