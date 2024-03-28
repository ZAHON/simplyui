import type { TableColumnHeaderCellProps } from './table-column-header-cell.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils/applay-component-default-props';
import { tableColumnHeaderCellStyles } from './table-column-header-cell.styles';

const defaultProps: Partial<TableColumnHeaderCellProps> = {
  justify: 'start',
};

export const TableColumnHeaderCell = forwardRef<HTMLTableCellElement, TableColumnHeaderCellProps>((props, ref) => {
  const { justify, className, children, ...others } = applayComponentDefaultProps(defaultProps, props);

  return (
    <th ref={ref} className={twMerge(tableColumnHeaderCellStyles({ justify }), className)} {...others}>
      {children}
    </th>
  );
});

TableColumnHeaderCell.displayName = 'TableColumnHeaderCell';
