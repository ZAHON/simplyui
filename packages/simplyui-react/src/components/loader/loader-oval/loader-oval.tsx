import type { LoaderOvalProps, LoaderOvalStyle } from './loader-oval.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { loaderOvalStyles } from './loader-oval.styles';

export const LoaderOval = forwardRef<HTMLSpanElement, LoaderOvalProps>((props, ref) => {
  const { color, label, loaderSize, size, speedReduce, speedSafe, style, className, ...others } = props;

  const loaderStyle: LoaderOvalStyle = {
    '--loader-size': loaderSize,
    '--loader-reduce-animation-duration': `${speedReduce}ms`,
    '--loader-safe-animation-duration': `${speedSafe}ms`,
    ...style,
  };

  return (
    <span
      ref={ref}
      role="status"
      style={loaderStyle}
      className={twMerge(loaderOvalStyles({ size, color }), className)}
      {...others}
    >
      <span className="sr-only">{label}</span>
    </span>
  );
});

LoaderOval.displayName = 'Loader.Oval';
