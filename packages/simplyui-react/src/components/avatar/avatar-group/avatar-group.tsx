import type { AvatarGroupProps } from './avatar-group.types';
import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils/applay-component-default-props';
import { avatarGroupStyles } from './avatar-group.styles';

const defaultProps: Partial<AvatarGroupProps> = {
  spacing: 'md',
};

export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>((props, ref) => {
  const { asChild, spacing, className, children, ...others } = applayComponentDefaultProps(defaultProps, props);

  const Component = asChild ? Slot : 'div';

  return (
    <Component ref={ref} className={twMerge(avatarGroupStyles({ spacing }), className)} {...others}>
      {children}
    </Component>
  );
});

AvatarGroup.displayName = 'AvatarGroup';
