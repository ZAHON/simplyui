'use client';
import type { SelectGroupProps } from './select-group.types';
import { forwardRef } from 'react';
import { Group } from '@radix-ui/react-select';

export const SelectGroup = forwardRef<HTMLDivElement, SelectGroupProps>((props, ref) => {
  const { children, ...others } = props;

  return (
    <Group ref={ref} {...others}>
      {children}
    </Group>
  );
});

SelectGroup.displayName = 'SelectGroup';
