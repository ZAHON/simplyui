'use client';
import type { BurgerRootProps } from './burger-root.types';
import type { MouseEvent } from 'react';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { useUncontrolled } from '@/hooks/use-uncontrolled';
import { Primitive } from '@/components/primitive';
import { applayComponentDefaultProps } from '@/utils/applay-component-default-props';
import { BurgerContextProvider } from '../burger-context';
import { burgerRootStyles } from './burger-root.styles';

const defaultProps: Partial<BurgerRootProps> = {
  color: 'default',
  radius: 'md',
  size: '2',
  variant: 'subtle',
};

export const BurgerRoot = forwardRef<HTMLButtonElement, BurgerRootProps>((props, ref) => {
  const {
    defaultOpen,
    open,
    onOpenChange,
    color,
    disabled,
    radius,
    size,
    variant,
    className,
    onClick,
    children,
    ...others
  } = applayComponentDefaultProps(defaultProps, props);

  const [_open, handleOpenChange] = useUncontrolled({
    value: open,
    defaultValue: defaultOpen,
    finalValue: false,
    onChange: onOpenChange,
  });

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    if (onClick) onClick(e);

    if (!disabled) handleOpenChange(!_open);
  }

  return (
    <BurgerContextProvider value={{ open: _open, disabled }}>
      <Primitive.button
        ref={ref}
        type="button"
        disabled={disabled}
        data-disabled={disabled ? '' : undefined}
        data-state={_open ? 'open' : 'closed'}
        onClick={handleClick}
        className={twMerge(burgerRootStyles({ color, radius, size, variant }), className)}
        {...others}
      >
        {children}
      </Primitive.button>
    </BurgerContextProvider>
  );
});

BurgerRoot.displayName = 'BurgerRoot';
