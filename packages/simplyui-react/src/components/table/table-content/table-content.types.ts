import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface TableContentProps extends ComponentPropsWithRef<'table'> {
  /**
   * The content of the table content.
   */
  children: ReactNode;

  /**
   * The layout algorithm of the table content.
   *
   * Use `auto` to allow the table to automatically size columns to fit the contents of the cell.
   *
   * Use `fixed` to allow the table to ignore the content and use fixed widths for columns. The width of the first row will set the column widths for the whole table.
   *
   * @default "auto"
   */
  layout?: 'auto' | 'fixed';

  /**
   * The size of the table content.
   * @default "2"
   */
  size?: '1' | '2' | '3' | '4';
}
