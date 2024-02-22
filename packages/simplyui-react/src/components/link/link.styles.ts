import { cva } from 'class-variance-authority';

export const linkStyles = cva(
  [
    'inline-flex',
    'items-center',
    'gap-x-1',
    'underline-offset-2',

    'motion-safe:transition',
    'motion-safe:duration-100',

    'focus-visible:outline',
    'focus-visible:outline-2',
    'focus-visible:outline-offset-2',
    'focus-visible:outline-focus',

    'data-[disabled]:opacity-60',
    'data-[disabled]:pointer-events-none',
    // 'data-[disabled]',
  ],
  {
    variants: {
      color: {
        default: ['text-default-12', 'decoration-default-6'],
        primary: ['text-primary-11', 'decoration-primary-6'],
        success: ['text-success-11', 'decoration-success-6'],
        warning: ['text-warning-11', 'decoration-warning-6'],
        danger: ['text-danger-11', 'decoration-danger-6'],
      },
      size: {
        sm: ['text-xs'],
        md: ['text-sm'],
        lg: ['text-base'],
        xl: ['text-lg'],
      },
      underline: {
        active: ['active:underline'],
        always: ['underline'],
        focus: ['focus:underline'],
        hover: ['hover:underline'],
        none: [''],
      },
    },
  }
);
