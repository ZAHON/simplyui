import type { TextProps } from './text.types';
import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '../../utils/applay-component-default-props';
import { textStyles } from './text.styles';

const defaultProps: Partial<TextProps> = {
  as: 'p',
  color: 'foreground',
  size: '3',
  tracking: 'normal',
  weight: 'regular',
};

/** This component is based on the `p` element. */
export const Text = forwardRef<HTMLElement, TextProps>((props, ref) => {
  const { asChild, as, color, size, tracking, weight, className, children, ...others } = applayComponentDefaultProps(
    defaultProps,
    props
  );

  const Tag = as ?? 'p';

  return (
    <Slot ref={ref} className={twMerge(textStyles({ color, size, tracking, weight }), className)} {...others}>
      {asChild ? children : <Tag>{children}</Tag>}
    </Slot>
  );
});

Text.displayName = 'Text';
