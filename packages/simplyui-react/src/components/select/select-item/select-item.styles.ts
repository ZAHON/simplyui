import { cva } from 'class-variance-authority';

export const selectItemStyles = cva(
  [
    'flex',
    'justify-between',
    'items-center',
    'outline-none',
    'whitespace-nowrap',
    'select-none',
    'overflow-hidden',
    'text-default-12',
    'bg-transparent',

    'motion-safe:transition',
    'motion-safe:duration-100',

    'data-[disabled]:opacity-60',
    'data-[disabled]:cursor-not-allowed',
  ],
  {
    variants: {
      color: {
        default: [''],
        primary: [''],
        success: [''],
        warning: [''],
        danger: [''],
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
      variant: {
        filled: ['data-[highlighted]:active:brightness-110'],
        light: [''],
      },
    },
    compoundVariants: [
      // color default
      {
        color: 'default',
        variant: 'filled',
        className: [
          'data-[highlighted]:text-default-9-contrast',
          'data-[highlighted]:bg-default-9',
          'data-[highlighted]:active:bg-default-10',
        ],
      },
      {
        color: 'default',
        variant: 'light',
        className: [
          'data-[highlighted]:text-default-12',
          'data-[highlighted]:bg-default-3',
          'data-[highlighted]:active:bg-default-5',
        ],
      },

      // color primary
      {
        color: 'primary',
        variant: 'filled',
        className: [
          'data-[highlighted]:text-primary-9-contrast',
          'data-[highlighted]:bg-primary-9',
          'data-[highlighted]:active:bg-primary-10',
        ],
      },
      {
        color: 'primary',
        variant: 'light',
        className: [
          'data-[highlighted]:text-primary-12',
          'data-[highlighted]:bg-primary-3',
          'data-[highlighted]:active:bg-primary-5',
        ],
      },

      // color success
      {
        color: 'success',
        variant: 'filled',
        className: [
          'data-[highlighted]:text-success-9-contrast',
          'data-[highlighted]:bg-success-9',
          'data-[highlighted]:active:bg-success-10',
        ],
      },
      {
        color: 'success',
        variant: 'light',
        className: [
          'data-[highlighted]:text-success-12',
          'data-[highlighted]:bg-success-3',
          'data-[highlighted]:active:bg-success-5',
        ],
      },

      // color warning
      {
        color: 'warning',
        variant: 'filled',
        className: [
          'data-[highlighted]:text-warning-9-contrast',
          'data-[highlighted]:bg-warning-9',
          'data-[highlighted]:active:bg-warning-10',
        ],
      },
      {
        color: 'warning',
        variant: 'light',
        className: [
          'data-[highlighted]:text-warning-12',
          'data-[highlighted]:bg-warning-3',
          'data-[highlighted]:active:bg-warning-5',
        ],
      },

      // color danger
      {
        color: 'danger',
        variant: 'filled',
        className: [
          'data-[highlighted]:text-danger-9-contrast',
          'data-[highlighted]:bg-danger-9',
          'data-[highlighted]:active:bg-danger-10',
        ],
      },
      {
        color: 'danger',
        variant: 'light',
        className: [
          'data-[highlighted]:text-danger-12',
          'data-[highlighted]:bg-danger-3',
          'data-[highlighted]:active:bg-danger-5',
        ],
      },
    ],
  }
);
