import { cva } from 'class-variance-authority';

export const modalTitleStyles = cva(['font-semibold'], {
  variants: {
    size: {
      sm: ['pb-1', 'text-base'],
      md: ['pb-2', 'text-lg'],
      lg: ['pb-3', 'text-xl'],
      xl: ['pb-4', 'text-2xl'],
    },
    visuallyHidden: {
      true: ['sr-only'],
    },
  },
});
