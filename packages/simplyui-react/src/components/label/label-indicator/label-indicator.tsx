import type { LabelIndicatorProps } from './label-indicator.types';
import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils/applay-component-default-props';
import { labelIndicatorStyles } from './label-indicator.styles';

const defaultProps: Partial<LabelIndicatorProps> = {
  children: ' *',
};

export const LabelIndicator = forwardRef<HTMLSpanElement, LabelIndicatorProps>((props, ref) => {
  const { asChild, className, children, ...others } = applayComponentDefaultProps(defaultProps, props);

  const Component = asChild ? Slot : 'span';

  return (
    <Component ref={ref} aria-hidden="true" className={twMerge(labelIndicatorStyles(), className)} {...others}>
      {children}
    </Component>
  );
});

LabelIndicator.displayName = 'LabelIndicator';
