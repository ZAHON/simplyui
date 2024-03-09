import { cva } from 'class-variance-authority';

export const buttonContentStyles = cva(
  ['flex', 'justify-center', 'items-center', 'pointer-events-none', 'data-[loading]:opacity-0'],
  {
    variants: {
      size: {
        '1': ['gap-x-1'],
        '2': ['gap-x-2'],
        '3': ['gap-x-3'],
        '4': ['gap-x-3'],
      },
    },
  }
);
