'use client';
import type { SheetContentProps } from './sheet-content.types';
import { forwardRef } from 'react';
import { Content } from '@radix-ui/react-dialog';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils/applay-component-default-props';
import { SheetContentContextProvider } from '../sheet-content-context';
import { sheetContentStyles } from './sheet-content.styles';

const defaultProps: Partial<SheetContentProps> = {
  size: '2',
  side: 'right',
};

export const SheetContent = forwardRef<HTMLDivElement, SheetContentProps>((props, ref) => {
  const { size, side, className, children, ...others } = applayComponentDefaultProps(defaultProps, props);

  return (
    <SheetContentContextProvider value={{ size }}>
      <Content
        ref={ref}
        data-side={side}
        className={twMerge(sheetContentStyles({ size, side }), className)}
        {...others}
      >
        {children}
      </Content>
    </SheetContentContextProvider>
  );
});

SheetContent.displayName = 'SheetContent';
