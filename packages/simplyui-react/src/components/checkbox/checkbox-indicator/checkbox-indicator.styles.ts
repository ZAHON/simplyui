import { cva } from 'class-variance-authority';

export const checkboxIndicatorStyles = cva([
  'relative',
  'pointer-events-none',
  'size-full',
  'origin-center',

  'motion-safe:transition',
  'motion-safe:duration-100',

  'data-[state=unchecked]:opacity-0',
  'data-[state=unchecked]:scale-0',

  'data-[state=checked]:opacity-100',
  'data-[state=checked]:scale-100',
]);
