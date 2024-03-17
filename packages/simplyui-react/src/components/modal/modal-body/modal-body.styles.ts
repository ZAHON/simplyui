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
        '1': ['px-3', 'my-3'],
        '2': ['px-4', 'my-4'],
        '3': ['px-6', 'my-4'],
        '4': ['px-8', 'my-6'],
      },
    },
  }
);
