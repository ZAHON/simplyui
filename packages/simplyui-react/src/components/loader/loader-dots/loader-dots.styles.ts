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
      color: {
        default: ['text-default-9'],
        primary: ['text-primary-9'],
        success: ['text-success-9'],
        warning: ['text-warning-9'],
        danger: ['text-danger-9'],
        currentColor: ['text-current'],
      },
      size: {
        '1': ['[--loader-size:1rem]'],
        '2': ['[--loader-size:1.25rem]'],
        '3': ['[--loader-size:1.5rem]'],
        '4': ['[--loader-size:1.75rem]'],
      },
    },
  }
);
