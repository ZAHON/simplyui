'use client';
import type { CloseButtonIconProps } from './close-button-icon.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { useCloseButtonContext } from '../close-button-context';
import { closeButtonIconStyles } from './close-button-icon.styles';

export const CloseButtonIcon = forwardRef<SVGSVGElement, CloseButtonIconProps>((props, ref) => {
  const { className, ...others } = props;

  const { size, disabled } = useCloseButtonContext();

  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      data-disabled={disabled ? '' : undefined}
      aria-hidden="true"
      focusable="false"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      className={twMerge(closeButtonIconStyles({ size }), className)}
      {...others}
    >
      <path stroke="none" d="M0 0h24v24H0z"></path>
      <path d="M18 6L6 18M6 6l12 12"></path>
    </svg>
  );
});

CloseButtonIcon.displayName = 'CloseButtonIcon';
