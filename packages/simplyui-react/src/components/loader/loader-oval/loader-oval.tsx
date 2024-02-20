import type { LoaderOvalProps, LoaderOvalStyle } from './loader-oval.types';
import { twMerge } from 'tailwind-merge';
import { loaderOvalStyles } from './loader-oval.styles';

export function LoaderOval(props: LoaderOvalProps) {
  const {
    ref,
    size,
    loaderSize,
    color,
    speedSafe,
    speedReduce,
    label,
    style,
    className,
    ...others
  } = props;

  const loaderStyle: LoaderOvalStyle = {
    '--loader-size': loaderSize,
    '--loader-safe-animation-duration': `${speedSafe}ms`,
    '--loader-reduce-animation-duration': `${speedReduce}ms`,
    ...style,
  };

  return (
    <div
      ref={ref}
      role="status"
      style={loaderStyle}
      className={twMerge(loaderOvalStyles({ size, color }), className)}
      {...others}
    >
      <span className="sr-only">{label}</span>
    </div>
  );
}
