import type { IndicatorRootProps } from './indicator-root.types';
import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { twMerge } from 'tailwind-merge';
import { indicatorRootStyles } from './indicator-root.styles';

export const IndicatorRoot = forwardRef<HTMLDivElement, IndicatorRootProps>((props, ref) => {
  const { asChild, className, children, ...others } = props;

  const Component = asChild ? Slot : 'div';

  return (
    <Component ref={ref} className={twMerge(indicatorRootStyles(), className)} {...others}>
      {children}
    </Component>
  );
});

IndicatorRoot.displayName = 'IndicatorRoot';
