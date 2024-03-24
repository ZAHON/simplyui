'use client';
import type { ButtonRootProps } from './button-root.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '../../../utils/applay-component-default-props';
import { Primitive } from '../../primitive';
import { ButtonContextProvider } from '../button-context';
import { buttonRootStyles } from './button-root.styles';

const defaultProps: Partial<ButtonRootProps> = {
  color: 'primary',
  size: '2',
  radius: 'md',
  type: 'button',
  variant: 'filled',
};

export const ButtonRoot = forwardRef<HTMLButtonElement, ButtonRootProps>((props, ref) => {
  const { color, disabled, fullWidth, loading, radius, size, variant, className, children, ...others } =
    applayComponentDefaultProps(defaultProps, props);

  return (
    <ButtonContextProvider value={{ size, disabled, loading }}>
      <Primitive.button
        ref={ref}
        disabled={disabled || loading}
        data-disabled={disabled ? '' : undefined}
        data-loading={loading ? '' : undefined}
        className={twMerge(buttonRootStyles({ color, radius, size, variant, fullWidth }), className)}
        {...others}
      >
        {children}
      </Primitive.button>
    </ButtonContextProvider>
  );
});

ButtonRoot.displayName = 'ButtonRoot';
