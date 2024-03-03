import { cva } from 'class-variance-authority';

export const segmentedControlIndicatorStyles = cva(
  [
    'absolute',
    'top-0',
    'h-full',
    'left-[calc(calc(100%/var(--segmented-control-items-count))*var(--segmented-control-checked-item-index))]',
    'w-[calc(100%/var(--segmented-control-items-count))]',

    'drop-shadow-sm',
    'dark:drop-shadow-none',

    'motion-safe:transition-[left,background-color]',
    'motion-safe:duration-200',
  ],
  {
    variants: {
      color: {
        default: ['bg-white', 'dark:bg-default-5'],
        primary: ['bg-primary-9'],
        success: ['bg-success-9'],
        warning: ['bg-warning-9'],
        danger: ['bg-danger-9'],
      },
      radius: {
        none: ['rounded-none'],
        sm: ['rounded-sm'],
        md: ['rounded-[calc(0.25rem-0.125rem)]'],
        lg: ['rounded-[calc(0.375rem-0.125rem)]'],
        xl: ['rounded-[calc(0.5rem-0.125rem)]'],
        full: ['rounded-[calc(9999px-0.125rem)]'],
      },
    },
  }
);