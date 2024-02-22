export type { IndicatorRootProps } from './indicator-root';
export type { IndicatorDotProps } from './indicator-dot';

import { IndicatorRoot } from './indicator-root';
import { IndicatorDot } from './indicator-dot';

export const Indicator = Object.assign(IndicatorRoot, {
  Dot: IndicatorDot,
});
