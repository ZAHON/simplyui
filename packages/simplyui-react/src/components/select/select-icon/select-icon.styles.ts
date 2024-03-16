import { cva } from 'class-variance-authority';

export const selectIconStyles = cva([
  'pointer-events-none',
  'text-default-11',

  'motion-safe:transition',
  'motion-safe:duration-100',

  'data-[invalid]:text-danger-11',
]);
