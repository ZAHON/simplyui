import { cva } from 'class-variance-authority';

export const sheetDescriptionStyles = cva(['text-foreground'], {
  variants: {
    size: {
      '1': ['text-sm'],
      '2': ['text-sm'],
      '3': ['text-sm'],
      '4': ['text-base'],
    },
    visuallyHidden: {
      true: ['sr-only'],
    },
  },
});
