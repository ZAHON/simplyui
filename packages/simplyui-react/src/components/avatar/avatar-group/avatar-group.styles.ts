import { cva } from 'class-variance-authority';

export const avatarGroupStyles = cva(['[&>*:first-child]:ml-0'], {
  variants: {
    addBorderForAvatars: {
      true: ['*:border', '*:border-background'],
    },
    spacing: {
      '1': ['*:-ml-2'],
      '2': ['*:-ml-3'],
      '3': ['*:-ml-4'],
      '4': ['*:-ml-6'],
      '5': ['*:-ml-8'],
      '6': ['*:-ml-10'],
      '7': ['*:-ml-12'],
      '8': ['*:-ml-16'],
      '9': ['*:-ml-20'],
    },
  },
});
