import { cva } from 'class-variance-authority';

export const burgerRootStyles = cva(
  [
    'inline-flex',
    'justify-center',
    'items-center',
    'select-none',
    'overflow-hidden',
    'origin-center',
    'text-foreground',

    'motion-safe:transition',
    'motion-safe:duration-100',

    'focus-visible:outline',
    'focus-visible:outline-2',
    'focus-visible:outline-offset-2',
    'focus-visible:outline-focus',

    'data-[disabled]:opacity-60',
    'data-[disabled]:cursor-not-allowed',
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
        sm: ['size-6'],
        md: ['size-8'],
        lg: ['size-10'],
        xl: ['size-12'],
      },
    },
  }
);
