import { cva } from 'class-variance-authority';

export const loaderOvalStyles = cva(
  [
    'h-[var(--loader-size)]',
    'w-[var(--loader-size)]',
    'select-none',
    'relative',
    'inline-flex',
    'justify-center',
    'items-center',
    'rounded-full',
    'bg-transparent',

    'before:content-[""]',
    'before:absolute',
    'before:top-0',
    'before:h-full',
    'before:w-full',
    'before:rounded-full',
    'before:border-[length:calc(var(--loader-size)/7)]',
    'before:border-transparent',
    'before:border-b-current',
    'before:motion-safe:animate-[spin_var(--loader-safe-animation-duration)_linear_infinite]',
    'before:motion-reduce:animate-[spin_var(--loader-reduce-animation-duration)_linear_infinite]',

    'after:content-[""]',
    'after:absolute',
    'after:top-0',
    'after:h-full',
    'after:w-full',
    'after:rounded-full',
    'after:opacity-50',
    'after:border-[length:calc(var(--loader-size)/7)]',
    'after:border-current',
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
