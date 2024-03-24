'use client';

export type { SegmentedControlRootProps } from './segmented-control-root';
export type { SegmentedControlContentProps } from './segmented-control-content';
export type { SegmentedControlIndicatorProps } from './segmented-control-indicator';
export type { SegmentedControlItemProps } from './segmented-control-item';

import { SegmentedControlRoot } from './segmented-control-root';
import { SegmentedControlContent } from './segmented-control-content';
import { SegmentedControlIndicator } from './segmented-control-indicator';
import { SegmentedControlItem } from './segmented-control-item';

/** Contains all the parts of a segmented control. This component is based on the `div` element. */
export const SegmentedControl = Object.assign(SegmentedControlRoot, {
  /** The container for `SegmentedControl.Indicator` and `SegmentedControl.Item`s. This component is based on the `div` element. */
  Content: SegmentedControlContent,
  /** An indicator that indicates which item is checked. Must live inside `SegmentedControl.Content`. This component is based on the `div` element. */
  Indicator: SegmentedControlIndicator,
  /** An item in the group that can be checked. An `input` will also render when used within a `form` to ensure events propagate correctly. Must live inside `SegmentedControl.Content`. This component is based on the `button` element. */
  Item: SegmentedControlItem,
});
