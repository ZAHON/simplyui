import type { LoaderDotsProps, LoaderDotsStyle } from './loader-dots.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { LoaderDotsDot } from './loader-dots-dot';
import { loaderDotsStyles } from './loader-dots.styles';

export const LoaderDots = forwardRef<HTMLDivElement, LoaderDotsProps>((props, ref) => {
  const { color, label, loaderSize, size, speedReduce, speedSafe, style, className, ...others } = props;

  const loaderStyle: LoaderDotsStyle = {
    '--loader-size': loaderSize,
    '--loader-reduce-animation-duration': `${speedReduce}ms`,
    '--loader-safe-animation-duration': `${speedSafe}ms`,
    ...style,
  };

  return (
    <div
      ref={ref}
      role="status"
      style={loaderStyle}
      className={twMerge(loaderDotsStyles({ size, color }), className)}
      {...others}
    >
      <LoaderDotsDot />
      <LoaderDotsDot />
      <LoaderDotsDot />
      <span className="sr-only">{label}</span>
    </div>
  );
});

LoaderDots.displayName = 'LoaderDots';
