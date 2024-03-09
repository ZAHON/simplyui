import { cva } from 'class-variance-authority';

export const segmentedControlItemStyles = cva(
  [
    'relative',
    'z-10',
    'grow',
    'h-full',
    'flex',
    'justify-center',
    'items-center',
    'select-none',
    'cursor-default',
    'text-default-11',

    'motion-safe:transition',
    'motion-safe:duration-100',

    '[&:not([data-disabled],[data-state="checked"])]:hover:text-default-12',

    'data-[disabled]:opacity-60',
    'data-[disabled]:cursor-not-allowed',

    'focus-visible:outline',
    'focus-visible:outline-2',
    'focus-visible:outline-offset-0',
    'focus-visible:outline-focus',
  ],
  {
    variants: {
      color: {
        default: ['data-[state=checked]:text-default-12'],
        primary: ['data-[state=checked]:text-primary-9-contrast'],
        success: ['data-[state=checked]:text-success-9-contrast'],
        warning: ['data-[state=checked]:text-warning-9-contrast'],
        danger: ['data-[state=checked]:text-danger-9-contrast'],
      },
      radius: {
        none: ['rounded-none'],
        sm: ['rounded-sm'],
        md: ['rounded-[calc(0.25rem-0.125rem)]'],
        lg: ['rounded-[calc(0.375rem-0.125rem)]'],
        xl: ['rounded-[calc(0.5rem-0.125rem)]'],
        full: ['rounded-[calc(9999px-0.125rem)]'],
      },
      size: {
        '1': ['px-2', 'gap-x-1', 'text-xs'],
        '2': ['px-3', 'gap-x-2', 'text-sm'],
        '3': ['px-4', 'gap-x-3', 'text-base'],
        '4': ['px-6', 'gap-x-3', 'text-lg'],
      },
    },
  }
);
