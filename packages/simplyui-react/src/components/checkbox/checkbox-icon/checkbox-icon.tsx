import type { CheckboxIconProps } from './checkbox-icon.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { IconCheck } from '../../../icons/icon-check';
import { checkboxIconStyles } from './checkbox-icon.styles';

export const CheckboxIcon = forwardRef<SVGSVGElement, CheckboxIconProps>((props, ref) => {
  const { className, ...others } = props;

  return <IconCheck ref={ref} role="presentation" className={twMerge(checkboxIconStyles(), className)} {...others} />;
});

CheckboxIcon.displayName = 'CheckboxIcon';
