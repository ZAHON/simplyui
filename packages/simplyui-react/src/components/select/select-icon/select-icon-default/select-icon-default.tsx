'use client';
import type { SelectIconDefaultProps } from './select-icon-default.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { IconSelector } from '../../../../icons/icon-selector';
import { useSelectContext } from '../../select-context';
import { selectIconDefaultStyles } from './select-icon-default.styles';

export const SelectIconDefault = forwardRef<SVGSVGElement, SelectIconDefaultProps>((props, ref) => {
  const { className, ...others } = props;

  const { size } = useSelectContext();

  return <IconSelector ref={ref} className={twMerge(selectIconDefaultStyles({ size }), className)} {...others} />;
});

SelectIconDefault.displayName = 'Select.IconDefault';
