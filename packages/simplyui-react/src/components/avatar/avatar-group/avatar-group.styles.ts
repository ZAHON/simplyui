import { cva } from 'class-variance-authority';

export const avatarGroupStyles = cva(['*:border', '*:border-background', '[&>*:first-child]:ml-0'], {
  variants: {
    spacing: {
      sm: ['*:-ml-2'],
      md: ['*:-ml-3'],
      lg: ['*:-ml-4'],
      xl: ['*:-ml-6'],
    },
  },
});
