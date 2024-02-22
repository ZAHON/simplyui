import type { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface LinkProps extends ComponentPropsWithoutRef<'a'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The content of the link.
   */
  children: ReactNode;

  /**
   * The color of the link.
   * @default "primary"
   */
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger';

  /**
   * If `true`, the link will be disabled. In this state link will have `aria-disabled` attribute set to `true` and data-disabled attribute.
   * @default false
   */
  disabled?: boolean;

  /**
   * If you `true`, the link will have the `target="_blank"` and `rel="noopener noreferrer"` attributes.
   * @default false
   */
  external?: boolean;

  /**
   * The URL that the link points to.
   */
  href?: string;

  /**
   * The size of the link.
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';

  /**
   * Sets the visibility of the underline affordance.
   * @default "none"
   */
  underline?: 'active' | 'always' | 'focus' | 'hover' | 'none';
}
