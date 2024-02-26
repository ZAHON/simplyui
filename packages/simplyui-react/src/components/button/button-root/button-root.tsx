'use client';
import type { ButtonRootProps } from './button-root.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils/applay-component-default-props';
import { Primitive } from '@/components/primitive';
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
  const { size, variant, color, radius, fullWidth, disabled, loading, className, children, ...others } =
    applayComponentDefaultProps(defaultProps, props);

  return (
    <ButtonContextProvider value={{ size, disabled, loading }}>
      <Primitive.button
        ref={ref}
        disabled={disabled || loading}
        data-disabled={disabled ? '' : undefined}
        data-loading={loading ? '' : undefined}
        className={twMerge(buttonRootStyles({ size, variant, color, radius, fullWidth }), className)}
        {...others}
      >
        {children}
      </Primitive.button>
    </ButtonContextProvider>
  );
});

ButtonRoot.displayName = 'ButtonRoot';
