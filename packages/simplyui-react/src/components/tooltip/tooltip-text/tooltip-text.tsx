import type { TooltipTextProps } from './tooltip-text.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Primitive } from '../../primitive';
import { applayComponentDefaultProps } from '../../../utils/applay-component-default-props';
import { tooltipTextStyles } from './tooltip-text.styles';

const defaultProps: Partial<TooltipTextProps> = {
  size: '1',
  tracking: 'normal',
  weight: 'regular',
};

export const TooltipText = forwardRef<HTMLParagraphElement, TooltipTextProps>((props, ref) => {
  const { size, tracking, weight, className, children, ...others } = applayComponentDefaultProps(defaultProps, props);

  return (
    <Primitive.p ref={ref} className={twMerge(tooltipTextStyles({ size, tracking, weight }), className)} {...others}>
      {children}
    </Primitive.p>
  );
});

TooltipText.displayName = 'Tooltip.Text';
