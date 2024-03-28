import type { TableHeaderProps } from './table-header.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { tableHeaderStyles } from './table-header.styles';

export const TableHeader = forwardRef<HTMLTableSectionElement, TableHeaderProps>((props, ref) => {
  const { className, children, ...others } = props;

  return (
    <thead ref={ref} className={twMerge(tableHeaderStyles(), className)} {...others}>
      {children}
    </thead>
  );
});

TableHeader.displayName = 'TableHeader';
