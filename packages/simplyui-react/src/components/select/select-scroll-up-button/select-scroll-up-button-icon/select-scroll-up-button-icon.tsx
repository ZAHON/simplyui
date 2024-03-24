'use client';
import type { SelectScrollUpButtonIconProps } from './select-scroll-up-button-icon.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { IconChevronUp } from '../../../../icons/icon-chevron-up';
import { useSelectContext } from '../../select-context';
import { selectScrollUpButtonIconStyles } from './select-scroll-up-button-icon.styles';

export const SelectScrollUpButtonIcon = forwardRef<SVGSVGElement, SelectScrollUpButtonIconProps>((props, ref) => {
  const { className, ...others } = props;

  const { size } = useSelectContext();

  return (
    <IconChevronUp ref={ref} className={twMerge(selectScrollUpButtonIconStyles({ size }), className)} {...others} />
  );
});

SelectScrollUpButtonIcon.displayName = 'Select.ScrollUpButtonIcon';
