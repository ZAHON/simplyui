import type { LoaderDotsDotProps } from './loader-dots-dot.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { loaderDotsDotStyles } from './loader-dots-dot.styles';

export const LoaderDotsDot = forwardRef<HTMLSpanElement, LoaderDotsDotProps>((props, ref) => {
  const { className, ...others } = props;

  return <span ref={ref} className={twMerge(loaderDotsDotStyles(), className)} {...others} />;
});

LoaderDotsDot.displayName = 'Loader.DotsDot';
