'use client';
import type { SheetHeaderProps } from './sheet-header.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Primitive } from '../../primitive';
import { useSheetContentContext } from '../sheet-content-context';
import { sheetHeaderStyles } from './sheet-header.styles';

export const SheetHeader = forwardRef<HTMLDivElement, SheetHeaderProps>((props, ref) => {
  const { className, children, ...others } = props;

  const { size } = useSheetContentContext();

  return (
    <Primitive.div ref={ref} className={twMerge(sheetHeaderStyles({ size }), className)} {...others}>
      {children}
    </Primitive.div>
  );
});

SheetHeader.displayName = 'SheetHeader';
