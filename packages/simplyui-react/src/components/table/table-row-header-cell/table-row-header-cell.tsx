import type { TableRowHeaderCellProps } from './table-row-header-cell.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils/applay-component-default-props';
import { tableRowHeaderCellStyles } from './table-row-header-cell.styles';

const defaultProps: Partial<TableRowHeaderCellProps> = {
  justify: 'start',
};

export const TableRowHeaderCell = forwardRef<HTMLTableCellElement, TableRowHeaderCellProps>((props, ref) => {
  const { justify, className, children, ...others } = applayComponentDefaultProps(defaultProps, props);

  return (
    <th ref={ref} className={twMerge(tableRowHeaderCellStyles({ justify }), className)} {...others}>
      {children}
    </th>
  );
});

TableRowHeaderCell.displayName = 'TableRowHeaderCell';
