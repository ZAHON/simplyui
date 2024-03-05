'use client';
import type { TextFieldInputProps } from './text-field-input.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils/applay-component-default-props';
import { useTextFieldContext } from '../text-field-context';
import { textFieldInputStyles } from './text-field-input.styles';

const defaultProps: Partial<TextFieldInputProps> = {
  type: 'text',
};

export const TextFieldInput = forwardRef<HTMLInputElement, TextFieldInputProps>((props, ref) => {
  const { className, ...others } = applayComponentDefaultProps(defaultProps, props);

  const { disabled, invalid, required } = useTextFieldContext();

  return (
    <input
      ref={ref}
      disabled={disabled}
      aria-invalid={invalid ? true : undefined}
      aria-required={required ? true : undefined}
      data-disabled={disabled ? '' : undefined}
      data-invalid={invalid ? '' : undefined}
      className={twMerge(textFieldInputStyles(), className)}
      {...others}
    />
  );
});

TextFieldInput.displayName = 'TextFieldInput';
