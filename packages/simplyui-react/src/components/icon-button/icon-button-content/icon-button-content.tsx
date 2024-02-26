'use client';
import type { IconButtonContentProps } from './icon-button-content.types';
import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { twMerge } from 'tailwind-merge';
import { useIconButtonContext } from '../icon-button-context';
import { iconButtonContentStyles } from './icon-button-content.styles';

export const IconButtonContent = forwardRef<HTMLSpanElement, IconButtonContentProps>((props, ref) => {
  const { asChild, className, children, ...others } = props;

  const { disabled, loading } = useIconButtonContext();

  const Component = asChild ? Slot : 'span';

  return (
    <Component
      ref={ref}
      data-disabled={disabled ? '' : undefined}
      data-loading={loading ? '' : undefined}
      className={twMerge(iconButtonContentStyles(), className)}
      {...others}
    >
      {children}
    </Component>
  );
});

IconButtonContent.displayName = 'IconButtonContent';
