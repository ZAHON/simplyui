'use client';
import type { IconButtonLoaderProps } from './icon-button-loader.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Primitive } from '../../primitive';
import { useIconButtonContext } from '../icon-button-context';
import { iconButtonLoaderStyles } from './icon-button-loader.styles';

export const IconButtonLoader = forwardRef<HTMLSpanElement, IconButtonLoaderProps>((props, ref) => {
  const { className, children, ...others } = props;

  const { disabled, loading } = useIconButtonContext();

  if (!loading) {
    return null;
  }

  return (
    <Primitive.span
      ref={ref}
      data-disabled={disabled ? '' : undefined}
      data-loading={loading ? '' : undefined}
      className={twMerge(iconButtonLoaderStyles(), className)}
      {...others}
    >
      {children}
    </Primitive.span>
  );
});

IconButtonLoader.displayName = 'IconButton.Loader';
