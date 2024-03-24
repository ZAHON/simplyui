'use client';
import type { ButtonContentProps } from './button-content.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Primitive } from '../../primitive';
import { useButtonContext } from '../button-context';
import { buttonContentStyles } from './button-content.styles';

export const ButtonContent = forwardRef<HTMLSpanElement, ButtonContentProps>((props, ref) => {
  const { className, children, ...others } = props;

  const { disabled, loading, size } = useButtonContext();

  return (
    <Primitive.span
      ref={ref}
      data-disabled={disabled ? '' : undefined}
      data-loading={loading ? '' : undefined}
      className={twMerge(buttonContentStyles({ size }), className)}
      {...others}
    >
      {children}
    </Primitive.span>
  );
});

ButtonContent.displayName = 'ButtonContent';
