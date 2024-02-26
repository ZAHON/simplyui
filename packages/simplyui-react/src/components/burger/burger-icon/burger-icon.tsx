'use client';
import type { BurgerIconProps } from './burger-icon.types';
import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { twMerge } from 'tailwind-merge';
import { useBurgerContext } from '../burger-context';
import { burgerIconStyles } from './burger-icon.styles';

export const BurgerIcon = forwardRef<HTMLDivElement, BurgerIconProps>((props, ref) => {
  const { asChild, className, ...others } = props;

  const { open, disabled } = useBurgerContext();

  const Component = asChild ? Slot : 'div';

  return (
    <Component
      ref={ref}
      data-disabled={disabled ? '' : undefined}
      data-state={open ? 'open' : 'closed'}
      className={twMerge(burgerIconStyles(), className)}
      {...others}
    />
  );
});

BurgerIcon.displayName = 'BurgerIcon';
