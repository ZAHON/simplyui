import type { ComponentPropsWithRef, CSSProperties } from 'react';

type HTMLAttributesToOmit = 'children';

export interface LoaderDotsProps extends Omit<ComponentPropsWithRef<'div'>, HTMLAttributesToOmit> {
  /**
   * The color of the loader.
   * @default "primary"
   */
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'currentColor';

  /**
   * For accessibility, it is important to add a fallback loading text. This text will be hidden from the screen in an accessible way.
   * @default "Loading, please wait..."
   */
  label?: string;

  /**
   * The custom size of the loader. This property override loader size determined by `size` property.
   */
  loaderSize?: string;

  /**
   * The size of the loader.
   * @default "2"
   */
  size?: '1' | '2' | '3' | '4';

  /**
   * The reduce speed of the loader animation in ms. On browsers that support `prefers-reduced-motion`, and where the user has explicitly signaled that they’d prefer reduced motion (i.e. where `prefers-reduced-motion: reduce`), this value will be used as the duration of the animation.
   * @default 1500
   */
  speedReduce?: number;

  /**
   * The safe speed of the loader animation in ms. On browsers that support `prefers-reduced-motion`, and where the user has not explicitly signaled that they’d prefer reduced motion (i.e. where `prefers-reduced-motion: no-preference`), this value will be used as the duration of the animation.
   * @default 1000
   */
  speedSafe?: number;
}

export interface LoaderDotsStyle extends CSSProperties {
  '--loader-size'?: string;
  '--loader-reduce-animation-duration'?: string;
  '--loader-safe-animation-duration'?: string;
}
