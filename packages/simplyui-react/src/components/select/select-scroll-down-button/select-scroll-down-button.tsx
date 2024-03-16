'use client';
import type { SelectScrollDownButtonProps } from './select-scroll-down-button.types';
import { forwardRef } from 'react';
import { ScrollDownButton } from '@radix-ui/react-select';
import { twMerge } from 'tailwind-merge';
import { useSelectContext } from '../select-context';
import { SelectScrollDownButtonIcon } from './select-scroll-down-button-icon';
import { selectScrollDownButtonStyles } from './select-scroll-down-button.styles';

export const SelectScrollDownButton = forwardRef<HTMLDivElement, SelectScrollDownButtonProps>((props, ref) => {
  const { className, children, ...others } = props;

  const { size } = useSelectContext();

  return (
    <ScrollDownButton ref={ref} className={twMerge(selectScrollDownButtonStyles({ size }), className)} {...others}>
      {children ? children : <SelectScrollDownButtonIcon />}
    </ScrollDownButton>
  );
});

SelectScrollDownButton.displayName = 'SelectScrollDownButton';
