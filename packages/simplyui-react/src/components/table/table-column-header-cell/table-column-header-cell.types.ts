import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface TableColumnHeaderCellProps extends ComponentPropsWithRef<'th'> {
  /**
   * The content of the table column header cell.
   */
  children: ReactNode;

  /**
   * The horizontal alignment of table column header cell.
   * @default "start"
   */
  justify?: 'start' | 'center' | 'end';
}
