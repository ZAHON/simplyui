import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface AvatarGroupProps extends ComponentPropsWithRef<'div'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The content of the group.
   */
  children: ReactNode;

  /**
   * The value of the spacing between avatars in group.
   * @default "md"
   */
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
}
