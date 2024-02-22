'use client';
import type { ButtonContentProps } from './button-content.types';
import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { twMerge } from 'tailwind-merge';
import { useButtonContext } from '../button-context';
import { buttonContentStyles } from './button-content.styles';

export const ButtonContent = forwardRef<HTMLSpanElement, ButtonContentProps>((props, ref) => {
  const { asChild, className, children, ...others } = props;

  const { size, disabled, loading } = useButtonContext();

  const Component = asChild ? Slot : 'span';

  return (
    <Component
      ref={ref}
      data-disabled={disabled ? '' : undefined}
      data-loading={loading ? '' : undefined}
      className={twMerge(buttonContentStyles({ size }), className)}
      {...others}
    >
      {children}
    </Component>
  );
});

ButtonContent.displayName = 'ButtonContent';
