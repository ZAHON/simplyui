import { cva } from 'class-variance-authority';

export const buttonContentStyles = cva(
  ['flex', 'justify-center', 'items-center', 'pointer-events-none', 'data-[loading]:opacity-0'],
  {
    variants: {
      size: {
        sm: ['gap-x-1'],
        md: ['gap-x-2'],
        lg: ['gap-x-3'],
        xl: ['gap-x-3'],
      },
    },
  }
);
