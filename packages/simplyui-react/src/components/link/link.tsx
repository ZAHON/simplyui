import type { LinkProps } from './link.types';
import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils/applay-component-default-props';
import { linkStyles } from './link.styles';

const defaultProps: Partial<LinkProps> = {
  color: 'primary',
  size: 'md',
  underline: 'none',
};

export const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { asChild, color, disabled, external, size, underline, className, children, ...others } =
    applayComponentDefaultProps(defaultProps, props);

  const disabledAttributes = {
    'aria-disabled': disabled ? disabled : undefined,
    'data-disabled': disabled ? '' : undefined,
  };

  const externalAttributes = {
    target: external ? '_blank' : undefined,
    rel: external ? 'noopener noreferrer' : undefined,
  };

  const Component = asChild ? Slot : 'a';

  return (
    <Component
      ref={ref}
      className={twMerge(linkStyles({ color, size, underline }), className)}
      {...disabledAttributes}
      {...externalAttributes}
      {...others}
    >
      {children}
    </Component>
  );
});

Link.displayName = 'Link';
