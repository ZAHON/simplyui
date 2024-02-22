import type { ComponentPropsWithRef, CSSProperties } from 'react';

export interface IndicatorDotProps extends ComponentPropsWithRef<'div'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The color of the dot.
   * @default "primary"
   */
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger';

  /**
   * If `true`, dot will be hidden and have `data-disabled` attribute.
   * @default false
   */
  disabled?: boolean;

  /**
   * The dot offset relative to the target element.
   * @default 0
   */
  offset?: number;

  /**
   * The position of the dot.
   * @default "top-end"
   */
  position?:
    | 'bottom-center'
    | 'bottom-end'
    | 'bottom-start'
    | 'middle-center'
    | 'middle-end'
    | 'middle-start'
    | 'top-center'
    | 'top-end'
    | 'top-start';

  /**
   * If `true`, dot will have processing animation and `data-processing` attribute.
   * @default false
   */
  processing?: boolean;

  /**
   * The reduce duration of the processing animation in ms. On browsers that support `prefers-reduced-motion`, and where the user has explicitly signaled that they’d prefer reduced motion (i.e. where `prefers-reduced-motion: reduce`), this value will be used as the duration of the animation.
   * @default 2000
   */
  processingReduceDuration?: number;

  /**
   * The safe duration of the processing animation in ms. On browsers that support `prefers-reduced-motion`, and where the user has not explicitly signaled that they’d prefer reduced motion (i.e. where `prefers-reduced-motion: no-preference`), this value will be used as the duration of the animation.
   * @default 1000
   */
  processingSafeDuration?: number;

  /**
   * The border radius value of the dot.
   * @default "full"
   */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

  /**
   * The size of the dot.
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';

  /**
   * If `true`, dot will have border.
   * @default false
   */
  withBorder?: boolean;
}

export interface IndicatorDotStyle extends CSSProperties {
  '--indicator-dot-processing-reduce-duration': string;
  '--indicator-dot-processing-safe-duration': string;
  '--indicator-dot-top'?: string;
  '--indicator-dot-bottom'?: string;
  '--indicator-dot-left'?: string;
  '--indicator-dot-right'?: string;
  '--indicator-dot-translate-x'?: string;
  '--indicator-dot-translate-y'?: string;
}
