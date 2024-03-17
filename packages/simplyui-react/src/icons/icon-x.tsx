import type { IconProps } from './icon.types';
import { forwardRef } from 'react';

export const IconX = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      className="icon icon-tabler icons-tabler-outline icon-tabler-x"
      viewBox="0 0 24 24"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z"></path>
      <path d="M18 6L6 18M6 6l12 12"></path>
    </svg>
  );
});

IconX.displayName = 'IconX';
