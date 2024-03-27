import { cva } from 'class-variance-authority';

export const segmentedControlIndicatorStyles = cva(
  [
    'absolute',
    'top-0',
    'left-0',
    'h-full',
    'pointer-events-none',
    'bg-white',
    'dark:bg-default-5',
    'border',
    'border-default-7',
    'w-[calc(100%/var(--segmented-control-items-count))]',
    'translate-x-[calc(100%*var(--segmented-control-checked-item-index))]',

    'motion-safe:transition',
    'motion-safe:duration-150',
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
    },
  }
);
