import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface TableCellProps extends ComponentPropsWithRef<'td'> {
  /**
   * The content of the table cell.
   */
  children: ReactNode;

  /**
   * The horizontal alignment of table cell.
   * @default "start"
   */
  justify?: 'start' | 'center' | 'end';
}
