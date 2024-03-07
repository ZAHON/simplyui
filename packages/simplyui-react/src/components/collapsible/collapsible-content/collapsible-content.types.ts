import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface CollapsibleContentProps extends ComponentPropsWithRef<'div'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The content of the component that contains the collapsible content.
   */
  children: ReactNode;

  /**
   * Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries.
   */
  forceMount?: true;
}
