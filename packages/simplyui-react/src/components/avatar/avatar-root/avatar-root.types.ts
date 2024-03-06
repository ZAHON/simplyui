import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface AvatarRootProps extends ComponentPropsWithRef<'span'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The all the parts of an avatar.
   */
  children: ReactNode;

  /**
   * The color of the avatar.
   * @default "primary"
   */
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger';

  /**
   * The border radius value of the avatar.
   * @default "md"
   */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

  /**
   * The size of the avatar.
   * @default "3"
   */
  size?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

  /**
   * The variant of the avatar.
   * @default "light"
   */
  variant?: 'filled' | 'light' | 'outline' | 'transparent' | 'light-outline';
}
