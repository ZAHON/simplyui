'use client';
import type { SelectItemIndicatorProps } from './select-item-indicator.types';
import { forwardRef } from 'react';
import { ItemIndicator } from '@radix-ui/react-select';
import { twMerge } from 'tailwind-merge';
import { SelectItemIndicatorIcon } from './select-item-indicator-icon';
import { selectItemIndicatorStyles } from './select-item-indicator.styles';

export const SelectItemIndicator = forwardRef<HTMLSpanElement, SelectItemIndicatorProps>((props, ref) => {
  const { className, children, ...others } = props;

  return (
    <ItemIndicator ref={ref} className={twMerge(selectItemIndicatorStyles(), className)} {...others}>
      {children ? children : <SelectItemIndicatorIcon />}
    </ItemIndicator>
  );
});

SelectItemIndicator.displayName = 'SelectItemIndicator';
