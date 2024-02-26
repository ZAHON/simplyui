'use client';
import type { IconButtonRootProps } from './icon-button-root.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils/applay-component-default-props';
import { Primitive } from '@/components/primitive';
import { IconButtonContextProvider } from '../icon-button-context';
import { iconButtonRootStyles } from './icon-button-root.styles';

const defaultProps: Partial<IconButtonRootProps> = {
  color: 'default',
  size: 'md',
  radius: 'md',
  type: 'button',
  variant: 'subtle',
};

export const IconButtonRoot = forwardRef<HTMLButtonElement, IconButtonRootProps>((props, ref) => {
  const { size, variant, color, radius, disabled, loading, className, children, ...others } =
    applayComponentDefaultProps(defaultProps, props);

  return (
    <IconButtonContextProvider value={{ size, disabled, loading }}>
      <Primitive.button
        ref={ref}
        disabled={disabled || loading}
        data-disabled={disabled ? '' : undefined}
        data-loading={loading ? '' : undefined}
        className={twMerge(iconButtonRootStyles({ size, variant, color, radius }), className)}
        {...others}
      >
        {children}
      </Primitive.button>
    </IconButtonContextProvider>
  );
});

IconButtonRoot.displayName = 'IconButtonRoot';
