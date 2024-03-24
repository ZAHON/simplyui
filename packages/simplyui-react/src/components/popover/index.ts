'use client';

export type { PopoverRootProps } from './popover-root';
export type { PopoverTriggerProps } from './popover-trigger';
export type { PopoverAnchorProps } from './popover-anchor';
export type { PopoverPortalProps } from './popover-portal';
export type { PopoverContentProps } from './popover-content';
export type { PopoverCloseProps } from './popover-close';

import { PopoverRoot } from './popover-root';
import { PopoverTrigger } from './popover-trigger';
import { PopoverAnchor } from './popover-anchor';
import { PopoverPortal } from './popover-portal';
import { PopoverContent } from './popover-content';
import { PopoverClose } from './popover-close';

/** Contains all the parts of a popover. */
export const Popover = Object.assign(PopoverRoot, {
  /** The button that toggles the popover. By default, the `Popover.Content` will position itself against the trigger. This component is based on the `button` element. */
  Trigger: PopoverTrigger,
  /** An optional element to position the `Popover.Content` against. If this part is not used, the content will position alongside the `Popover.Trigger`. This component is based on the `div` element. */
  Anchor: PopoverAnchor,
  /** When used, portals the content part into the body. */
  Portal: PopoverPortal,
  /** The component that pops out when the popover is open. This component is based on the `div` element. */
  Content: PopoverContent,
  /** The button that closes an open popover. This component is based on the `button` element. */
  Close: PopoverClose,
});
