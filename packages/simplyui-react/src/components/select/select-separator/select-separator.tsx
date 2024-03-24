'use client';
import type { SelectSeparatorProps } from './select-separator.types';
import { forwardRef } from 'react';
import { Separator } from '@radix-ui/react-select';
import { twMerge } from 'tailwind-merge';
import { useSelectContext } from '../select-context';
import { selectSeparatorStyles } from './select-separator.styles';

export const SelectSeparator = forwardRef<HTMLDivElement, SelectSeparatorProps>((props, ref) => {
  const { className, children, ...others } = props;

  const { size } = useSelectContext();

  return (
    <Separator ref={ref} className={twMerge(selectSeparatorStyles({ size }), className)} {...others}>
      {children}
    </Separator>
  );
});

SelectSeparator.displayName = 'Select.Separator';
