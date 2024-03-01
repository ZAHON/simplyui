import { cva } from 'class-variance-authority';

export const badgeStyles = cva(
  [
    'inline-flex',
    'justify-center',
    'items-center',
    'shrink-0',
    'whitespace-nowrap',
    'select-none',
    'cursor-default',
    'font-medium',
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
        full: ['rounded-full'],
      },
      size: {
        sm: ['py-0.5', 'px-2', 'gap-x-1', 'text-xs'],
        md: ['py-1', 'px-3', 'gap-x-1.5', 'text-sm'],
        lg: ['py-1.5', 'px-4', 'gap-x-2', 'text-base'],
        xl: ['py-2', 'px-5', 'gap-x-2.5', 'text-lg'],
      },
      variant: {
        filled: [''],
        light: [''],
        outline: ['bg-transparent', 'ring-1', 'ring-inset'],
      },
    },
    compoundVariants: [
      // color default
      {
        color: 'default',
        variant: 'filled',
        className: ['text-white', 'bg-default-9'],
      },
      {
        color: 'default',
        variant: 'light',
        className: ['text-default-11', 'bg-default-3'],
      },
      {
        color: 'default',
        variant: 'outline',
        className: ['text-default-11', 'ring-default-7'],
      },

      // color primary
      {
        color: 'primary',
        variant: 'filled',
        className: ['text-white', 'bg-primary-9'],
      },
      {
        color: 'primary',
        variant: 'light',
        className: ['text-primary-11', 'bg-primary-3'],
      },
      {
        color: 'primary',
        variant: 'outline',
        className: ['text-primary-11', 'ring-primary-7'],
      },

      // color success
      {
        color: 'success',
        variant: 'filled',
        className: ['text-white', 'bg-success-9'],
      },
      {
        color: 'success',
        variant: 'light',
        className: ['text-success-11', 'bg-success-3'],
      },
      {
        color: 'success',
        variant: 'outline',
        className: ['text-success-11', 'ring-success-7'],
      },

      // color warning
      {
        color: 'warning',
        variant: 'filled',
        className: ['text-black', 'bg-warning-9'],
      },
      {
        color: 'warning',
        variant: 'light',
        className: ['text-warning-11', 'bg-warning-3'],
      },
      {
        color: 'warning',
        variant: 'outline',
        className: ['text-warning-11', 'ring-warning-7'],
      },

      // color danger
      {
        color: 'danger',
        variant: 'filled',
        className: ['text-white', 'bg-danger-9'],
      },
      {
        color: 'danger',
        variant: 'light',
        className: ['text-danger-11', 'bg-danger-3'],
      },
      {
        color: 'danger',
        variant: 'outline',
        className: ['text-danger-11', 'ring-danger-7'],
      },
    ],
  }
);
