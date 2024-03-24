'use client';
import type { SelectScrollDownButtonIconProps } from './select-scroll-down-button-icon.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { IconChevronDown } from '../../../../icons/icon-chevron-down';
import { useSelectContext } from '../../select-context';
import { selectScrollDownButtonIconStyles } from './select-scroll-down-button-icon.styles';

export const SelectScrollDownButtonIcon = forwardRef<SVGSVGElement, SelectScrollDownButtonIconProps>((props, ref) => {
  const { className, ...others } = props;

  const { size } = useSelectContext();

  return (
    <IconChevronDown ref={ref} className={twMerge(selectScrollDownButtonIconStyles({ size }), className)} {...others} />
  );
});

SelectScrollDownButtonIcon.displayName = 'Select.ScrollDownButtonIcon';
