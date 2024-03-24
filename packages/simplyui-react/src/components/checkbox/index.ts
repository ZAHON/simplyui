'use client';

import type { CheckboxRootProps } from './checkbox-root';
import type { CheckboxIndicatorProps } from './checkbox-indicator';

import { CheckboxRoot } from './checkbox-root';
import { CheckboxIndicator } from './checkbox-indicator';

export type { CheckboxRootProps as RootProps, CheckboxIndicatorProps as IndicatorProps };

export {
  /** Contains all the parts of a checkbox. An `input` will also render when used within a `form` to ensure events propagate correctly. This component is based on the `button` element. */
  CheckboxRoot as Root,
  /** Renders when the checkbox is in a checked. You can style this element directly, or you can use it as a wrapper to put an icon into, or both. This component is based on the `span` element. */
  CheckboxIndicator as Indicator,
};
