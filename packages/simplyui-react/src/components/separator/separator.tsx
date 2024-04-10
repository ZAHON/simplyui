import type { SeparatorProps } from './separator.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Primitive } from '../primitive';
import { applayComponentDefaultProps } from '../../utils/applay-component-default-props';
import { separatorStyles } from './separator.styles';

const defaultProps: Partial<SeparatorProps> = {
  color: 'default',
  decorative: true,
  orientation: 'horizontal',
};

/** This component is based on the `div` element. */
export const Separator = forwardRef<HTMLDivElement, SeparatorProps>((props, ref) => {
  const { color, decorative, orientation, className, children, ...others } = applayComponentDefaultProps(
    defaultProps,
    props
  );

  return (
    <Primitive.div
      ref={ref}
      aria-orientation={decorative ? undefined : orientation === 'vertical' ? orientation : undefined}
      role={decorative ? 'none' : 'separator'}
      data-orientation={orientation}
      className={twMerge(separatorStyles({ color }), className)}
      {...others}
    >
      {children}
    </Primitive.div>
  );
});

Separator.displayName = 'Separator';
