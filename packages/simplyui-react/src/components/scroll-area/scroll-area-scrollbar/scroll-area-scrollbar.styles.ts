import { cva } from 'class-variance-authority';

export const scrollAreaScrollbarStyles = cva(
  [
    'peer',
    'flex',
    'select-none',
    'touch-none',

    'data-[orientation=vertical]:flex-row',
    'data-[orientation=horizontal]:flex-col',

    'motion-safe:data-[state=visible]:animate-in',
    'motion-safe:data-[state=visible]:fade-in-0',
    'motion-safe:data-[state=visible]:duration-100',

    'motion-safe:data-[state=hidden]:animate-out',
    'motion-safe:data-[state=hidden]:fade-out-0',
    'motion-safe:data-[state=hidden]:duration-100',
  ],
  {
    variants: {
      size: {
        sm: ['data-[orientation=vertical]:w-2', 'data-[orientation=horizontal]:h-2'],
        md: ['data-[orientation=vertical]:w-2.5', 'data-[orientation=horizontal]:h-2.5'],
        lg: ['data-[orientation=vertical]:w-3', 'data-[orientation=horizontal]:h-3'],
        xl: ['data-[orientation=vertical]:w-3.5', 'data-[orientation=horizontal]:h-3.5'],
      },
      withBackground: {
        true: ['bg-default-3'],
      },
      withPadding: {
        true: ['p-0.5'],
      },
    },
  }
);
