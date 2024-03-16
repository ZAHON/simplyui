import type { IconProps } from './icon.types';
import { forwardRef } from 'react';

export const IconSelector = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      <path d="M8 9l4-4 4 4M16 15l-4 4-4-4"></path>
    </svg>
  );
});

IconSelector.displayName = 'IconSelector';
