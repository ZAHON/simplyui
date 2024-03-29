import { cva } from 'class-variance-authority';

export const badgeStyles = cva(
  ['inline-flex', 'justify-center', 'items-center', 'shrink-0', 'whitespace-nowrap', 'font-medium'],
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
        '1': ['h-5', 'py-0.5', 'px-1.5', 'gap-x-1.5', 'text-xs'],
        '2': ['h-6', 'py-1', 'px-2', 'gap-x-1.5', 'text-sm'],
        '3': ['h-7', 'py-1', 'px-2.5', 'gap-x-2', 'text-base'],
        '4': ['h-8', 'py-1', 'px-3', 'gap-x-2', 'text-lg'],
      },
      variant: {
        filled: [''],
        light: [''],
        outline: ['bg-transparent', 'ring-1', 'ring-inset'],
        'light-outline': ['ring-1', 'ring-inset'],
      },
    },
    compoundVariants: [
      // color default
      {
        color: 'default',
        variant: 'filled',
        className: ['text-default-9-contrast', 'bg-default-9'],
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
      {
        color: 'default',
        variant: 'light-outline',
        className: ['text-default-11', 'bg-default-3', 'ring-default-7'],
      },

      // color primary
      {
        color: 'primary',
        variant: 'filled',
        className: ['text-primary-9-contrast', 'bg-primary-9'],
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
      {
        color: 'primary',
        variant: 'light-outline',
        className: ['text-primary-11', 'bg-primary-3', 'ring-primary-7'],
      },

      // color success
      {
        color: 'success',
        variant: 'filled',
        className: ['text-success-9-contrast', 'bg-success-9'],
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
      {
        color: 'success',
        variant: 'light-outline',
        className: ['text-success-11', 'bg-success-3', 'ring-success-7'],
      },

      // color warning
      {
        color: 'warning',
        variant: 'filled',
        className: ['text-warning-9-contrast', 'bg-warning-9'],
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
      {
        color: 'warning',
        variant: 'light-outline',
        className: ['text-warning-11', 'bg-warning-3', 'ring-warning-7'],
      },

      // color danger
      {
        color: 'danger',
        variant: 'filled',
        className: ['text-danger-9-contrast', 'bg-danger-9'],
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
      {
        color: 'danger',
        variant: 'light-outline',
        className: ['text-danger-11', 'bg-danger-3', 'ring-danger-7'],
      },
    ],
  }
);
