import { cva } from 'class-variance-authority';

export const burgerIconStyles = cva([
  'pointer-events-none',
  'h-full',
  'w-full',
  'flex',
  'flex-col',
  'items-center',
  'justify-center',
  'text-inherit',

  'motion-safe:transition',
  'motion-safe:duration-100',

  'before:content-[""]',
  'before:block',
  'before:h-px',
  'before:w-3/4',
  'before:-translate-y-1',
  'before:rotate-0',
  'before:bg-current',
  'before:motion-safe:transition',
  'before:motion-safe:duration-100',

  'after:content-[""]',
  'after:block',
  'after:h-px',
  'after:w-3/4',
  'after:translate-y-1',
  'after:rotate-0',
  'after:bg-current',
  'after:motion-safe:transition',
  'after:motion-safe:duration-100',

  'data-[state=open]:before:translate-y-px',
  'data-[state=open]:before:rotate-45',

  'data-[state=open]:after:translate-y-0',
  'data-[state=open]:after:-rotate-45',
]);
