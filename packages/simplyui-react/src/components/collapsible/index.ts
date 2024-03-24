'use client';

import type { CollapsibleRootProps } from './collapsible-root';
import type { CollapsibleTriggerProps } from './collapsible-trigger';
import type { CollapsibleContentProps } from './collapsible-content';

import { CollapsibleRoot } from './collapsible-root';
import { CollapsibleTrigger } from './collapsible-trigger';
import { CollapsibleContent } from './collapsible-content';

export type {
  CollapsibleRootProps as RootProps,
  CollapsibleTriggerProps as TriggerProps,
  CollapsibleContentProps as ContentProps,
};

export {
  /** Contains all the parts of a collapsible. This component is based on the `div` element. */
  CollapsibleRoot as Root,
  /** The button that toggles the collapsible. This component is based on the `button` element. */
  CollapsibleTrigger as Trigger,
  /** The component that contains the collapsible content. This component is based on the `div` element. */
  CollapsibleContent as Content,
};
