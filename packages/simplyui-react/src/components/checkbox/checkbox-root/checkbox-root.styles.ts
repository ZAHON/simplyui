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

    'aria-[invalid=true]:data-[state=unchecked]:border-danger-7',
    'aria-[invalid=true]:data-[state=unchecked]:outline-danger-8',
  ],
  {
    variants: {
      variant: {
        default: ['bg-surface', 'border-default-7'],
        filled: ['bg-default-3', 'border-default-3'],
      },
      size: {
        sm: ['size-[0.875rem]'],
        md: ['size-4'],
        lg: ['size-5'],
        xl: ['size-6'],
      },
      radius: {
        none: ['rounded-none'],
        sm: ['rounded-sm'],
        md: ['rounded'],
        lg: ['rounded-md'],
        xl: ['rounded-lg'],
        full: ['rounded-full'],
      },
      color: {
        default: ['text-white', 'data-[state=checked]:bg-default-9', 'data-[state=checked]:border-default-9'],
        primary: ['text-white', 'data-[state=checked]:bg-primary-9', 'data-[state=checked]:border-primary-9'],
        success: ['text-white', 'data-[state=checked]:bg-success-9', 'data-[state=checked]:border-success-9'],
        warning: ['text-black', 'data-[state=checked]:bg-warning-9', 'data-[state=checked]:border-warning-9'],
        danger: ['text-white', 'data-[state=checked]:bg-danger-9', 'data-[state=checked]:border-danger-9'],
      },
    },
  }
);
