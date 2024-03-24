'use client';
import type { SheetTitleProps } from './sheet-title.types';
import { forwardRef } from 'react';
import { Title } from '@radix-ui/react-dialog';
import { twMerge } from 'tailwind-merge';
import { useSheetContentContext } from '../sheet-content-context';
import { sheetTitleStyles } from './sheet-title.styles';

export const SheetTitle = forwardRef<HTMLHeadingElement, SheetTitleProps>((props, ref) => {
  const { visuallyHidden, className, children, ...others } = props;

  const { size } = useSheetContentContext();

  return (
    <Title ref={ref} className={twMerge(sheetTitleStyles({ size, visuallyHidden }), className)} {...others}>
      {children}
    </Title>
  );
});

SheetTitle.displayName = 'Sheet.Title';
