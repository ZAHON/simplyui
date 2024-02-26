import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface IconButtonRootProps extends ComponentPropsWithRef<'button'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The content of the icon button.
   */
  children: ReactNode;

  /**
   * The color of the icon button.
   * @default "default"
   */
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger';

  /**
   * If `true`, the icon button will be disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * If `true`, the icon button will show a loader.
   * @default false
   */
  loading?: boolean;

  /**
   * The border radius value of the icon button.
   * @default "md"
   */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

  /**
   * The size of the icon button.
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';

  /**
   * The type of the icon button.
   * @default "button"
   */
  type?: 'submit' | 'reset' | 'button';

  /**
   * The variant of the icon button.
   * @default "subtle"
   */
  variant?: 'filled' | 'light' | 'outline' | 'subtle';
}
