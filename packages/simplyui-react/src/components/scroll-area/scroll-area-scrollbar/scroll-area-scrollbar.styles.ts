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
      radius: {
        none: ['rounded-none'],
        sm: ['rounded-sm'],
        md: ['rounded'],
        lg: ['rounded-md'],
        xl: ['rounded-lg'],
        full: ['rounded-full'],
      },
      size: {
        '1': [''],
        '2': [''],
        '3': [''],
        '4': [''],
      },
      withBackground: {
        true: ['bg-default-3'],
      },
      withPadding: {
        true: ['p-0.5'],
      },
    },
    compoundVariants: [
      // withPadding true
      {
        withPadding: true,
        size: '1',
        className: ['data-[orientation=vertical]:w-2', 'data-[orientation=horizontal]:h-2'],
      },
      {
        withPadding: true,
        size: '2',
        className: ['data-[orientation=vertical]:w-2.5', 'data-[orientation=horizontal]:h-2.5'],
      },
      {
        withPadding: true,
        size: '3',
        className: ['data-[orientation=vertical]:w-3', 'data-[orientation=horizontal]:h-3'],
      },
      {
        withPadding: true,
        size: '4',
        className: ['data-[orientation=vertical]:w-3.5', 'data-[orientation=horizontal]:h-3.5'],
      },

      // withPadding false
      {
        withPadding: false,
        size: '1',
        className: ['data-[orientation=vertical]:w-1', 'data-[orientation=horizontal]:h-1'],
      },
      {
        withPadding: false,
        size: '2',
        className: ['data-[orientation=vertical]:w-1.5', 'data-[orientation=horizontal]:h-1.5'],
      },
      {
        withPadding: false,
        size: '3',
        className: ['data-[orientation=vertical]:w-2', 'data-[orientation=horizontal]:h-2'],
      },
      {
        withPadding: false,
        size: '4',
        className: ['data-[orientation=vertical]:w-2.5', 'data-[orientation=horizontal]:h-2.5'],
      },
    ],
  }
);
