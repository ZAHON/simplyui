import { cva } from 'class-variance-authority';

export const avatarRootStyles = cva(
  ['inline-flex', 'justify-center', 'items-center', 'align-middle', 'overflow-hidden', 'select-none'],
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
        '1': ['size-6', 'text-xs'],
        '2': ['size-8', 'text-sm'],
        '3': ['size-10', 'text-base'],
        '4': ['size-12', 'text-lg'],
        '5': ['size-16', 'text-2xl'],
        '6': ['size-20', 'text-3xl'],
        '7': ['size-24', 'text-3xl'],
        '8': ['size-32', 'text-4xl'],
        '9': ['size-40', 'text-6xl'],
      },
      variant: {
        filled: [''],
        light: [''],
        outline: ['bg-transparent', 'ring-1'],
        transparent: ['bg-transparent'],
        'light-outline': ['ring-1'],
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
        variant: 'transparent',
        className: ['text-default-11'],
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
        variant: 'transparent',
        className: ['text-primary-11'],
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
        variant: 'transparent',
        className: ['text-success-11'],
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
        variant: 'transparent',
        className: ['text-warning-11'],
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
        variant: 'transparent',
        className: ['text-danger-11'],
      },
      {
        color: 'danger',
        variant: 'light-outline',
        className: ['text-danger-11', 'bg-danger-3', 'ring-danger-7'],
      },
    ],
  }
);
