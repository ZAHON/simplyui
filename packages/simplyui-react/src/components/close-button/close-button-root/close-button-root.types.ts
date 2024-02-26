import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface CloseButtonRootProps extends ComponentPropsWithRef<'button'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The content of the close button.
   */
  children: ReactNode;

  /**
   * The color of the close button.
   * @default "default"
   */
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger';

  /**
   * If `true`, the close button will be disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * The border radius value of the close button.
   * @default "md"
   */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

  /**
   * The size of the close button.
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';

  /**
   * The type of the close button.
   * @default "button"
   */
  type?: 'submit' | 'reset' | 'button';

  /**
   * The variant of the close button.
   * @default "subtle"
   */
  variant?: 'filled' | 'light' | 'outline' | 'subtle';
}
