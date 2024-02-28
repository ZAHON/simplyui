import { cva } from 'class-variance-authority';

export const nativeSelectSlotStyles = cva([
  'pointer-events-none',
  'h-full',
  'aspect-square',
  'absolute',
  'top-0',
  'left-0',
  'flex',
  'justify-center',
  'items-center',
  'text-default-11',

  'motion-safe:transition',
  'motion-safe:duration-100',

  'data-[disabled]:opacity-60',
  'data-[disabled]:cursor-not-allowed',

  'data-[invalid]:text-danger-11',
]);
