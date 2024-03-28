import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface TableRootProps extends ComponentPropsWithRef<'div'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The all parts of the table.
   */
  children: ReactNode;

  /**
   * Determines whether table rows background should change when hovered.
   * @default false
   */
  highlightOnHover?: boolean;

  /**
   * The border radius value of the table.
   * @default "md"
   */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

  /**
   * Determines whether every odd/even row background should be changed.
   * @default false
   */
  striped?: boolean;

  /**
   * The variant of the table.
   * @default "default"
   */
  variant?: 'default' | 'transparent';
}
