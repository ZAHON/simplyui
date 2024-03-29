'use client';
import type { TooltipContentProps } from './tooltip-content.types';
import { forwardRef } from 'react';
import { Content } from '@radix-ui/react-tooltip';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '../../../utils/applay-component-default-props';
import { tooltipContentStyles } from './tooltip-content.styles';

const defaultProps: Partial<TooltipContentProps> = {
  collisionPadding: 10,
  radius: 'md',
  sideOffset: 4,
};

export const TooltipContent = forwardRef<HTMLDivElement, TooltipContentProps>((props, ref) => {
  const { radius, className, children, ...others } = applayComponentDefaultProps(defaultProps, props);

  return (
    <Content ref={ref} className={twMerge(tooltipContentStyles({ radius }), className)} {...others}>
      {children}
    </Content>
  );
});

TooltipContent.displayName = 'Tooltip.Content';
