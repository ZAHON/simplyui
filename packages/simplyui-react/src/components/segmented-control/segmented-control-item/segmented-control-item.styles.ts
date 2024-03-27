import { cva } from 'class-variance-authority';

export const segmentedControlItemStyles = cva(
  [
    'group',
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

    'motion-safe:transition-colors',
    'motion-safe:duration-100',

    'data-[state=checked]:text-default-12',

    '[&:not([data-disabled],[data-state="checked"])]:hover:text-default-12',

    'data-[disabled]:opacity-60',
    'data-[disabled]:cursor-not-allowed',

    'focus-visible:outline',
    'focus-visible:outline-2',
    'focus-visible:outline-offset-[-1px]',
    'focus-visible:outline-focus',
  ],
  {
    variants: {
      radius: {
        none: ['rounded-none'],
        sm: ['rounded-sm'],
        md: ['rounded'],
        lg: ['rounded-md'],
        xl: ['rounded-lg'],
        full: ['rounded-full'],
      },
      size: {
        '1': ['px-2', 'text-xs'],
        '2': ['px-3', 'text-sm'],
        '3': ['px-4', 'text-base'],
        '4': ['px-6', 'text-lg'],
      },
      withSeparator: {
        true: [
          'first-of-type:before:bg-transparent',

          'before:content-[""]',
          'before:absolute',
          'before:inset-y-1',
          'before:left-0',
          'before:w-px',
          'before:bg-default-6',

          'before:motion-safe:transition-opacity',
          'before:motion-safe:duration-100',

          'data-[state=checked]:before:opacity-0',
          '[&[data-state="checked"]+button]:before:opacity-0',
        ],
      },
    },
  }
);
