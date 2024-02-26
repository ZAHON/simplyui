import { cva } from 'class-variance-authority';

export const modalBodyStyles = cva(
  [
    'max-h-full',
    'overflow-y-auto',

    'focus-visible:outline',
    'focus-visible:outline-2',
    'focus-visible:outline-offset-0',
    'focus-visible:outline-focus',
  ],
  {
    variants: {
      size: {
        sm: ['py-1.5', 'px-3', 'text-xs'],
        md: ['py-2', 'px-4', 'text-sm'],
        lg: ['py-2.5', 'px-6', 'text-base'],
        xl: ['py-3', 'px-8', 'text-lg'],
      },
    },
  }
);
