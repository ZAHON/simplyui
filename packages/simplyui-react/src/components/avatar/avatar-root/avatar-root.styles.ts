import { cva } from 'class-variance-authority';

export const avatarRootStyles = cva(
  ['inline-flex', 'justify-center', 'items-center', 'align-middle', 'overflow-hidden', 'select-none'],
  {
    variants: {
      size: {
        sm: ['size-6', 'text-xs'],
        md: ['size-8', 'text-sm'],
        lg: ['size-10', 'text-base'],
        xl: ['size-12', 'text-lg'],
      },
      radius: {
        none: ['rounded-none'],
        sm: ['rounded-sm'],
        md: ['rounded'],
        lg: ['rounded-md'],
        xl: ['rounded-lg'],
        full: ['rounded-full'],
      },
      variant: {
        filled: [''],
        light: [''],
        outline: ['bg-transparent', 'border'],
        transparent: [''],
      },
      color: {
        default: [''],
        primary: [''],
        success: [''],
        warning: [''],
        danger: [''],
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
        className: ['text-default-11', 'border-default-7'],
      },
      {
        color: 'default',
        variant: 'transparent',
        className: ['text-default-11'],
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
        className: ['text-primary-11', 'border-primary-7'],
      },
      {
        color: 'primary',
        variant: 'transparent',
        className: ['text-primary-11'],
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
        className: ['text-success-11', 'border-success-7'],
      },
      {
        color: 'success',
        variant: 'transparent',
        className: ['text-success-11'],
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
        className: ['text-warning-11', 'border-warning-7'],
      },
      {
        color: 'warning',
        variant: 'transparent',
        className: ['text-warning-11'],
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
        className: ['text-danger-11', 'border-danger-7'],
      },
      {
        color: 'danger',
        variant: 'transparent',
        className: ['text-danger-11'],
      },
    ],
  }
);
