import type { CloseButtonProps } from './close-button.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Primitive } from '../primitive';
import { applayComponentDefaultProps } from '../../utils/applay-component-default-props';
import { CloseButtonIcon } from './close-button-icon';
import { closeButtonStyles } from './close-button.styles';

const defaultProps: Partial<CloseButtonProps> = {
  color: 'default',
  size: '2',
  radius: 'md',
  type: 'button',
  variant: 'subtle',
};

/** This component renders a button with `X` icon inside. This component is based on the `button` element. */
export const CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>((props, ref) => {
  const { size, variant, color, radius, disabled, className, children, ...others } = applayComponentDefaultProps(
    defaultProps,
    props
  );

  return (
    <Primitive.button
      ref={ref}
      disabled={disabled}
      data-disabled={disabled ? '' : undefined}
      className={twMerge(closeButtonStyles({ color, radius, size, variant }), className)}
      {...others}
    >
      {children ? children : <CloseButtonIcon size={size} />}
    </Primitive.button>
  );
});

CloseButton.displayName = 'CloseButton';
