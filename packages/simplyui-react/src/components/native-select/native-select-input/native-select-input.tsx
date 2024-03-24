'use client';
import type { NativeSelectInputProps } from './native-select-input.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { useNativeSelectContext } from '../native-select-context';
import { nativeSelectInputStyles } from './native-select-input.styles';

export const NativeSelectInput = forwardRef<HTMLSelectElement, NativeSelectInputProps>((props, ref) => {
  const { placeholder, className, children, ...others } = props;

  const { disabled, invalid, radius, required, size, variant } = useNativeSelectContext();

  return (
    <select
      ref={ref}
      disabled={disabled}
      aria-invalid={invalid ? true : undefined}
      aria-required={required ? true : undefined}
      data-disabled={disabled ? '' : undefined}
      data-invalid={invalid ? '' : undefined}
      className={twMerge(nativeSelectInputStyles({ radius, size, variant }), className)}
      {...others}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {children}
    </select>
  );
});

NativeSelectInput.displayName = 'NativeSelect.Input';
