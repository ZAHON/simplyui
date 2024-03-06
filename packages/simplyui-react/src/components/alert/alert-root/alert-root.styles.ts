import { cva } from 'class-variance-authority';

export const alertRootStyles = cva(['flex'], {
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
      full: ['rounded-2xl'],
    },
    size: {
      '1': ['p-3', 'gap-x-2'],
      '2': ['p-4', 'gap-x-2.5'],
      '3': ['p-6', 'gap-x-3'],
      '4': ['p-8', 'gap-x-3.5'],
    },
    variant: {
      filled: [''],
      light: [''],
      outline: ['bg-transparent', 'border'],
      'light-outline': ['border'],
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
      className: ['text-default-11', 'border-default-7'],
    },
    {
      color: 'default',
      variant: 'light-outline',
      className: ['text-default-11', 'bg-default-3', 'border-default-7'],
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
      className: ['text-primary-11', 'border-primary-7'],
    },
    {
      color: 'primary',
      variant: 'light-outline',
      className: ['text-primary-11', 'bg-primary-3', 'border-primary-7'],
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
      className: ['text-success-11', 'border-success-7'],
    },
    {
      color: 'success',
      variant: 'light-outline',
      className: ['text-success-11', 'bg-success-3', 'border-success-7'],
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
      className: ['text-warning-11', 'border-warning-7'],
    },
    {
      color: 'warning',
      variant: 'light-outline',
      className: ['text-warning-11', 'bg-warning-3', 'border-warning-7'],
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
      className: ['text-danger-11', 'border-danger-7'],
    },
    {
      color: 'danger',
      variant: 'light-outline',
      className: ['text-danger-11', 'bg-danger-3', 'border-danger-7'],
    },
  ],
});
