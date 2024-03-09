import { cva } from 'class-variance-authority';

export const textFieldButtonStyles = cva(
  [
    'size-3/4',
    'inline-flex',
    'justify-center',
    'items-center',
    'font-medium',
    'whitespace-nowrap',
    'select-none',
    'overflow-hidden',
    'cursor-default',
    'text-default-11',

    'motion-safe:transition',
    'motion-safe:duration-100',

    'enabled:hover:bg-default-4',
    'enabled:active:bg-default-5',

    'focus-visible:outline',
    'focus-visible:outline-2',
    'focus-visible:outline-focus',

    'data-[disabled]:cursor-not-allowed',

    'data-[invalid]:text-danger-11',
    'data-[invalid]:focus-visible:outline-danger-8',
    'data-[invalid]:enabled:hover:bg-danger-3',
    'data-[invalid]:enabled:active:bg-danger-4',
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
    },
  }
);
