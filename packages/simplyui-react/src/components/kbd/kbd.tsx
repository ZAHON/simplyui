import type { KbdProps } from './kbd.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Primitive } from '../primitive';
import { applayComponentDefaultProps } from '../../utils/applay-component-default-props';
import { kbdStyles } from './kbd.styles';

const defaultProps: Partial<KbdProps> = {
  radius: 'md',
  size: '3',
};

/** This component is based on the `kbd` element.  */
export const Kbd = forwardRef<HTMLElement, KbdProps>((props, ref) => {
  const { radius, size, className, children, ...others } = applayComponentDefaultProps(defaultProps, props);

  return (
    <Primitive.kbd ref={ref} className={twMerge(kbdStyles({ radius, size }), className)} {...others}>
      {children}
    </Primitive.kbd>
  );
});

Kbd.displayName = 'Kbd';
