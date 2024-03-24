'use client';
import type { SheetDescriptionProps } from './sheet-description.types';
import { forwardRef } from 'react';
import { Description } from '@radix-ui/react-dialog';
import { twMerge } from 'tailwind-merge';
import { useSheetContentContext } from '../sheet-content-context';
import { sheetDescriptionStyles } from './sheet-description.styles';

export const SheetDescription = forwardRef<HTMLHeadingElement, SheetDescriptionProps>((props, ref) => {
  const { visuallyHidden, className, children, ...others } = props;

  const { size } = useSheetContentContext();

  return (
    <Description ref={ref} className={twMerge(sheetDescriptionStyles({ size, visuallyHidden }), className)} {...others}>
      {children}
    </Description>
  );
});

SheetDescription.displayName = 'Sheet.Description';
