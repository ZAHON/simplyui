'use client';
import type { LabelRootProps } from './label-root.types';
import type { MouseEvent } from 'react';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Primitive } from '@/components/primitive';
import { applayComponentDefaultProps } from '@/utils/applay-component-default-props';
import { LabelContextProvider } from '../label-context';
import { labelRootStyles } from './label-root.styles';

const defaultProps: Partial<LabelRootProps> = {
  size: '2',
  tracking: 'normal',
  weight: 'regular',
};

export const LabelRoot = forwardRef<HTMLLabelElement, LabelRootProps>((props, ref) => {
  const { disabled, size, tracking, weight, onMouseDown, className, children, ...others } = applayComponentDefaultProps(
    defaultProps,
    props
  );

  function handleMouseDown(e: MouseEvent<HTMLLabelElement>) {
    if (onMouseDown) onMouseDown(e);

    // prevent text selection when double clicking label
    if (!e.defaultPrevented && e.detail > 1) e.preventDefault();
  }

  return (
    <LabelContextProvider value={{ disabled }}>
      <Primitive.label
        ref={ref}
        data-disabled={disabled ? '' : undefined}
        onMouseDown={handleMouseDown}
        className={twMerge(labelRootStyles({ size, tracking, weight }), className)}
        {...others}
      >
        {children}
      </Primitive.label>
    </LabelContextProvider>
  );
});

LabelRoot.displayName = 'LabelRoot';
