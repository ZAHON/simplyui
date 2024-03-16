import { cva } from 'class-variance-authority';

//

//

export const selectContentStyles = cva(
  [
    'relative',
    'z-40',
    'bg-panel',
    'border',
    'border-default-6',
    'overflow-hidden',
    'max-h-[var(--radix-select-content-available-height)]',
    'min-w-[var(--radix-select-trigger-width)]',

    'motion-safe:data-[state=open]:animate-in',
    'motion-safe:data-[state=open]:fade-in-0',

    'motion-safe:data-[state=closed]:animate-out',
    'motion-safe:data-[state=closed]:fade-out-0',
    'motion-safe:data-[state=closed]:zoom-out-95',

    'motion-safe:data-[side=top]:slide-in-from-bottom-2',
    'motion-safe:data-[side=top]:duration-100',

    'motion-safe:data-[side=left]:slide-in-from-right-2',
    'motion-safe:data-[side=left]:duration-100',

    'motion-safe:data-[side=bottom]:slide-in-from-top-2',
    'motion-safe:data-[side=bottom]:duration-100',

    'motion-safe:data-[side=right]:slide-in-from-left-2',
    'motion-safe:data-[side=right]:duration-100',
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
      shadow: {
        none: ['drop-shadow-none'],
        sm: ['drop-shadow-sm'],
        md: ['drop-shadow'],
        lg: ['drop-shadow-md'],
        xl: ['drop-shadow-lg'],
      },
    },
  }
);
