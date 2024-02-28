import { cva } from 'class-variance-authority';

export const menuSeparatorStyles = cva(['h-px', 'bg-default-6'], {
  variants: {
    size: {
      sm: ['my-1'],
      md: ['my-2'],
    },
  },
});
