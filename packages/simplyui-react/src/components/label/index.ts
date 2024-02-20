export type { LabelRootProps } from './label-root';
export type { LabelIndicatorProps } from './label-indicator';

import { LabelRoot } from './label-root';
import { LabelIndicator } from './label-indicator';

export const Label = Object.assign(LabelRoot, {
  Indicator: LabelIndicator,
});
