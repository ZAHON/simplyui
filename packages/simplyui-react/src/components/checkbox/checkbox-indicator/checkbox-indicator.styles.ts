import { cva } from 'class-variance-authority';

export const checkboxIndicatorStyles = cva([
  'size-full',
  'opacity-0',
  'scale-0',

  'data-[state=checked]:opacity-100',
  'data-[state=checked]:scale-100',

  'motion-safe:transition',
  'motion-safe:duration-100',
]);
