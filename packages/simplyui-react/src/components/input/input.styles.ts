import { cva } from 'class-variance-authority';

export const inputStyles = cva(
  [
    'appearance-none',
    'w-full',
    'border',
    'text-default-12',
    'placeholder:text-default-10',

    'motion-safe:transition',
    'motion-safe:duration-100',

    'focus:outline',
    'focus:outline-2',
    'focus:outline-offset-[-1px]',
    'focus:outline-focus',

    'data-[disabled]:opacity-60',
    'data-[disabled]:cursor-not-allowed',

    'data-[invalid]:text-danger-11',
    'data-[invalid]:placeholder:text-danger-11',
    'data-[invalid]:border-danger-7',
    'data-[invalid]:outline-danger-8',
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
        '1': ['h-6', 'px-1', 'text-xs'],
        '2': ['h-8', 'px-2', 'text-sm'],
        '3': ['h-10', 'px-2.5', 'text-base'],
        '4': ['h-12', 'px-3', 'text-lg'],
      },
      variant: {
        default: ['bg-surface', 'border-default-7'],
        filled: ['bg-default-3', 'border-default-3'],
      },
    },
  }
);
