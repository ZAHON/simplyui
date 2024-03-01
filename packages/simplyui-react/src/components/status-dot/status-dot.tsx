import type { StatusDotProps } from './status-dot.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Primitive } from '@/components/primitive';
import { applayComponentDefaultProps } from '@/utils/applay-component-default-props';
import { statusDotStyles } from './status-dot.styles';

const defaultProps: Partial<StatusDotProps> = {
  color: 'primary',
  size: 'md',
};

export const StatusDot = forwardRef<HTMLSpanElement, StatusDotProps>((props, ref) => {
  const { color, size, className, children, ...others } = applayComponentDefaultProps(defaultProps, props);

  return (
    <Primitive.span ref={ref} className={twMerge(statusDotStyles({ color, size }), className)} {...others}>
      {children}
    </Primitive.span>
  );
});

StatusDot.displayName = 'StatusDot';
