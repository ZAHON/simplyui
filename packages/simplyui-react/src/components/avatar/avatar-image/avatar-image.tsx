'use client';
import type { AvatarImageProps } from './avatar-image.types';
import { forwardRef } from 'react';
import { Image } from '@radix-ui/react-avatar';
import { twMerge } from 'tailwind-merge';
import { avatarImageStyles } from './avatar-image.styles';

export const AvatarImage = forwardRef<HTMLImageElement, AvatarImageProps>((props, ref) => {
  const { className, ...others } = props;

  return <Image ref={ref} className={twMerge(avatarImageStyles(), className)} {...others} />;
});

AvatarImage.displayName = 'AvatarImage';
