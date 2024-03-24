'use client';

export type { CollapsibleRootProps } from './collapsible-root';
export type { CollapsibleTriggerProps } from './collapsible-trigger';
export type { CollapsibleContentProps } from './collapsible-content';

import { CollapsibleRoot } from './collapsible-root';
import { CollapsibleTrigger } from './collapsible-trigger';
import { CollapsibleContent } from './collapsible-content';

/** Contains all the parts of a collapsible. This component is based on the `div` element. */
export const Collapsible = Object.assign(CollapsibleRoot, {
  /** The button that toggles the collapsible. This component is based on the `button` element. */
  Trigger: CollapsibleTrigger,
  /** The component that contains the collapsible content. This component is based on the `div` element. */
  Content: CollapsibleContent,
});
