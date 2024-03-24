import type { CardProps } from './card.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Primitive } from '../primitive';
import { applayComponentDefaultProps } from '../../utils/applay-component-default-props';
import { cardStyles } from './card.styles';

const defaultProps: Partial<CardProps> = {
  radius: 'md',
  shadow: 'md',
  size: '2',
};

/** Container that groups related content and actions. This component is based on the `div` element. */
export const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { radius, shadow, size, className, children, ...others } = applayComponentDefaultProps(defaultProps, props);

  return (
    <Primitive.div ref={ref} className={twMerge(cardStyles({ radius, shadow, size }), className)} {...others}>
      {children}
    </Primitive.div>
  );
});

Card.displayName = 'Card';
