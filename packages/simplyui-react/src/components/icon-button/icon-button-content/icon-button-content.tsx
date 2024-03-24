'use client';
import type { IconButtonContentProps } from './icon-button-content.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Primitive } from '../../primitive';
import { useIconButtonContext } from '../icon-button-context';
import { iconButtonContentStyles } from './icon-button-content.styles';

export const IconButtonContent = forwardRef<HTMLSpanElement, IconButtonContentProps>((props, ref) => {
  const { className, children, ...others } = props;

  const { disabled, loading } = useIconButtonContext();

  return (
    <Primitive.span
      ref={ref}
      data-disabled={disabled ? '' : undefined}
      data-loading={loading ? '' : undefined}
      className={twMerge(iconButtonContentStyles(), className)}
      {...others}
    >
      {children}
    </Primitive.span>
  );
});

IconButtonContent.displayName = 'IconButton.Content';
