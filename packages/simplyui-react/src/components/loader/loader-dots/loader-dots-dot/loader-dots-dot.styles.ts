import { cva } from 'class-variance-authority';

export const loaderDotsDotStyles = cva([
  'h-[calc(var(--loader-size)/3-var(--loader-size)/15)]',
  'w-[calc(var(--loader-size)/3-var(--loader-size)/15)]',
  'rounded-full',
  'bg-current',
  'motion-reduce:animate-[loader-dots_var(--loader-reduce-animation-duration)_linear_infinite]',
  'motion-safe:animate-[loader-dots_var(--loader-safe-animation-duration)_linear_infinite]',
  '[&:nth-child(2)]:[animation-delay:400ms]',
]);
