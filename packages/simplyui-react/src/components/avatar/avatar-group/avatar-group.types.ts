import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface AvatarGroupProps extends ComponentPropsWithRef<'div'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * When true, avatars inside group will be have border.
   *
   * If you want to change value of avatars border use `*:border-{width}` class.
   *
   * If you want to change color of avatars border use `*:border-{color}` class.
   * @default true
   */
  addBorderForAvatars?: boolean;

  /**
   * The content of the group.
   */
  children: ReactNode;

  /**
   * The value of the spacing between avatars in group.
   * @default "3"
   */
  spacing?: '1' | '2' | '3' | '4';
}
