export type { IndicatorRootProps } from './indicator-root';
export type { IndicatorDotProps } from './indicator-dot';

import { IndicatorRoot } from './indicator-root';
import { IndicatorDot } from './indicator-dot';

/** The cotainer for content and `Indicator.Dot`. This component is based on the `div` element. */
export const Indicator = Object.assign(IndicatorRoot, {
  /** The indicator dot. Must live inside `Indicator`. This component is based on the `div` element. */
  Dot: IndicatorDot,
});
