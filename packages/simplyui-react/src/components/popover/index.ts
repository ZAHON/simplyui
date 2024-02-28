export type { PopoverRootProps } from './popover-root';
export type { PopoverTriggerProps } from './popover-trigger';
export type { PopoverAnchorProps } from './popover-anchor';
export type { PopoverPortalProps } from './popover-portal';
export type { PopoverContentProps } from './popover-content';

import { PopoverRoot } from './popover-root';
import { PopoverTrigger } from './popover-trigger';
import { PopoverAnchor } from './popover-anchor';
import { PopoverPortal } from './popover-portal';
import { PopoverContent } from './popover-content';

export const Popover = Object.assign(PopoverRoot, {
  Trigger: PopoverTrigger,
  Anchor: PopoverAnchor,
  Portal: PopoverPortal,
  Content: PopoverContent,
});
