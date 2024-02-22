import { cva } from 'class-variance-authority';

export const indicatorDotStyles = cva(
  [
    'absolute',
    'z-10',
    'rounded-full',
    'origin-center',

    'top-[var(--indicator-dot-top)]',
    'bottom-[var(--indicator-dot-bottom)]',
    'left-[var(--indicator-dot-left)]',
    'right-[var(--indicator-dot-right)]',
    'translate-x-[var(--indicator-dot-translate-x)]',
    'translate-y-[var(--indicator-dot-translate-y)]',

    'motion-safe:transition',
    'motion-safe:duration-200',

    'after:content-[""]',
    'after:relative',
    'after:block',
    'after:size-full',
    'after:rounded-full',

    'data-[disabled]:opacity-0',
    'data-[disabled]:scale-0',

    'data-[processing]:motion-safe:after:animate-[ping_var(--indicator-dot-processing-safe-duration)_cubic-bezier(0,0,0.2,1)_infinite]',
    'data-[processing]:motion-reduce:after:animate-[ping_var(--indicator-dot-processing-reduce-duration)_cubic-bezier(0,0,0.2,1)_infinite]',
  ],
  {
    variants: {
      color: {
        default: ['bg-default-9', 'after:bg-default-9'],
        primary: ['bg-primary-9', 'after:bg-primary-9'],
        success: ['bg-success-9', 'after:bg-success-9'],
        warning: ['bg-warning-9', 'after:bg-warning-9'],
        danger: ['bg-danger-9', 'after:bg-danger-9'],
      },
      radius: {
        none: ['rounded-none'],
        sm: ['rounded-sm'],
        md: ['rounded'],
        lg: ['rounded-md'],
        xl: ['rounded-lg'],
        full: ['rounded-full'],
      },
      size: {
        sm: ['size-1.5'],
        md: ['size-2'],
        lg: ['size-2.5'],
        xl: ['size-3'],
      },
      withBorder: {
        true: ['border', 'border-background'],
      },
    },
  }
);
