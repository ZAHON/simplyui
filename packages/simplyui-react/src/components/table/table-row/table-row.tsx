import type { TableRowProps } from './table-row.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils/applay-component-default-props';
import { tableRowStyles } from './table-row.styles';

const defaultProps: Partial<TableRowProps> = {
  align: 'center',
};

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>((props, ref) => {
  const { align, className, children, ...others } = applayComponentDefaultProps(defaultProps, props);

  return (
    <tr ref={ref} className={twMerge(tableRowStyles({ align }), className)} {...others}>
      {children}
    </tr>
  );
});

TableRow.displayName = 'TableRow';
