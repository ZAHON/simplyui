import type { LinkProps } from './link.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Primitive } from '@/components/primitive';
import { applayComponentDefaultProps } from '@/utils/applay-component-default-props';
import { linkStyles } from './link.styles';

const defaultProps: Partial<LinkProps> = {
  color: 'primary',
  tracking: 'normal',
  size: '3',
  underline: 'none',
  weight: 'regular',
};

/** This component is based on the `a` element. */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { color, disabled, external, tracking, size, underline, weight, className, children, ...others } =
    applayComponentDefaultProps(defaultProps, props);

  const disabledAttributes = {
    'aria-disabled': disabled ? disabled : undefined,
    'data-disabled': disabled ? '' : undefined,
  };

  const externalAttributes = {
    target: external ? '_blank' : undefined,
    rel: external ? 'noopener noreferrer' : undefined,
  };

  return (
    <Primitive.a
      ref={ref}
      className={twMerge(linkStyles({ color, tracking, size, underline, weight }), className)}
      {...disabledAttributes}
      {...externalAttributes}
      {...others}
    >
      {children}
    </Primitive.a>
  );
});

Link.displayName = 'Link';
