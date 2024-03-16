import type { IconProps } from './icon.types';
import { forwardRef } from 'react';

export const IconChevronUp = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      strokeWidth="2"
      viewBox="0 0 24 24"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z"></path>
      <path d="M6 15l6-6 6 6"></path>
    </svg>
  );
});

IconChevronUp.displayName = 'IconChevronUp';
