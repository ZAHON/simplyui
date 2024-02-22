'use client';
import type { ButtonRootProps } from './button-root.types';
import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils/applay-component-default-props';
import { ButtonContextProvider } from '../button-context';
import { buttonRootStyles } from './button-root.styles';

const defaultProps: Partial<ButtonRootProps> = {
  color: 'primary',
  size: 'md',
  radius: 'md',
  type: 'button',
  variant: 'filled',
};

export const ButtonRoot = forwardRef<HTMLButtonElement, ButtonRootProps>((props, ref) => {
  const { asChild, size, variant, color, radius, fullWidth, disabled, loading, className, children, ...others } =
    applayComponentDefaultProps(defaultProps, props);

  const Component = asChild ? Slot : 'button';

  return (
    <Component
      ref={ref}
      disabled={disabled || loading}
      data-disabled={disabled ? '' : undefined}
      data-loading={loading ? '' : undefined}
      className={twMerge(buttonRootStyles({ size, variant, color, radius, fullWidth }), className)}
      {...others}
    >
      <ButtonContextProvider value={{ size, disabled, loading }}>{children}</ButtonContextProvider>
    </Component>
  );
});

ButtonRoot.displayName = 'ButtonRoot';
