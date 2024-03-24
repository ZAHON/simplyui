'use client';

import type { PopoverRootProps } from './popover-root';
import type { PopoverTriggerProps } from './popover-trigger';
import type { PopoverAnchorProps } from './popover-anchor';
import type { PopoverPortalProps } from './popover-portal';
import type { PopoverContentProps } from './popover-content';
import type { PopoverCloseProps } from './popover-close';

import { PopoverRoot } from './popover-root';
import { PopoverTrigger } from './popover-trigger';
import { PopoverAnchor } from './popover-anchor';
import { PopoverPortal } from './popover-portal';
import { PopoverContent } from './popover-content';
import { PopoverClose } from './popover-close';

export type {
  PopoverRootProps as RootProps,
  PopoverTriggerProps as TriggerProps,
  PopoverAnchorProps as AnchorProps,
  PopoverPortalProps as PortalProps,
  PopoverContentProps as ContentProps,
  PopoverCloseProps as CloseProps,
};

export {
  /** Contains all the parts of a popover. */
  PopoverRoot as Root,
  /** The button that toggles the popover. By default, the `Popover.Content` will position itself against the trigger. This component is based on the `button` element. */
  PopoverTrigger as Trigger,
  /** An optional element to position the `Popover.Content` against. If this part is not used, the content will position alongside the `Popover.Trigger`. This component is based on the `div` element. */
  PopoverAnchor as Anchor,
  /** When used, portals the content part into the body. */
  PopoverPortal as Portal,
  /** The component that pops out when the popover is open. This component is based on the `div` element. */
  PopoverContent as Content,
  /** The button that closes an open popover. This component is based on the `button` element. */
  PopoverClose as Close,
};
