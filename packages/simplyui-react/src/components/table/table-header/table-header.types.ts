import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface TableHeaderProps extends ComponentPropsWithRef<'thead'> {
  /**
   * The content of the table header.
   */
  children: ReactNode;
}
