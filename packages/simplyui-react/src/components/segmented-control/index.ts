'use client';

import type { SegmentedControlRootProps } from './segmented-control-root';
import type { SegmentedControlIndicatorProps } from './segmented-control-indicator';
import type { SegmentedControlItemProps } from './segmented-control-item';
import type { SegmentedControlItemLabelProps } from './segmented-control-item-label';

import { SegmentedControlRoot } from './segmented-control-root';
import { SegmentedControlIndicator } from './segmented-control-indicator';
import { SegmentedControlItem } from './segmented-control-item';
import { SegmentedControlItemLabel } from './segmented-control-item-label';

export type {
  SegmentedControlRootProps as RootProps,
  SegmentedControlIndicatorProps as IndicatorProps,
  SegmentedControlItemProps as ItemProps,
  SegmentedControlItemLabelProps as ItemLabelProps,
};

export {
  /** Contains all the parts of a segmented control. This component is based on the `div` element. */
  SegmentedControlRoot as Root,
  /** An indicator that indicates which item is checked. This component is based on the `div` element. */
  SegmentedControlIndicator as Indicator,
  /** An item in the group that can be checked. An `input` will also render when used within a `form` to ensure events propagate correctly. This component is based on the `button` element. */
  SegmentedControlItem as Item,
  /** A label of the item. Must be rendered inside `SegmentedControl.Item`. This component is based on the `span` element. */
  SegmentedControlItemLabel as ItemLabel,
};
