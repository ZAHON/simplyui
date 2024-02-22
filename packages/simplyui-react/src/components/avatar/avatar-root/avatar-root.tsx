'use client';
import type { AvatarRootProps } from './avatar-root.types';
import { forwardRef } from 'react';
import { Root } from '@radix-ui/react-avatar';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils/applay-component-default-props';
import { avatarRootStyles } from './avatar-root.styles';

const defaultProps: Partial<AvatarRootProps> = {
  color: 'primary',
  radius: 'md',
  size: 'md',
  variant: 'light',
};

export const AvatarRoot = forwardRef<HTMLSpanElement, AvatarRootProps>((props, ref) => {
  const { size, radius, variant, color, className, children, ...others } = applayComponentDefaultProps(
    defaultProps,
    props
  );

  return (
    <Root ref={ref} className={twMerge(avatarRootStyles({ size, radius, variant, color }), className)} {...others}>
      {children}
    </Root>
  );
});

AvatarRoot.displayName = 'AvatarRoot';
