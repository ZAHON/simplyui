'use client';
import type { SelectLabelProps } from './select-label.types';
import { forwardRef } from 'react';
import { Label } from '@radix-ui/react-select';
import { twMerge } from 'tailwind-merge';
import { useSelectContext } from '../select-context';
import { selectLabelStyles } from './select-label.styles';

export const SelectLabel = forwardRef<HTMLDivElement, SelectLabelProps>((props, ref) => {
  const { className, children, ...others } = props;

  const { size } = useSelectContext();

  return (
    <Label ref={ref} className={twMerge(selectLabelStyles({ size }), className)} {...others}>
      {children}
    </Label>
  );
});

SelectLabel.displayName = 'SelectLabel';
