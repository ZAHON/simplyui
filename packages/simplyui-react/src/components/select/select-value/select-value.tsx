'use client';
import type { SelectValueProps } from './select-value.types';
import { forwardRef } from 'react';
import { Value } from '@radix-ui/react-select';

export const SelectValue = forwardRef<HTMLSpanElement, SelectValueProps>((props, ref) => {
  const { children, ...others } = props;

  return (
    <Value ref={ref} {...others}>
      {children}
    </Value>
  );
});

SelectValue.displayName = 'Select.Value';
