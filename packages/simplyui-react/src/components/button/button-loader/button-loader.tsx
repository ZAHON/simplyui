'use client';
import type { ButtonLoaderProps } from './button-loader.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Primitive } from '@/components/primitive';
import { useButtonContext } from '../button-context';
import { buttonLoaderStyles } from './button-loader.styles';

export const ButtonLoader = forwardRef<HTMLDivElement, ButtonLoaderProps>((props, ref) => {
  const { className, children, ...others } = props;

  const { disabled, loading } = useButtonContext();

  if (!loading) {
    return null;
  }

  return (
    <Primitive.div
      ref={ref}
      data-disabled={disabled ? '' : undefined}
      data-loading={loading ? '' : undefined}
      className={twMerge(buttonLoaderStyles(), className)}
      {...others}
    >
      {children}
    </Primitive.div>
  );
});

ButtonLoader.displayName = 'ButtonLoader';
