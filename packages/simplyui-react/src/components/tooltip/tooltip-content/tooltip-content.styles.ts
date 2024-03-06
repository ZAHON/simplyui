import { cva } from 'class-variance-authority';

export const tooltipContentStyles = cva(
  [
    'z-40',
    'py-1',
    'px-2',
    'max-w-80',
    'bg-default-12',

    'motion-safe:animate-in',
    'motion-safe:fade-in-0',
    'motion-safe:zoom-in-95',

    'motion-safe:data-[state=closed]:animate-out',
    'motion-safe:data-[state=closed]:fade-out-0',
    'motion-safe:data-[state=closed]:zoom-out-95',

    'motion-safe:data-[side=top]:slide-in-from-bottom-2',
    'motion-safe:data-[side=top]:duration-150',

    'motion-safe:data-[side=left]:slide-in-from-right-2',
    'motion-safe:data-[side=left]:duration-150',

    'motion-safe:data-[side=bottom]:slide-in-from-top-2',
    'motion-safe:data-[side=bottom]:duration-150',

    'motion-safe:data-[side=right]:slide-in-from-left-2',
    'motion-safe:data-[side=right]:duration-150',
  ],
  {
    variants: {
      radius: {
        none: ['rounded-none'],
        sm: ['rounded-sm'],
        md: ['rounded'],
        lg: ['rounded-md'],
        xl: ['rounded-lg'],
        full: ['rounded-xl'],
      },
      size: {
        '1': ['text-xs'],
        '2': ['text-sm'],
        '3': ['text-base'],
        '4': ['text-lg'],
      },
    },
  }
);
