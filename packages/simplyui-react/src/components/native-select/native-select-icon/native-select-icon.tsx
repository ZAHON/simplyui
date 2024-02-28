'use client';
import type { NativeSelectIconProps } from './native-select-icon.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { useNativeSelectContext } from '../native-select-context';
import { nativeSelectIconStyles } from './native-select-icon.styles';

export const NativeSelectIcon = forwardRef<SVGSVGElement, NativeSelectIconProps>((props, ref) => {
  const { className, ...others } = props;

  const { size } = useNativeSelectContext();

  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      className={twMerge(nativeSelectIconStyles({ size }), className)}
      {...others}
    >
      <path stroke="none" d="M0 0h24v24H0z"></path>
      <path d="M8 9l4-4 4 4M16 15l-4 4-4-4"></path>
    </svg>
  );
});

NativeSelectIcon.displayName = 'NativeSelectIcon';
