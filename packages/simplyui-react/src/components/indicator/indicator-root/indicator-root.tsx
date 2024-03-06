import type { IndicatorRootProps } from './indicator-root.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Primitive } from '@/components/primitive';
import { indicatorRootStyles } from './indicator-root.styles';

export const IndicatorRoot = forwardRef<HTMLDivElement, IndicatorRootProps>((props, ref) => {
  const { className, children, ...others } = props;

  return (
    <Primitive.div ref={ref} className={twMerge(indicatorRootStyles(), className)} {...others}>
      {children}
    </Primitive.div>
  );
});

IndicatorRoot.displayName = 'IndicatorRoot';
