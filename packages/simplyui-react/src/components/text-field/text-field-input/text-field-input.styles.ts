import { cva } from 'class-variance-authority';

export const textFieldInputStyles = cva([
  'grow',
  'appearance-none',
  'bg-transparent',
  'text-default-12',
  'placeholder:text-default-10',

  'motion-safe:transition',
  'motion-safe:duration-100',

  'focus:outline-none',

  'data-[disabled]:cursor-not-allowed',

  'data-[invalid]:text-danger-11',
  'data-[invalid]:placeholder:text-danger-10',
]);
