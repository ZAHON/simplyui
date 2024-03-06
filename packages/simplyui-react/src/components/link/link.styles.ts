import { cva } from 'class-variance-authority';

export const linkStyles = cva(
  [
    'inline-flex',
    'items-center',
    'gap-x-1',
    'rounded-sm',
    'underline-offset-2',

    'motion-safe:transition',
    'motion-safe:duration-100',

    'focus-visible:outline',
    'focus-visible:outline-2',
    'focus-visible:outline-offset-2',
    'focus-visible:outline-focus',

    'data-[disabled]:opacity-60',
    'data-[disabled]:pointer-events-none',
  ],
  {
    variants: {
      color: {
        default: ['text-default-12', 'decoration-default-6'],
        primary: ['text-primary-11', 'decoration-primary-6'],
        success: ['text-success-11', 'decoration-success-6'],
        warning: ['text-warning-11', 'decoration-warning-6'],
        danger: ['text-danger-11', 'decoration-danger-6'],
      },
      size: {
        '1': ['text-xs'],
        '2': ['text-sm'],
        '3': ['text-base'],
        '4': ['text-lg'],
        '5': ['text-xl'],
        '6': ['text-2xl'],
        '7': ['text-3xl'],
        '8': ['text-4xl'],
        '9': ['text-6xl'],
      },
      tracking: {
        tighter: ['tracking-tighter'],
        tight: ['tracking-tight'],
        normal: ['tracking-normal'],
        wide: ['tracking-wide'],
        wider: ['tracking-wider'],
        widest: ['tracking-widest'],
      },
      underline: {
        active: ['active:underline'],
        always: ['underline'],
        focus: ['focus:underline'],
        hover: ['hover:underline'],
        none: [''],
      },
      weight: {
        light: ['font-light'],
        regular: ['font-normal'],
        medium: ['font-medium'],
        semibold: ['font-semibold'],
        bold: ['font-bold'],
      },
    },
  }
);
