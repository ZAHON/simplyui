'use client';
import type { LabelProps } from './label.types';
import type { MouseEvent } from 'react';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils/applay-component-default-props';
import { labelStyles } from './label.styles';

const defaultProps: Partial<LabelProps> = {
  size: 'md',
};

export const Label = forwardRef<HTMLLabelElement, LabelProps>((props, ref) => {
  const { size, disabled, onMouseDown, className, children, ...others } = applayComponentDefaultProps(
    defaultProps,
    props
  );

  function handleMouseDown(e: MouseEvent<HTMLLabelElement>) {
    if (onMouseDown) onMouseDown(e);

    // prevent text selection when double clicking label
    if (!e.defaultPrevented && e.detail > 1) e.preventDefault();
  }

  return (
    <label
      ref={ref}
      data-disabled={disabled ? '' : undefined}
      onMouseDown={handleMouseDown}
      className={twMerge(labelStyles({ size }), className)}
      {...others}
    >
      {children}
    </label>
  );
});

Label.displayName = 'Label';
