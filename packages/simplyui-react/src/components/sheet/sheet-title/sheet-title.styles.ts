import { cva } from 'class-variance-authority';

export const sheetTitleStyles = cva(['font-bold', 'tracking-tight', 'text-foreground'], {
  variants: {
    size: {
      '1': ['text-base'],
      '2': ['text-xl'],
      '3': ['text-xl'],
      '4': ['text-2xl'],
    },
    visuallyHidden: {
      true: ['sr-only'],
    },
  },
});
