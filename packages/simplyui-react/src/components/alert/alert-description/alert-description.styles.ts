import { cva } from 'class-variance-authority';

export const alertDescriptionStyles = cva(['text-pretty', 'leading-relaxed'], {
  variants: {
    size: {
      '1': ['text-xs'],
      '2': ['text-sm'],
      '3': ['text-base'],
      '4': ['text-lg'],
    },
    visuallyHidden: {
      true: ['sr-only'],
    },
  },
});
