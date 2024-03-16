import { cva } from 'class-variance-authority';

export const selectTriggerStyles = cva(
  [
    'w-full',
    'inline-flex',
    'justify-between',
    'items-center',
    'border',
    'cursor-default',
    'text-default-12',
    'data-[placeholder]:text-default-10',

    'motion-safe:transition',
    'motion-safe:duration-100',

    'disabled:opacity-60',
    'disabled:cursor-not-allowed',

    'data-[invalid]:border-danger-7',
    'data-[invalid]:focus:outline-danger-8',
    'data-[invalid]:text-danger-11',
    'data-[invalid]:data-[placeholder]:text-danger-10',

    'focus:outline',
    'focus:outline-2',
    'focus:outline-offset-[-1px]',
    'focus:outline-focus',
  ],
  {
    variants: {
      radius: {
        none: ['rounded-none'],
        sm: ['rounded-sm'],
        md: ['rounded'],
        lg: ['rounded-md'],
        xl: ['rounded-lg'],
        full: ['rounded-full'],
      },
      size: {
        '1': ['h-6', 'px-1', 'gap-x-0.5', 'text-xs'],
        '2': ['h-8', 'px-2', 'gap-x-1', 'text-sm'],
        '3': ['h-10', 'px-2.5', 'gap-x-[0.3125rem]', 'text-base'],
        '4': ['h-12', 'px-3', 'gap-x-1.5', 'text-lg'],
      },
      variant: {
        default: ['bg-surface', 'border-default-7', '[&:not([data-invalid])]:enabled:hover:border-default-8'],
        filled: [
          'bg-default-3',
          'border-default-3',

          '[&:not([data-invalid])]:enabled:hover:bg-default-4',
          '[&:not([data-invalid])]:enabled:hover:border-default-4',

          '[&:not([data-invalid])]:enabled:active:bg-default-5',
          '[&:not([data-invalid])]:enabled:active:border-default-5',
        ],
      },
    },
  }
);
