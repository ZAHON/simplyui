import type { IndicatorRootProps } from './indicator-root';
import type { IndicatorDotProps } from './indicator-dot';

import { IndicatorRoot } from './indicator-root';
import { IndicatorDot } from './indicator-dot';

export type { IndicatorRootProps as RootProps, IndicatorDotProps as DotProps };

export {
  /** The cotainer for content and `Indicator.Dot`. This component is based on the `div` element. */
  IndicatorRoot as Root,
  /** The indicator dot. Must live inside `Indicator`. This component is based on the `div` element. */
  IndicatorDot as Dot,
};
