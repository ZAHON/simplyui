import type { LoaderDotsProps, LoaderDotsStyle } from './loader-dots.types';
import { twMerge } from 'tailwind-merge';
import { loaderDotsStyles, loaderDotsDotStyles } from './loader-dots.styles';

export function LoaderDots(props: LoaderDotsProps) {
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

  const loaderStyle: LoaderDotsStyle = {
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
      className={twMerge(loaderDotsStyles({ size, color }), className)}
      {...others}
    >
      <div className={loaderDotsDotStyles()} />
      <div className={loaderDotsDotStyles()} />
      <div className={loaderDotsDotStyles()} />
      <span className="sr-only">{label}</span>
    </div>
  );
}
