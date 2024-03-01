import { cva } from 'class-variance-authority';

export const statusDotStyles = cva(
  [
    'inline-flex',
    'justify-center',
    'items-center',
    'shrink-0',
    'whitespace-nowrap',
    'text-foreground',

    'before:content-[""]',
    'before:select-none',
    'before:rounded-full',
  ],
  {
    variants: {
      color: {
        default: ['before:bg-default-9'],
        primary: ['before:bg-primary-9'],
        success: ['before:bg-success-9'],
        warning: ['before:bg-warning-9'],
        danger: ['before:bg-danger-9'],
      },
      size: {
        sm: ['before:size-2', 'gap-x-1', 'text-xs'],
        md: ['before:size-2.5', 'gap-x-1.5', 'text-sm'],
        lg: ['before:size-3', 'gap-x-2', 'text-base'],
        xl: ['before:size-3.5', 'gap-x-2.5', 'text-lg'],
      },
    },
  }
);
