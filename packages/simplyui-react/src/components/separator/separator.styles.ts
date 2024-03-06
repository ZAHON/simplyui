import { cva } from 'class-variance-authority';

export const separatorStyles = cva(
  [
    'data-[orientation=horizontal]:h-px',
    'data-[orientation=horizontal]:w-full',

    'data-[orientation=vertical]:h-full',
    'data-[orientation=vertical]:w-px',
  ],
  {
    variants: {
      color: {
        default: ['bg-default-6'],
        primary: ['bg-primary-6'],
        success: ['bg-success-6'],
        warning: ['bg-warning-6'],
        danger: ['bg-danger-6'],
      },
    },
  }
);
