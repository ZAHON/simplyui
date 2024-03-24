import type { TooltipTextProps } from './tooltip-text.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Primitive } from '../../primitive';
import { tooltipTextStyles } from './tooltip-text.styles';

export const TooltipText = forwardRef<HTMLParagraphElement, TooltipTextProps>((props, ref) => {
  const { size, tracking, weight, className, children, ...others } = props;

  return (
    <Primitive.p ref={ref} className={twMerge(tooltipTextStyles({ size, tracking, weight }), className)} {...others}>
      {children}
    </Primitive.p>
  );
});

TooltipText.displayName = 'TooltipText';
