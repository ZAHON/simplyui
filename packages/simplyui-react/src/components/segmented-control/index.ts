export type { SegmentedControlRootProps } from './segmented-control-root';
export type { SegmentedControlContentProps } from './segmented-control-content';
export type { SegmentedControlIndicatorProps } from './segmented-control-indicator';
export type { SegmentedControlItemProps } from './segmented-control-item';
export type { SegmentedControlLabelProps } from './segmented-control-label';

import { SegmentedControlRoot } from './segmented-control-root';
import { SegmentedControlContent } from './segmented-control-content';
import { SegmentedControlIndicator } from './segmented-control-indicator';
import { SegmentedControlItem } from './segmented-control-item';
import { SegmentedControlLabel } from './segmented-control-label';

export const SegmentedControl = Object.assign(SegmentedControlRoot, {
  Content: SegmentedControlContent,
  Indicator: SegmentedControlIndicator,
  Item: SegmentedControlItem,
  Label: SegmentedControlLabel,
});
