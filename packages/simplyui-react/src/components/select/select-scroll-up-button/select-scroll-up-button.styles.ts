import { cva } from 'class-variance-authority';

export const selectScrollUpButtonStyles = cva(['flex', 'justify-center', 'items-center', 'bg-panel'], {
  variants: {
    size: {
      '1': ['h-4'],
      '2': ['h-6'],
      '3': ['h-8'],
      '4': ['h-10'],
    },
  },
});
