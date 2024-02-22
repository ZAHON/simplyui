import { cva } from 'class-variance-authority';

export const buttonRootStyles = cva(
  [
    'relative',
    'inline-flex',
    'justify-center',
    'items-center',
    'font-medium',
    'whitespace-nowrap',
    'select-none',
    'overflow-hidden',
    'origin-center',

    'motion-safe:transition',
    'motion-safe:duration-100',

    'focus-visible:outline',
    'focus-visible:outline-2',
    'focus-visible:outline-offset-2',
    'focus-visible:outline-focus',

    'disabled:opacity-60',
    'disabled:cursor-not-allowed',
  ],
  {
    variants: {
      size: {
        sm: ['h-6', 'px-2', 'text-xs'],
        md: ['h-8', 'px-3', 'text-sm'],
        lg: ['h-10', 'px-4', 'text-base'],
        xl: ['h-12', 'px-6', 'text-lg'],
      },
      radius: {
        none: ['rounded-none'],
        sm: ['rounded-sm'],
        md: ['rounded'],
        lg: ['rounded-md'],
        xl: ['rounded-lg'],
        full: ['rounded-full'],
      },
      fullWidth: {
        true: ['w-full'],
      },
      color: {
        default: [''],
        primary: [''],
        success: [''],
        warning: [''],
        danger: [''],
      },
      variant: {
        filled: ['enabled:active:brightness-110'],
        light: [''],
        outline: ['bg-transparent', 'border'],
        subtle: ['bg-transparent'],
      },
    },
    compoundVariants: [
      // color default
      {
        color: 'default',
        variant: 'filled',
        className: ['text-white', 'bg-default-9', 'enabled:hover:bg-default-10', 'enabled:active:bg-default-10'],
      },
      {
        color: 'default',
        variant: 'light',
        className: ['text-default-11', 'bg-default-3', 'enabled:hover:bg-default-4', 'enabled:active:bg-default-5'],
      },
      {
        color: 'default',
        variant: 'outline',
        className: [
          'text-default-11',
          'border-default-7',
          'enabled:hover:bg-default-3',
          'enabled:hover:border-default-8',
          'enabled:active:bg-default-4',
        ],
      },
      {
        color: 'default',
        variant: 'subtle',
        className: ['text-default-11', 'enabled:hover:bg-default-3', 'enabled:active:bg-default-4'],
      },

      // color primary
      {
        color: 'primary',
        variant: 'filled',
        className: ['text-white', 'bg-primary-9', 'enabled:hover:bg-primary-10', 'enabled:active:bg-primary-10'],
      },
      {
        color: 'primary',
        variant: 'light',
        className: ['text-primary-11', 'bg-primary-3', 'enabled:hover:bg-primary-4', 'enabled:active:bg-primary-5'],
      },
      {
        color: 'primary',
        variant: 'outline',
        className: [
          'text-primary-11',
          'border-primary-7',
          'enabled:hover:bg-primary-3',
          'enabled:hover:border-primary-8',
          'enabled:active:bg-primary-4',
        ],
      },
      {
        color: 'primary',
        variant: 'subtle',
        className: ['text-primary-11', 'enabled:hover:bg-primary-3', 'enabled:active:bg-primary-4'],
      },

      // color success
      {
        color: 'success',
        variant: 'filled',
        className: ['text-white', 'bg-success-9', 'enabled:hover:bg-success-10', 'enabled:active:bg-success-10'],
      },
      {
        color: 'success',
        variant: 'light',
        className: ['text-success-11', 'bg-success-3', 'enabled:hover:bg-success-4', 'enabled:active:bg-success-5'],
      },
      {
        color: 'success',
        variant: 'outline',
        className: [
          'text-success-11',
          'border-success-7',
          'enabled:hover:bg-success-3',
          'enabled:hover:border-success-8',
          'enabled:active:bg-success-4',
        ],
      },
      {
        color: 'success',
        variant: 'subtle',
        className: ['text-success-11', 'enabled:hover:bg-success-3', 'enabled:active:bg-success-4'],
      },

      // color warning
      {
        color: 'warning',
        variant: 'filled',
        className: ['text-black', 'bg-warning-9', 'enabled:hover:bg-warning-10', 'enabled:active:bg-warning-10'],
      },
      {
        color: 'warning',
        variant: 'light',
        className: ['text-warning-11', 'bg-warning-3', 'enabled:hover:bg-warning-4', 'enabled:active:bg-warning-5'],
      },
      {
        color: 'warning',
        variant: 'outline',
        className: [
          'text-warning-11',
          'border-warning-7',
          'enabled:hover:bg-warning-3',
          'enabled:hover:border-warning-8',
          'enabled:active:bg-warning-4',
        ],
      },
      {
        color: 'warning',
        variant: 'subtle',
        className: ['text-warning-11', 'enabled:hover:bg-warning-3', 'enabled:active:bg-warning-4'],
      },

      // color danger
      {
        color: 'danger',
        variant: 'filled',
        className: ['text-white', 'bg-danger-9', 'enabled:hover:bg-danger-10', 'enabled:active:bg-danger-10'],
      },
      {
        color: 'danger',
        variant: 'light',
        className: ['text-danger-11', 'bg-danger-3', 'enabled:hover:bg-danger-4', 'enabled:active:bg-danger-5'],
      },
      {
        color: 'danger',
        variant: 'outline',
        className: [
          'text-danger-11',
          'border-danger-7',
          'enabled:hover:bg-danger-3',
          'enabled:hover:border-danger-8',
          'enabled:active:bg-danger-4',
        ],
      },
      {
        color: 'danger',
        variant: 'subtle',
        className: ['text-danger-11', 'enabled:hover:bg-danger-3', 'enabled:active:bg-danger-4'],
      },
    ],
  }
);
