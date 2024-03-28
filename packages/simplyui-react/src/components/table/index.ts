import type { TableRootProps } from './table-root';
import type { TableContentProps } from './table-content';
import type { TableHeaderProps } from './table-header';
import type { TableBodyProps } from './table-body';
import type { TableRowProps } from './table-row';
import type { TableCellProps } from './table-cell';
import type { TableColumnHeaderCellProps } from './table-column-header-cell';
import type { TableRowHeaderCellProps } from './table-row-header-cell';

import { TableRoot } from './table-root';
import { TableContent } from './table-content';
import { TableHeader } from './table-header';
import { TableBody } from './table-body';
import { TableRow } from './table-row';
import { TableCell } from './table-cell';
import { TableColumnHeaderCell } from './table-column-header-cell';
import { TableRowHeaderCell } from './table-row-header-cell';

export type {
  TableRootProps as TableRoot,
  TableContentProps as ContentProps,
  TableHeaderProps as HeaderProps,
  TableBodyProps as BodyProps,
  TableRowProps as RowProps,
  TableCellProps as CellProps,
  TableColumnHeaderCellProps as ColumnHeaderCellProps,
  TableRowHeaderCellProps as RowHeaderCellProps,
};

export {
  /** A container for `Table.Content`. This component is based on the `div` element. */
  TableRoot as Root,
  /** Groups the `Table.Header` and `Table.Body` parts. This component is based on the `table` element. */
  TableContent as Content,
  /** Contains the column headings for the table, based on the `thead` element. */
  TableHeader as Header,
  /** Displays the table data. This component is based on the `tbody` element. */
  TableBody as Body,
  /** A row of table cells. Based on the `tr` element. */
  TableRow as Row,
  /** A basic table cell. This component is based on the `td` element. */
  TableCell as Cell,
  /** The header of a table column. Based on the `th` element. */
  TableColumnHeaderCell as ColumnHeaderCell,
  /** The header of a table row. Based on the `th` element. */
  TableRowHeaderCell as RowHeaderCell,
};
