'use client';
import type { SheetBodyProps } from './sheet-body.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Primitive } from '../../primitive';
import { useSheetContentContext } from '../sheet-content-context';
import { sheetBodyStyles } from './sheet-body.styles';

export const SheetBody = forwardRef<HTMLDivElement, SheetBodyProps>((props, ref) => {
  const { className, children, ...others } = props;

  const { size } = useSheetContentContext();

  return (
    <Primitive.div ref={ref} className={twMerge(sheetBodyStyles({ size }), className)} {...others}>
      {children}
    </Primitive.div>
  );
});

SheetBody.displayName = 'SheetBody';
