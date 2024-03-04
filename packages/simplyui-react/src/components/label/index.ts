export type { LabelRootProps } from './label-root';
export type { LabelIndicatorProps } from './label-indicator';

import { LabelRoot } from './label-root';
import { LabelIndicator } from './label-indicator';

/** Contains the content for the label. This component is based on the native `label` element. */
export const Label = Object.assign(LabelRoot, {
  /** The optional label indicator. Use this component if you want to indicate that a label is associated with a required form field. This component is based on the `span` element. */
  Indicator: LabelIndicator,
});
