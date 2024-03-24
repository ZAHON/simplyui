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
          'data-[highlighted]:text-primary-9-contrast',
          'data-[highlighted]:bg-primary-9',
          'data-[highlighted]:active:bg-primary-9',
        ],
        danger: [
          'text-danger-11',
          'data-[highlighted]:text-danger-9-contrast',
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
        full: ['rounded-xl'],
      },
      size: {
        '1': ['h-6', 'gap-x-[0.1875rem]', 'px-1.5', 'text-xs'],
        '2': ['h-8', 'gap-x-1', 'px-2', 'text-sm'],
        '3': ['h-10', 'gap-x-[0.3125rem]', 'px-2.5', 'text-base'],
        '4': ['h-12', 'gap-x-1.5', 'px-3', 'text-lg'],
      },
    },
  }
);
