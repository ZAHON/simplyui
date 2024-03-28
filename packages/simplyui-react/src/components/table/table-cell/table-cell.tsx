import type { TableCellProps } from './table-cell.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils/applay-component-default-props';
import { tableCellStyles } from './table-cell.styles';

const defaultProps: Partial<TableCellProps> = {
  justify: 'start',
};

export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>((props, ref) => {
  const { justify, className, children, ...others } = applayComponentDefaultProps(defaultProps, props);

  return (
    <td ref={ref} className={twMerge(tableCellStyles({ justify }), className)} {...others}>
      {children}
    </td>
  );
});

TableCell.displayName = 'TableCell';
