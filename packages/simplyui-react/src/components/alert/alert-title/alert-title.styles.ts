import { cva } from 'class-variance-authority';

export const alertTitleStyles = cva(['font-semibold', 'tracking-tight'], {
  variants: {
    size: {
      '1': ['text-sm'],
      '2': ['text-base'],
      '3': ['text-lg'],
      '4': ['text-xl'],
    },
    visuallyHidden: {
      true: ['sr-only'],
    },
  },
});
