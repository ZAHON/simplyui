'use client';
import type { NativeSelectIconDefaultProps } from './native-select-icon-default.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { IconSelector } from '../../../../icons/icon-selector';
import { useNativeSelectContext } from '../../native-select-context';
import { nativeSelectIconDefaultStyles } from './native-select-icon-default.styles';

export const NativeSelectIconDefault = forwardRef<SVGSVGElement, NativeSelectIconDefaultProps>((props, ref) => {
  const { className, ...others } = props;

  const { size } = useNativeSelectContext();

  return <IconSelector ref={ref} className={twMerge(nativeSelectIconDefaultStyles({ size }), className)} {...others} />;
});

NativeSelectIconDefault.displayName = 'NativeSelect.IconDefault';
