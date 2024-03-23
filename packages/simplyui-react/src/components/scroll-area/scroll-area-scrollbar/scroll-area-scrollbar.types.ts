import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface ScrollAreaScrollbarProps extends ComponentPropsWithRef<'div'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The content of the scrollbar - `ScrollArea.Thumb`
   */
  children: ReactNode;

  /**
   * Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries.
   */
  forceMount?: true;

  /**
   * The orientation of the scrollbar.
   */
  orientation: 'horizontal' | 'vertical';

  /**
   * The border radius value of the scrollbar.
   * @default "none"
   */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

  /**
   * The size of the scrollbar.
   */
  size?: '1' | '2' | '3' | '4';

  /**
   * If `true`, scrollbar will have background.
   * @default true
   */
  withBackground?: boolean;

  /**
   * If `true`, scrollbar will have padding.
   * @default true
   */
  withPadding?: boolean;
}
