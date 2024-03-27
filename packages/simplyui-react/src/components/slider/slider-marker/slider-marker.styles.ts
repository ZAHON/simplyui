import { cva } from 'class-variance-authority';

export const sliderMarkerStyles = cva(
  [
    'absolute',
    '-translate-x-1/2',
    'text-default-11',
    'pointer-events-none',

    'before:relative',
    'before:left-1/2',
    'before:-translate-x-1/2',
    'before:block',
    'before:bg-white',
    'before:rounded-full',
    'before:drop-shadow-sm',
  ],
  {
    variants: {
      size: {
        '1': ['text-[0.625rem]', 'before:mb-1.5', , 'before:size-0.5', 'before:top-0'],
        '2': ['text-xs', 'before:mb-3', 'before:size-0.5', 'before:top-px'],
        '3': ['text-sm', 'before:mb-3', 'before:size-1', 'before:top-px'],
        '4': ['text-base', 'before:mb-3', 'before:size-1.5', 'before:top-px'],
      },
    },
  }
);
