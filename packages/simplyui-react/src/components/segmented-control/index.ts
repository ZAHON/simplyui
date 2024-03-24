'use client';

import type { SegmentedControlRootProps } from './segmented-control-root';
import type { SegmentedControlContentProps } from './segmented-control-content';
import type { SegmentedControlIndicatorProps } from './segmented-control-indicator';
import type { SegmentedControlItemProps } from './segmented-control-item';

import { SegmentedControlRoot } from './segmented-control-root';
import { SegmentedControlContent } from './segmented-control-content';
import { SegmentedControlIndicator } from './segmented-control-indicator';
import { SegmentedControlItem } from './segmented-control-item';

export type {
  SegmentedControlRootProps as RootProps,
  SegmentedControlContentProps as ContentProps,
  SegmentedControlIndicatorProps as IndicatorProps,
  SegmentedControlItemProps as ItemProps,
};

export {
  /** Contains all the parts of a segmented control. This component is based on the `div` element. */
  SegmentedControlRoot as Root,
  /** The container for `SegmentedControl.Indicator` and `SegmentedControl.Item`s. This component is based on the `div` element. */
  SegmentedControlContent as Content,
  /** An indicator that indicates which item is checked. Must live inside `SegmentedControl.Content`. This component is based on the `div` element. */
  SegmentedControlIndicator as Indicator,
  /** An item in the group that can be checked. An `input` will also render when used within a `form` to ensure events propagate correctly. Must live inside `SegmentedControl.Content`. This component is based on the `button` element. */
  SegmentedControlItem as Item,
};
