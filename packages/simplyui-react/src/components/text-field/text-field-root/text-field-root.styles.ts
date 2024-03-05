import { cva } from 'class-variance-authority';

export const textFieldRootStyles = cva(
  [
    'flex',
    'w-full',
    'border',
    'cursor-text',

    'motion-safe:transition',
    'motion-safe:duration-100',

    'has-[[data-text-field-slot]+input]:pl-0',
    'has-[input+[data-text-field-slot]]:pr-0',

    'has-[input:focus]:outline',
    'has-[input:focus]:outline-2',
    'has-[input:focus]:outline-offset-[-1px]',
    'has-[input:focus]:outline-focus',

    'data-[disabled]:opacity-60',
    'data-[disabled]:cursor-not-allowed',

    'data-[invalid]:border-danger-7',
    'data-[invalid]:has-[input:focus]:outline-danger-8',
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
        '1': ['h-6', 'px-1', 'text-xs'],
        '2': ['h-8', 'px-2', 'text-sm'],
        '3': ['h-10', 'px-2.5', 'text-base'],
        '4': ['h-12', 'px-3', 'text-lg'],
      },
      variant: {
        default: ['bg-surface', 'border-default-7'],
        filled: ['bg-default-3', 'border-default-3'],
      },
    },
  }
);
