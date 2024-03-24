import type { AvatarGroupProps } from './avatar-group.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Primitive } from '../../primitive';
import { applayComponentDefaultProps } from '../../../utils/applay-component-default-props';
import { avatarGroupStyles } from './avatar-group.styles';

const defaultProps: Partial<AvatarGroupProps> = {
  addBorderForAvatars: true,
  spacing: '2',
};

export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>((props, ref) => {
  const { addBorderForAvatars, spacing, className, children, ...others } = applayComponentDefaultProps(
    defaultProps,
    props
  );

  return (
    <Primitive.div
      ref={ref}
      className={twMerge(avatarGroupStyles({ addBorderForAvatars, spacing }), className)}
      {...others}
    >
      {children}
    </Primitive.div>
  );
});

AvatarGroup.displayName = 'AvatarGroup';
