import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface TableRowProps extends ComponentPropsWithRef<'tr'> {
  /**
   * The vertical alignment of table row.
   * @default "center"
   */
  align?: 'start' | 'center' | 'end' | 'baseline';

  /**
   * The content of the table row.
   */
  children: ReactNode;
}
