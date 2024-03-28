import type { TableRootProps } from './table-root.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Primitive } from '@/components/primitive';
import { applayComponentDefaultProps } from '@/utils/applay-component-default-props';
import { tableRootStyles } from './table-root.styles';

const defaultProps: Partial<TableRootProps> = {
  radius: 'md',
  variant: 'default',
};

export const TableRoot = forwardRef<HTMLDivElement, TableRootProps>((props, ref) => {
  const { highlightOnHover, radius, striped, variant, className, children, ...others } = applayComponentDefaultProps(
    defaultProps,
    props
  );

  return (
    <Primitive.div
      ref={ref}
      className={twMerge(tableRootStyles({ highlightOnHover, radius, striped, variant }), className)}
      {...others}
    >
      {children}
    </Primitive.div>
  );
});

TableRoot.displayName = 'TableRoot';
