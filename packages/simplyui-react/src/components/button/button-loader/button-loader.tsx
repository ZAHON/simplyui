'use client';
import type { ButtonLoaderProps } from './button-loader.types';
import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { twMerge } from 'tailwind-merge';
import { useButtonContext } from '../button-context';
import { buttonLoaderStyles } from './button-loader.styles';

export const ButtonLoader = forwardRef<HTMLDivElement, ButtonLoaderProps>((props, ref) => {
  const { asChild, className, children, ...others } = props;

  const { disabled, loading } = useButtonContext();

  const Component = asChild ? Slot : 'div';

  if (!loading) {
    return null;
  }

  return (
    <Component
      ref={ref}
      data-disabled={disabled ? '' : undefined}
      data-loading={loading ? '' : undefined}
      className={twMerge(buttonLoaderStyles(), className)}
      {...others}
    >
      {children}
    </Component>
  );
});

ButtonLoader.displayName = 'ButtonLoader';
