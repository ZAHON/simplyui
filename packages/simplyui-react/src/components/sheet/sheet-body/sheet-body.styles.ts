import { cva } from 'class-variance-authority';

export const sheetBodyStyles = cva(
  [
    'max-h-full',
    'focus-visible:outline',
    'focus-visible:outline-2',
    'focus-visible:outline-offset-0',
    'focus-visible:outline-focus',
  ],
  {
    variants: {
      size: {
        '1': ['px-3'],
        '2': ['px-4'],
        '3': ['px-6'],
        '4': ['px-8'],
      },
    },
  }
);
