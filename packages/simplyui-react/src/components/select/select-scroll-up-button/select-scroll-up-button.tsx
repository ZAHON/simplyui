'use client';
import type { SelectScrollUpButtonProps } from './select-scroll-up-button.types';
import { forwardRef } from 'react';
import { ScrollUpButton } from '@radix-ui/react-select';
import { twMerge } from 'tailwind-merge';
import { useSelectContext } from '../select-context';
import { SelectScrollUpButtonIcon } from './select-scroll-up-button-icon';
import { selectScrollUpButtonStyles } from './select-scroll-up-button.styles';

export const SelectScrollUpButton = forwardRef<HTMLDivElement, SelectScrollUpButtonProps>((props, ref) => {
  const { className, children, ...others } = props;

  const { size } = useSelectContext();

  return (
    <ScrollUpButton ref={ref} className={twMerge(selectScrollUpButtonStyles({ size }), className)} {...others}>
      {children ? children : <SelectScrollUpButtonIcon />}
    </ScrollUpButton>
  );
});

SelectScrollUpButton.displayName = 'SelectScrollUpButton';
