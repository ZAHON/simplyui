'use client';
import { SelectIconProps } from './select-icon.types';
import { forwardRef } from 'react';
import { Icon } from '@radix-ui/react-select';
import { twMerge } from 'tailwind-merge';
import { useSelectContext } from '../select-context';
import { SelectIconDefault } from './select-icon-default';
import { selectIconStyles } from './select-icon.styles';

export const SelectIcon = forwardRef<HTMLSpanElement, SelectIconProps>((props, ref) => {
  const { className, children, ...others } = props;

  const { invalid } = useSelectContext();

  return (
    <Icon
      ref={ref}
      data-invalid={invalid ? '' : undefined}
      className={twMerge(selectIconStyles(), className)}
      {...others}
    >
      {children ? children : <SelectIconDefault />}
    </Icon>
  );
});

SelectIcon.displayName = 'Select.Icon';
