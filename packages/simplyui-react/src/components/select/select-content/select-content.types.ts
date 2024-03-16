import type { ComponentPropsWithRef, ReactNode } from 'react';
import type { SelectContentImplProps } from '@radix-ui/react-select';

export interface SelectContentProps extends ComponentPropsWithRef<'div'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The content of the component that pops out when the select is open.
   */
  children: ReactNode;

  /**
   * Event handler called when focus moves to the trigger after closing. It can be prevented by calling `event.preventDefault`.
   */
  onCloseAutoFocus?: (event: Event) => void;

  /**
   * Event handler called when the escape key is down. It can be prevented by calling `event.preventDefault`.
   */
  onEscapeKeyDown?: (event: KeyboardEvent) => void;

  /**
   * Event handler called when a pointer event occurs outside the bounds of the component. It can be prevented by calling `event.preventDefault`.
   */
  onPointerDownOutside?: SelectContentImplProps['onPointerDownOutside'];

  /**
   * The shadow of the content.
   * @default "md"
   */
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl';

  /**
   * The preferred side of the anchor to render against when open. Will be reversed when collisions occur and `avoidCollisions` is enabled.
   * @default "bottom"
   */
  side?: 'top' | 'right' | 'bottom' | 'left';

  /**
   * The distance in pixels from the anchor.
   * @default 8
   */
  sideOffset?: number;

  /**
   * The preferred alignment against the anchor. May change when collisions occur.
   * @default "start"
   */
  align?: 'start' | 'center' | 'end';

  /**
   * An offset in pixels from the `"start"` or `"end"` alignment options.
   * @default 0
   */
  alignOffset?: number;

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
   * The sticky behavior on the align axis. `"partial"` will keep the content in the boundary as long as the trigger is at least partially in the boundary whilst `"always"` will keep the content in the boundary regardless.
   * @default "partial"
   */
  sticky?: 'partial' | 'always';

  /**
   * Whether to hide the content when the trigger becomes fully occluded.
   * @default false
   */
  hideWhenDetached?: boolean;

  /**
   * The color of the item when highlighted.
   * @default "primary"
   */
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger';

  /**
   * The variant of the item when highlighted.
   * @default "filled"
   */
  variant?: 'filled' | 'light';
}
