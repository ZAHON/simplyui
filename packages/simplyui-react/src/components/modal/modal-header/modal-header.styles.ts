import { cva } from 'class-variance-authority';

export const modalHeaderStyles = cva(['flex', 'flex-col'], {
  variants: {
    size: {
      sm: ['pt-3', 'pb-1.5', 'px-3', 'text-xs'],
      md: ['pt-4', 'pb-2', 'px-4', 'text-sm'],
      lg: ['pt-5', 'pb-2.5', 'px-6', 'text-base'],
      xl: ['pt-6', 'pb-3', 'px-8', 'text-lg'],
    },
  },
});
