'use client';
import type { SelectItemIndicatorIconProps } from './select-item-indicator-icon.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { IconCheck } from '@/icons/icon-check';
import { useSelectContext } from '../../select-context';
import { selectItemIndicatorIconStyles } from './select-item-indicator-icon.styles';

export const SelectItemIndicatorIcon = forwardRef<SVGSVGElement, SelectItemIndicatorIconProps>((props, ref) => {
  const { className, ...others } = props;

  const { size } = useSelectContext();

  return <IconCheck ref={ref} className={twMerge(selectItemIndicatorIconStyles({ size }), className)} {...others} />;
});

SelectItemIndicatorIcon.displayName = 'SelectItemIndicatorIcon';
