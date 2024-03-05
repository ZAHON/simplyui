import { cva } from 'class-variance-authority';

export const textFieldSlotStyles = cva([
  'relative',
  'h-full',
  'aspect-square',
  'flex',
  'justify-center',
  'items-center',
  'shrink-0',
  'text-default-11',

  'motion-safe:transition',
  'motion-safe:duration-100',

  'data-[invalid]:text-danger-11',
]);
