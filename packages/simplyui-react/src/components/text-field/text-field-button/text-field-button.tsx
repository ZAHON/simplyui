'use client';
import type { TextFieldButtonProps } from './text-field-button.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Primitive } from '../../primitive';
import { applayComponentDefaultProps } from '../../../utils/applay-component-default-props';
import { useTextFieldContext } from '../text-field-context';
import { textFieldButtonStyles } from './text-field-button.styles';

const defaultProps: Partial<TextFieldButtonProps> = {
  type: 'button',
};

export const TextFieldButton = forwardRef<HTMLButtonElement, TextFieldButtonProps>((props, ref) => {
  const { disabled, className, children, ...others } = applayComponentDefaultProps(defaultProps, props);

  const { disabled: groupDisabled, invalid, radius } = useTextFieldContext();

  const isDisabled = groupDisabled || disabled;

  return (
    <Primitive.button
      disabled={isDisabled}
      data-disabled={isDisabled ? '' : undefined}
      data-invalid={invalid ? '' : undefined}
      ref={ref}
      className={twMerge(textFieldButtonStyles({ radius }), className)}
      {...others}
    >
      {children}
    </Primitive.button>
  );
});

TextFieldButton.displayName = 'TextFieldButton';
