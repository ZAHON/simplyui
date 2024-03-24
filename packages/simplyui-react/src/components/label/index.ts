'use client';

import type { LabelRootProps } from './label-root';
import type { LabelIndicatorProps } from './label-indicator';

import { LabelRoot } from './label-root';
import { LabelIndicator } from './label-indicator';

export type { LabelRootProps as RootProps, LabelIndicatorProps as IndicatorProps };

export {
  /** Contains the content for the label. This component is based on the native `label` element. */
  LabelRoot as Root,
  /** The optional label indicator. Use this component if you want to indicate that a label is associated with a required form field. This component is based on the `span` element. */
  LabelIndicator as Indicator,
};
