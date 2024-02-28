import { cva } from 'class-variance-authority';

export const menuItemStyles = cva(
  [
    'flex',
    'justify-start',
    'items-center',
    'outline-none',
    'whitespace-nowrap',
    'select-none',
    'overflow-hidden',
    'bg-transparent',

    'motion-safe:transition',
    'motion-safe:duration-100',

    'active:brightness-110',

    'data-[disabled]:opacity-60',
    'data-[disabled]:cursor-not-allowed',
  ],
  {
    variants: {
      color: {
        primary: [
          'text-foreground',
          'data-[highlighted]:text-white',
          'data-[highlighted]:bg-primary-9',
          'data-[highlighted]:active:bg-primary-9',
        ],
        danger: [
          'text-danger-11',
          'data-[highlighted]:text-white',
          'data-[highlighted]:bg-danger-9',
          'data-[highlighted]:active:bg-danger-9',
        ],
      },
      radius: {
        none: ['rounded-none'],
        sm: ['rounded-sm'],
        md: ['rounded'],
        lg: ['rounded-md'],
        xl: ['rounded-lg'],
        full: ['rounded-lg'],
      },
      size: {
        sm: ['h-6', 'gap-x-1', 'px-2', 'text-xs'],
        md: ['h-8', 'gap-x-2', 'px-3', 'text-sm'],
      },
    },
  }
);
