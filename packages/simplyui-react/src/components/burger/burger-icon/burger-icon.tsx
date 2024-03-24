'use client';
import type { BurgerIconProps } from './burger-icon.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Primitive } from '../../primitive';
import { useBurgerContext } from '../burger-context';
import { burgerIconStyles } from './burger-icon.styles';

export const BurgerIcon = forwardRef<HTMLDivElement, BurgerIconProps>((props, ref) => {
  const { className, children, ...others } = props;

  const { open, disabled } = useBurgerContext();

  return (
    <Primitive.div
      ref={ref}
      aria-hidden="true"
      data-disabled={disabled ? '' : undefined}
      data-state={open ? 'open' : 'closed'}
      className={twMerge(burgerIconStyles(), className)}
      {...others}
    >
      {children}
    </Primitive.div>
  );
});

BurgerIcon.displayName = 'BurgerIcon';
