import { cva } from 'class-variance-authority';

export const checkboxRootStyles = cva(
  [
    'flex',
    'justify-center',
    'items-center',
    'border',
    'cursor-default',

    'motion-safe:transition',
    'motion-safe:duration-100',

    'focus-visible:outline',
    'focus-visible:outline-2',
    'focus-visible:outline-offset-2',
    'focus-visible:outline-focus',

    'data-[disabled]:opacity-60',
    'data-[disabled]:cursor-not-allowed',

    'enabled:hover:data-[state=unchecked]:bg-default-4',
    'enabled:active:data-[state=unchecked]:bg-default-5',

    'enabled:active:data-[state=checked]:brightness-110',

    'data-[invalid]:data-[state=unchecked]:border-danger-7',
    'data-[invalid]:data-[state=unchecked]:outline-danger-8',
  ],
  {
    variants: {
      color: {
        default: [
          'text-default-9-contrast',

          'data-[state=checked]:bg-default-9',
          'data-[state=checked]:border-default-9',

          'enabled:hover:data-[state=checked]:bg-default-10',
          'enabled:hover:data-[state=checked]:border-default-10',
        ],
        primary: [
          'text-primary-9-contrast',

          'data-[state=checked]:bg-primary-9',
          'data-[state=checked]:border-primary-9',

          'enabled:hover:data-[state=checked]:bg-primary-10',
          'enabled:hover:data-[state=checked]:border-primary-10',
        ],
        success: [
          'text-success-9-contrast',

          'data-[state=checked]:bg-success-9',
          'data-[state=checked]:border-success-9',

          'enabled:hover:data-[state=checked]:bg-success-10',
          'enabled:hover:data-[state=checked]:border-success-10',
        ],
        warning: [
          'text-warning-9-contrast',

          'data-[state=checked]:bg-warning-9',
          'data-[state=checked]:border-warning-9',

          'enabled:hover:data-[state=checked]:bg-warning-10',
          'enabled:hover:data-[state=checked]:border-warning-10',
        ],
        danger: [
          'text-danger-9-contrast',

          'data-[state=checked]:bg-danger-9',
          'data-[state=checked]:border-danger-9',

          'enabled:hover:data-[state=checked]:bg-danger-10',
          'enabled:hover:data-[state=checked]:border-danger-10',
        ],
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
        '1': ['size-[0.875rem]'],
        '2': ['size-4'],
        '3': ['size-5'],
        '4': ['size-6'],
      },
      variant: {
        default: ['bg-default-3', 'border-default-7'],
        filled: [
          'bg-default-3',
          'border-default-3',

          'enabled:hover:data-[state=unchecked]:border-default-4',
          'enabled:active:data-[state=unchecked]:border-default-5',
        ],
      },
    },
  }
);
