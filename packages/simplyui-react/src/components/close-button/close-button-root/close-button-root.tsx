import type { CloseButtonRootProps } from './close-button-root.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Primitive } from '../../primitive';
import { applayComponentDefaultProps } from '../../../utils/applay-component-default-props';
import { CloseButtonIcon } from '../close-button-icon';
import { closeButtonRootStyles } from './close-button-root.styles';

const defaultProps: Partial<CloseButtonRootProps> = {
  color: 'default',
  size: '2',
  radius: 'md',
  type: 'button',
  variant: 'subtle',
};

export const CloseButtonRoot = forwardRef<HTMLButtonElement, CloseButtonRootProps>((props, ref) => {
  const { size, variant, color, radius, disabled, className, children, ...others } = applayComponentDefaultProps(
    defaultProps,
    props
  );

  return (
    <Primitive.button
      ref={ref}
      disabled={disabled}
      data-disabled={disabled ? '' : undefined}
      className={twMerge(closeButtonRootStyles({ color, radius, size, variant }), className)}
      {...others}
    >
      {children ? children : <CloseButtonIcon size={size} />}
    </Primitive.button>
  );
});

CloseButtonRoot.displayName = 'CloseButtonRoot';
