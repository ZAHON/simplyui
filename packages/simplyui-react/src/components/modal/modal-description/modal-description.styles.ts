import { cva } from 'class-variance-authority';

export const modalDescriptionStyles = cva([''], {
  variants: {
    size: {
      sm: ['text-sm'],
      md: ['text-base'],
      lg: ['text-lg'],
      xl: ['text-xl'],
    },
    visuallyHidden: {
      true: ['sr-only'],
    },
  },
});
