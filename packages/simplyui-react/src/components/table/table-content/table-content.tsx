import type { TableContentProps } from './table-content.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils/applay-component-default-props';
import { tableContentStyles } from './table-content.styles';

const defaultProps: Partial<TableContentProps> = {
  layout: 'auto',
  size: '2',
};

export const TableContent = forwardRef<HTMLTableElement, TableContentProps>((props, ref) => {
  const { layout, size, className, children, ...others } = applayComponentDefaultProps(defaultProps, props);

  return (
    <table ref={ref} className={twMerge(tableContentStyles({ layout, size }), className)} {...others}>
      {children}
    </table>
  );
});

TableContent.displayName = 'TableContent';
