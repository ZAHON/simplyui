import type { HeadingProps } from './heading.types';
import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '../../utils/applay-component-default-props';
import { headingStyles } from './heading.styles';

const defaultProps: Partial<HeadingProps> = {
  as: 'h1',
  color: 'foreground',
  size: '6',
  tracking: 'tight',
  weight: 'bold',
};

/** This component is based on the `h1` element. */
export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => {
  const { asChild, as, color, size, tracking, weight, className, children, ...others } = applayComponentDefaultProps(
    defaultProps,
    props
  );

  const Tag = as ?? 'h1';

  return (
    <Slot ref={ref} className={twMerge(headingStyles({ color, size, tracking, weight }), className)} {...others}>
      {asChild ? children : <Tag>{children}</Tag>}
    </Slot>
  );
});

Heading.displayName = 'Heading';
