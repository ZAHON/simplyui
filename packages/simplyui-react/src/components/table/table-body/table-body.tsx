import type { TableBodyProps } from './table-body.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { tableBodyStyles } from './table-body.styles';

export const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>((props, ref) => {
  const { className, children, ...others } = props;

  return (
    <tbody ref={ref} className={twMerge(tableBodyStyles(), className)} {...others}>
      {children}
    </tbody>
  );
});

TableBody.displayName = 'TableBody';
