import type { InputProps } from './input.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '../../utils/applay-component-default-props';
import { inputStyles } from './input.styles';

const defaultProps: Partial<InputProps> = {
  radius: 'md',
  size: '2',
  type: 'text',
  variant: 'default',
};

/** The input element. This component is based on the `input` element. */
export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { disabled, invalid, radius, required, size, variant, className, ...others } = applayComponentDefaultProps(
    defaultProps,
    props
  );

  return (
    <input
      ref={ref}
      disabled={disabled}
      aria-invalid={invalid ? true : undefined}
      aria-required={required ? true : undefined}
      data-disabled={disabled ? '' : undefined}
      data-invalid={invalid ? '' : undefined}
      className={twMerge(inputStyles({ radius, size, variant }), className)}
      {...others}
    />
  );
});

Input.displayName = 'Input';
