import type { IndicatorDotProps, IndicatorDotStyle } from './indicator-dot.types';
import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils/applay-component-default-props';
import { getIndicatorDotPositionVariables } from './utils/get-indicator-dot-position-variables';
import { indicatorDotStyles } from './indicator-dot.styles';

const defaultProps: Partial<IndicatorDotProps> = {
  color: 'primary',
  offset: 0,
  position: 'top-end',
  processingReduceDuration: 2000,
  processingSafeDuration: 1000,
  radius: 'full',
  size: 'md',
};

export const IndicatorDot = forwardRef<HTMLDivElement, IndicatorDotProps>((props, ref) => {
  const {
    asChild,
    color,
    disabled,
    offset,
    position,
    processing,
    processingReduceDuration,
    processingSafeDuration,
    radius,
    size,
    withBorder,
    style,
    className,
    ...others
  } = applayComponentDefaultProps(defaultProps, props);

  const indicatorDotStyle: IndicatorDotStyle = {
    '--indicator-dot-processing-reduce-duration': `${processingReduceDuration}ms`,
    '--indicator-dot-processing-safe-duration': `${processingSafeDuration}ms`,
    ...getIndicatorDotPositionVariables(position, offset),
    ...style,
  };

  const Component = asChild ? Slot : 'div';

  return (
    <Component
      ref={ref}
      data-disabled={disabled ? '' : undefined}
      data-processing={processing ? '' : undefined}
      style={indicatorDotStyle}
      className={twMerge(indicatorDotStyles({ color, radius, size, withBorder }), className)}
      {...others}
    />
  );
});

IndicatorDot.displayName = 'IndicatorDot';
