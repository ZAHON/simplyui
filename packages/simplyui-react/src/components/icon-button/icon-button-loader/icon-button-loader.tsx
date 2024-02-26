'use client';
import type { IconButtonLoaderProps } from './icon-button-loader.types';
import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { twMerge } from 'tailwind-merge';
import { useIconButtonContext } from '../icon-button-context';
import { iconButtonLoaderStyles } from './icon-button-loader.styles';

export const IconButtonLoader = forwardRef<HTMLDivElement, IconButtonLoaderProps>((props, ref) => {
  const { asChild, className, children, ...others } = props;

  const { disabled, loading } = useIconButtonContext();

  const Component = asChild ? Slot : 'div';

  if (!loading) {
    return null;
  }

  return (
    <Component
      ref={ref}
      data-disabled={disabled ? '' : undefined}
      data-loading={loading ? '' : undefined}
      className={twMerge(iconButtonLoaderStyles(), className)}
      {...others}
    >
      {children}
    </Component>
  );
});

IconButtonLoader.displayName = 'IconButtonLoader';
