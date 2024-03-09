'use client';
import type { IconButtonRootProps } from './icon-button-root.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Primitive } from '@/components/primitive';
import { applayComponentDefaultProps } from '@/utils/applay-component-default-props';
import { IconButtonContextProvider } from '../icon-button-context';
import { iconButtonRootStyles } from './icon-button-root.styles';

const defaultProps: Partial<IconButtonRootProps> = {
  color: 'default',
  size: '2',
  radius: 'md',
  type: 'button',
  variant: 'subtle',
};

export const IconButtonRoot = forwardRef<HTMLButtonElement, IconButtonRootProps>((props, ref) => {
  const { color, disabled, loading, radius, size, variant, className, children, ...others } =
    applayComponentDefaultProps(defaultProps, props);

  return (
    <IconButtonContextProvider value={{ disabled, loading, size }}>
      <Primitive.button
        ref={ref}
        disabled={disabled || loading}
        data-disabled={disabled ? '' : undefined}
        data-loading={loading ? '' : undefined}
        className={twMerge(iconButtonRootStyles({ color, radius, size, variant }), className)}
        {...others}
      >
        {children}
      </Primitive.button>
    </IconButtonContextProvider>
  );
});

IconButtonRoot.displayName = 'IconButtonRoot';
