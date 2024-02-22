'use client';
import type { AvatarFallbackProps } from './avatar-fallback.types';
import { forwardRef } from 'react';
import { Fallback } from '@radix-ui/react-avatar';
import { twMerge } from 'tailwind-merge';
import { avatarFallbackStyles } from './avatar-fallback.styles';

export const AvatarFallback = forwardRef<HTMLSpanElement, AvatarFallbackProps>((props, ref) => {
  const { className, children, ...others } = props;

  return (
    <Fallback ref={ref} className={twMerge(avatarFallbackStyles(), className)} {...others}>
      {children}
    </Fallback>
  );
});

AvatarFallback.displayName = 'AvatarFallback';
