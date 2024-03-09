import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface ButtonRootProps extends ComponentPropsWithRef<'button'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The content of the button.
   */
  children: ReactNode;

  /**
   * The color of the button.
   * @default "primary"
   */
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger';

  /**
   * If `true`, the button will be disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * If `true`, the button will have 100% width of his parent.
   * @default false
   */
  fullWidth?: boolean;

  /**
   * If `true`, the button will show a loader.
   * @default false
   */
  loading?: boolean;

  /**
   * The border radius value of the button.
   * @default "md"
   */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

  /**
   * The size of the button.
   * @default "2"
   */
  size?: '1' | '2' | '3' | '4';

  /**
   * The type of the button.
   * @default "button"
   */
  type?: 'submit' | 'reset' | 'button';

  /**
   * The variant of the button.
   * @default "filled"
   */
  variant?: 'filled' | 'light' | 'outline' | 'subtle' | 'light-outline';
}
