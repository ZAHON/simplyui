import { cva } from 'class-variance-authority';

export const loaderDotsStyles = cva(
  [
    'h-[var(--loader-size)]',
    'w-[var(--loader-size)]',
    'relative',
    'inline-flex',
    'justify-center',
    'items-center',
    'gap-x-[calc(var(--loader-size)/10)]',
    'select-none',
  ],
  {
    variants: {
      size: {
        sm: ['[--loader-size:1rem]'],
        md: ['[--loader-size:1.25rem]'],
        lg: ['[--loader-size:1.5rem]'],
        xl: ['[--loader-size:1.75rem]'],
      },
      color: {
        default: ['text-default-9'],
        primary: ['text-primary-9'],
        success: ['text-success-9'],
        warning: ['text-warning-9'],
        danger: ['text-danger-9'],
        currentColor: ['text-current'],
      },
    },
  }
);

export const loaderDotsDotStyles = cva([
  'h-[calc(var(--loader-size)/3-var(--loader-size)/15)]',
  'w-[calc(var(--loader-size)/3-var(--loader-size)/15)]',
  'rounded-full',
  'bg-current',
  'motion-safe:animate-[loader-dots-animation_var(--loader-safe-animation-duration)_linear_infinite]',
  'motion-reduce:animate-[loader-dots-animation_var(--loader-reduce-animation-duration)_linear_infinite]',
  '[&:nth-child(2)]:[animation-delay:400ms]',
]);
