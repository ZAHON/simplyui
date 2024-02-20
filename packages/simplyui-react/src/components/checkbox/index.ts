export type { CheckboxRootProps } from './checkbox-root';
export type { CheckboxIndicatorProps } from './checkbox-indicator';

import { CheckboxRoot } from './checkbox-root';
import { CheckboxIndicator } from './checkbox-indicator';

export const Checkbox = Object.assign(CheckboxRoot, {
  Indicator: CheckboxIndicator,
});
