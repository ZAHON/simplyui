'use client';
import type { ButtonLoaderProps } from './button-loader.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Primitive } from '../../primitive';
import { useButtonContext } from '../button-context';
import { buttonLoaderStyles } from './button-loader.styles';

export const ButtonLoader = forwardRef<HTMLSpanElement, ButtonLoaderProps>((props, ref) => {
  const { className, children, ...others } = props;

  const { disabled, loading } = useButtonContext();

  if (!loading) {
    return null;
  }

  return (
    <Primitive.span
      ref={ref}
      data-disabled={disabled ? '' : undefined}
      data-loading={loading ? '' : undefined}
      className={twMerge(buttonLoaderStyles(), className)}
      {...others}
    >
      {children}
    </Primitive.span>
  );
});

ButtonLoader.displayName = 'Button.Loader';
