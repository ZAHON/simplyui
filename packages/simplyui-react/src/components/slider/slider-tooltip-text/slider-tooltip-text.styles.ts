import { cva } from 'class-variance-authority';

export const sliderTooltipTextStyles = cva(['text-default-1', 'cursor-default', 'select-none'], {
  variants: {
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
