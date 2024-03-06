import type { BadgeProps } from './badge.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Primitive } from '@/components/primitive';
import { applayComponentDefaultProps } from '@/utils/applay-component-default-props';
import { badgeStyles } from './badge.styles';

const defaultProps: Partial<BadgeProps> = {
  color: 'primary',
  radius: 'full',
  size: '2',
  variant: 'light',
};

/** A stylized badge element. This component is based on the `span` element. */
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>((props, ref) => {
  const { color, radius, size, variant, className, children, ...others } = applayComponentDefaultProps(
    defaultProps,
    props
  );

  return (
    <Primitive.span ref={ref} className={twMerge(badgeStyles({ color, radius, size, variant }), className)} {...others}>
      {children}
    </Primitive.span>
  );
});

Badge.displayName = 'Badge';
