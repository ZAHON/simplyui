'use client';
import type { SelectItemProps } from './select-item.types';
import { forwardRef } from 'react';
import { Item } from '@radix-ui/react-select';
import { twMerge } from 'tailwind-merge';
import { useSelectContext } from '../select-context';
import { useSelectContentContext } from '../select-content-context';
import { selectItemStyles } from './select-item.styles';

export const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>((props, ref) => {
  const { className, children, ...others } = props;

  const { radius, size } = useSelectContext();
  const { color, variant } = useSelectContentContext();

  return (
    <Item ref={ref} className={twMerge(selectItemStyles({ color, radius, size, variant }), className)} {...others}>
      {children}
    </Item>
  );
});

SelectItem.displayName = 'SelectItem';
