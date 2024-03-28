import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface TableRowHeaderCellProps extends ComponentPropsWithRef<'th'> {
  /**
   * The content of the table row header cell.
   */
  children: ReactNode;

  /**
   * The horizontal alignment of table row header cell.
   * @default "start"
   */
  justify?: 'start' | 'center' | 'end';
}
