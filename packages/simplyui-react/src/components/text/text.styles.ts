import { cva } from 'class-variance-authority';

export const textStyles = cva([''], {
  variants: {
    color: {
      foreground: ['text-foreground'],
      default: ['text-default-11'],
      primary: ['text-primary-11'],
      success: ['text-success-11'],
      warning: ['text-warning-11'],
      danger: ['text-danger-11'],
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
    weight: {
      light: ['font-light'],
      regular: ['font-normal'],
      medium: ['font-medium'],
      semibold: ['font-semibold'],
      bold: ['font-bold'],
    },
  },
});
