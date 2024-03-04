import type { CheckboxIconProps } from './checkbox-icon.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { checkboxIconStyles } from './checkbox-icon.styles';

export const CheckboxIcon = forwardRef<SVGSVGElement, CheckboxIconProps>((props, ref) => {
  const { className, ...others } = props;

  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      role="presentation"
      className={twMerge(checkboxIconStyles(), className)}
      {...others}
    >
      <path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z" />
    </svg>
  );
});

CheckboxIcon.displayName = 'CheckboxIcon';
