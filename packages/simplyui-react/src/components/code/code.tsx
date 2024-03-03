import type { CodeProps } from './code.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Primitive } from '@/components/primitive';
import { applayComponentDefaultProps } from '@/utils/applay-component-default-props';
import { codeStyles } from './code.styles';

const defaultProps: Partial<CodeProps> = {
  color: 'primary',
  radius: 'md',
  size: 'md',
  variant: 'light',
};

export const Code = forwardRef<HTMLElement, CodeProps>((props, ref) => {
  const { color, radius, size, variant, className, children, ...others } = applayComponentDefaultProps(
    defaultProps,
    props
  );

  return (
    <Primitive.code ref={ref} className={twMerge(codeStyles({ color, radius, size, variant }), className)} {...others}>
      {children}
    </Primitive.code>
  );
});

Code.displayName = 'Code';
