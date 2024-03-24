'use client';
import type { SheetFooterProps } from './sheet-footer.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Primitive } from '../../primitive';
import { useSheetContentContext } from '../sheet-content-context';
import { sheetFooterStyles } from './sheet-footer.styles';

export const SheetFooter = forwardRef<HTMLDivElement, SheetFooterProps>((props, ref) => {
  const { className, children, ...others } = props;

  const { size } = useSheetContentContext();

  return (
    <Primitive.div ref={ref} className={twMerge(sheetFooterStyles({ size }), className)} {...others}>
      {children}
    </Primitive.div>
  );
});

SheetFooter.displayName = 'Sheet.Footer';
