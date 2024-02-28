import { cva } from 'class-variance-authority';

export const nativeSelectInputStyles = cva(
  [
    'appearance-none',
    'block',
    'w-full',
    'border',
    'text-default-12',

    'motion-safe:transition',
    'motion-safe:duration-100',

    'focus:outline',
    'focus:outline-2',
    'focus:outline-offset-[-1px]',
    'focus:outline-focus',

    'data-[disabled]:opacity-60',
    'data-[disabled]:cursor-not-allowed',

    'data-[invalid]:border-danger-7',
    'data-[invalid]:text-danger-11',
    'data-[invalid]:focus:outline-danger-8',
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
        sm: ['h-6', 'pl-1.5', 'pr-6', 'text-xs'],
        md: ['h-8', 'pl-2', 'pr-8', 'text-sm'],
        lg: ['h-10', 'pl-2.5', 'pr-10', 'text-base'],
        xl: ['h-12', 'pl-3', 'pr-12', , 'text-lg'],
      },
      variant: {
        default: ['bg-surface', '*:bg-white', 'dark:*:bg-default-1', 'border-default-7'],
        filled: ['bg-default-3', 'border-default-3'],
      },
      withSlot: {
        true: [''],
      },
    },
    compoundVariants: [
      {
        withSlot: true,
        size: 'sm',
        className: ['pl-6'],
      },
      {
        withSlot: true,
        size: 'md',
        className: ['pl-8'],
      },
      {
        withSlot: true,
        size: 'lg',
        className: ['pl-10'],
      },
      {
        withSlot: true,
        size: 'xl',
        className: ['pl-12'],
      },
    ],
  }
);
