import type { ComponentPropsWithRef, ReactNode, CSSProperties } from 'react';

export interface SliderTooltipProps extends ComponentPropsWithRef<'div'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The content of the slider tooltip - `Slider.TooltipContent` and `Slider.TooltipArrow`.
   */
  children: ReactNode;

  /**
   * The padding between the arrow and the edges of the content. If your content has border-radius, this will prevent it from overflowing the corners.
   * @default 0
   */
  arrowPadding?: number;

  /**
   * When `true`, overrides the side preference to prevent collisions with boundary edges.
   * @default true
   */
  avoidCollisions?: boolean;

  /**
   * The element used as the collision boundary. By default this is the viewport, though you can provide additional element(s) to be included in this check.
   * @default []
   */
  collisionBoundary?: Element | null | (Element | null)[];

  /**
   * The distance in pixels from the boundary edges where collision detection should occur. Accepts a number (same for all sides), or a partial padding object, for example: `{ top: 20, bottom: 10 }`.
   * @default 10
   */
  collisionPadding?: number | Partial<Record<'top' | 'bottom', number>>;

  /**
   * This prop determines the length of time, in milliseconds, before the tooltip is hidden after the user stops interacting with slider thumb.
   * @default 150
   */
  delayDuration?: number;

  /**
   * The preferred side of the slider thumb to render against when open. Will be reversed when collisions occur and `avoidCollisions` is enabled.
   * @default "top"
   */
  side?: 'top' | 'bottom';

  /**
   * The distance in pixels from the slider thumb.
   * @default 4
   */
  sideOffset?: number;

  /**
   * The sticky behavior on the align axis. `"partial"` will keep the content in the boundary as long as the trigger is at least partially in the boundary whilst `"always"` will keep the content in the boundary regardless.
   * @default "partial"
   */
  sticky?: 'partial' | 'always';

  /**
   * Describes the nature of tooltip visibility.
   *
   * `"always"` means that tooltip is always visible."
   *
   * `"auto"` means that tooltip is visible when user hover or focus slider thumb.
   *
   * `"hover"` means that tooltip is visible when user hover slider thumb.
   *
   * `"focus"` means that tooltip is visible when user focus slider thumb.
   *
   * @default "auto"
   */
  type?: 'always' | 'auto' | 'hover' | 'focus';
}

export interface SliderTooltipStyle extends CSSProperties {
  '--slider-tooltip-arrow-padding': string;
  '--slider-tooltip-delay-duration': string;
}
