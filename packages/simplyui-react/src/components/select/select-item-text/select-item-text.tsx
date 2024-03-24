'use client';
import type { SelectItemTextProps } from './select-item-text.types';
import { forwardRef } from 'react';
import { ItemText } from '@radix-ui/react-select';

export const SelectItemText = forwardRef<HTMLSpanElement, SelectItemTextProps>((props, ref) => {
  const { children, ...others } = props;

  return (
    <ItemText ref={ref} {...others}>
      {children}
    </ItemText>
  );
});

SelectItemText.displayName = 'Select.ItemText';
