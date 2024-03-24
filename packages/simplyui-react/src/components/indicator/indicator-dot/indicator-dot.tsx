import type { IndicatorDotProps, IndicatorDotStyle } from './indicator-dot.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Primitive } from '../../primitive';
import { applayComponentDefaultProps } from '../../../utils/applay-component-default-props';
import { getIndicatorDotPositionVariables } from './utils/get-indicator-dot-position-variables';
import { indicatorDotStyles } from './indicator-dot.styles';

const defaultProps: Partial<IndicatorDotProps> = {
  color: 'primary',
  offset: 0,
  position: 'top-end',
  processingReduceDuration: 2000,
  processingSafeDuration: 1000,
  radius: 'full',
  size: '3',
};

export const IndicatorDot = forwardRef<HTMLDivElement, IndicatorDotProps>((props, ref) => {
  const {
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
    children,
    ...others
  } = applayComponentDefaultProps(defaultProps, props);

  const indicatorDotPositionVariables = getIndicatorDotPositionVariables(position, offset);

  const indicatorDotStyle: IndicatorDotStyle = {
    '--indicator-dot-processing-reduce-duration': `${processingReduceDuration}ms`,
    '--indicator-dot-processing-safe-duration': `${processingSafeDuration}ms`,
    ...indicatorDotPositionVariables,
    ...style,
  };

  return (
    <Primitive.div
      ref={ref}
      aria-hidden="true"
      data-disabled={disabled ? '' : undefined}
      data-processing={processing ? '' : undefined}
      style={indicatorDotStyle}
      className={twMerge(indicatorDotStyles({ color, radius, size, withBorder }), className)}
      {...others}
    >
      {children}
    </Primitive.div>
  );
});

IndicatorDot.displayName = 'Indicator.Dot';
