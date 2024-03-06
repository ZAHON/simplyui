'use client';
import type { TooltipArrowProps } from './tooltip-arrow.types';
import { forwardRef } from 'react';
import { Arrow } from '@radix-ui/react-tooltip';
import { twMerge } from 'tailwind-merge';
import { tooltipArrowStyles } from './tooltip-arrow.styles';

export const TooltipArrow = forwardRef<SVGSVGElement, TooltipArrowProps>((props, ref) => {
  const { className, children, ...others } = props;

  return (
    <Arrow ref={ref} className={twMerge(tooltipArrowStyles(), className)} {...others}>
      {children}
    </Arrow>
  );
});

TooltipArrow.displayName = 'TooltipArrow';
