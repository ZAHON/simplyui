import type { ComponentPropsWithoutRef, RefObject, CSSProperties } from 'react';

type HTMLAttributesToOmit = 'children';

export interface LoaderOvalProps extends Omit<ComponentPropsWithoutRef<'div'>, HTMLAttributesToOmit> {
  ref?: RefObject<HTMLDivElement>;

  /**
   * The size of the loader.
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';

  /**
   * The custom size of the loader. This property override loader size determined by `size` property.
   */
  loaderSize?: string;

  /**
   * The color of the loader.
   * @default "primary"
   */
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'currentColor';

  /**
   * The safe speed of the loader animation in ms. On browsers that support `prefers-reduced-motion`, and where the user has not explicitly signaled that they’d prefer reduced motion (i.e. where `prefers-reduced-motion: no-preference`), this value will be used as the duration of the animation.
   * @default 1000
   */
  speedSafe?: number;

  /**
   * The reduce speed of the loader animation in ms. On browsers that support `prefers-reduced-motion`, and where the user has explicitly signaled that they’d prefer reduced motion (i.e. where `prefers-reduced-motion: reduce`), this value will be used as the duration of the animation.
   * @default 1500
   */
  speedReduce?: number;

  /**
   * For accessibility, it is important to add a fallback loading text. This text will be visible to screen readers.
   * @default "Loading, please wait..."
   */
  label?: string;
}

export interface LoaderOvalStyle extends CSSProperties {
  '--loader-size'?: string;
  '--loader-safe-animation-duration'?: string;
  '--loader-reduce-animation-duration'?: string;
}
