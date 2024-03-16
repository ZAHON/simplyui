import { cva } from 'class-variance-authority';

export const kbdStyles = cva(
  [
    'inline-flex',
    'justify-center',
    'items-center',
    'whitespace-nowrap',
    'bg-panel',
    'shadow-kbd',
    'font-sans',
    'cursor-default',
    'select-none',
    'align-top',
    'tracking-tight',
  ],
  {
    variants: {
      radius: {
        none: ['rounded-none'],
        sm: ['rounded-sm'],
        md: ['rounded'],
        lg: ['rounded-md'],
        xl: ['rounded-lg'],
        full: ['rounded-full'],
      },
      size: {
        '1': ['py-0.5', 'px-1', 'text-xs'],
        '2': ['py-0.5', 'px-1.5', 'text-sm'],
        '3': ['py-0.5', 'px-2', 'text-base'],
        '4': ['py-0.5', 'px-2', 'text-lg'],
        '5': ['py-0.5', 'px-2', 'text-xl'],
        '6': ['py-0.5', 'px-2', 'text-2xl'],
        '7': ['py-0.5', 'px-2.5', 'text-3xl'],
        '8': ['py-0.5', 'px-3', 'text-4xl'],
        '9': ['py-0.5', 'px-4', 'text-6xl'],
      },
    },
  }
);
