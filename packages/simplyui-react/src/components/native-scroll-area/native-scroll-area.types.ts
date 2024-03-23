import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface NativeScrollAreaProps extends ComponentPropsWithRef<'div'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The content of the native scroll area.
   */
  children: ReactNode;

  /**
   * If `true`, scrollbars will have background.
   * @default true
   */
  scrollbarBackground?: boolean;

  /**
   * If `true`, scrollbars will have padding.
   * @default true
   */
  scrollbarPadding?: boolean;

  /**
   * The border radius value of the scrollbars.
   * @default "none"
   */
  scrollbarRadius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

  /**
   * Controls the scrollable axes.
   * @default "both"
   */
  scrollbars?: 'vertical' | 'horizontal' | 'both';

  /**
   * The size of the scrollbars and thumb.
   * @default "2"
   */
  size?: '1' | '2' | '3' | '4';

  /**
   * The border radius value of the thumb.
   * @default "full"
   */
  thumbRadius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
}
