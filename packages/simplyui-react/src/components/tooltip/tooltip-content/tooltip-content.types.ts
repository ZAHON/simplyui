import type { ComponentPropsWithRef, ReactNode } from 'react';
import type { TooltipContentImplProps } from '@radix-ui/react-tooltip';

export interface TooltipContentProps extends ComponentPropsWithRef<'div'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The content of the component that pops out when the tooltip is open.
   */
  children: ReactNode;

  /**
   * By default, screenreaders will announce the content inside the component. If this is not descriptive enough, or you have content that cannot be announced, use `aria-label` as a more descriptive label.
   */
  'aria-label'?: string;

  /**
   * The preferred alignment against the trigger. May change when collisions occur.
   * @default "center"
   */
  align?: 'start' | 'center' | 'end';

  /**
   * An offset in pixels from the `"start"` or `"end"` alignment options.
   * @default 0
   */
  alignOffset?: number;

  /**
   * The padding between the arrow and the edges of the content. If your content has `border-radius`, this will prevent it from overflowing the corners.
   * @default 0
   */
  arrowPadding?: number;

  /**
   * When `true`, overrides the `side` and `align` preferences to prevent collisions with boundary edges.
   * @default true
   */
  avoidCollisions?: boolean;

  /**
   * The element used as the collision boundary. By default this is the viewport, though you can provide additional element(s) to be included in this check.
   * @default []
   */
  collisionBoundary?: Element | null | (Element | null)[];

  /**
   * The distance in pixels from the boundary edges where collision detection should occur. Accepts a number (same for all sides), or a partial padding object, for example: `{ top: 20, left: 20 }`.
   * @default 10
   */
  collisionPadding?: number | Partial<Record<'top' | 'right' | 'bottom' | 'left', number>>;

  /**
   * Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries. It inherits from `Tooltip.Portal`.
   */
  forceMount?: true;

  /**
   * Whether to hide the content when the trigger becomes fully occluded.
   * @default false
   */
  hideWhenDetached?: boolean;

  /**
   * Event handler called when the escape key is down. It can be prevented by calling `event.preventDefault`.
   */
  onEscapeKeyDown?: (event: KeyboardEvent) => void;

  /**
   * Event handler called when a pointer event occurs outside the bounds of the component. It can be prevented by calling `event.preventDefault`.
   */
  onPointerDownOutside?: TooltipContentImplProps['onPointerDownOutside'];

  /**
   * The border radius value of the tooltip content.
   * @default "md"
   */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

  /**
   * The preferred side of the trigger to render against when open. Will be reversed when collisions occur and `avoidCollisions` is enabled.
   * @default "top"
   */
  side?: 'top' | 'right' | 'bottom' | 'left';

  /**
   * The distance in pixels from the trigger.
   * @default 4
   */
  sideOffset?: number;

  /**
   * The sticky behavior on the align axis. `"partial"` will keep the content in the boundary as long as the trigger is at least partially in the boundary whilst `"always"` will keep the content in the boundary regardless.
   * @default "partial"
   */
  sticky?: 'partial' | 'always';
}
