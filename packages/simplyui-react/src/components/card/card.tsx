import type { CardProps } from './card.types';
import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils/applay-component-default-props';
import { cardStyles } from './card.styles';

const defaultProps: Partial<CardProps> = {
  background: 'solid',
  radius: 'md',
  shadow: 'md',
  size: 'md',
};

export const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { asChild, background, radius, shadow, size, className, children, ...others } = applayComponentDefaultProps(
    defaultProps,
    props
  );

  const Component = asChild ? Slot : 'div';

  return (
    <Component ref={ref} className={twMerge(cardStyles({ background, radius, shadow, size }), className)} {...others}>
      {children}
    </Component>
  );
});

Card.displayName = 'Card';
