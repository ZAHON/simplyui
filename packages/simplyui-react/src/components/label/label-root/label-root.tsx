'use client';
import type { LabelRootProps } from './label-root.types';
import type { MouseEvent } from 'react';
import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils/applay-component-default-props';
import { labelRootStyles } from './label-root.styles';

const defaultProps: Partial<LabelRootProps> = {
  size: 'md',
};

export const LabelRoot = forwardRef<HTMLLabelElement, LabelRootProps>((props, ref) => {
  const { asChild, size, disabled, onMouseDown, className, children, ...others } = applayComponentDefaultProps(
    defaultProps,
    props
  );

  const Component = asChild ? Slot : 'label';

  function handleMouseDown(e: MouseEvent<HTMLLabelElement>) {
    if (onMouseDown) onMouseDown(e);

    // prevent text selection when double clicking label
    if (!e.defaultPrevented && e.detail > 1) e.preventDefault();
  }

  return (
    <Component
      ref={ref}
      data-disabled={disabled ? '' : undefined}
      onMouseDown={handleMouseDown}
      className={twMerge(labelRootStyles({ size }), className)}
      {...others}
    >
      {children}
    </Component>
  );
});

LabelRoot.displayName = 'LabelRoot';
