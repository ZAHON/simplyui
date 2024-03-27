import { cva } from 'class-variance-authority';

export const sliderTooltipStyles = cva(
  [
    'flex',
    'flex-col',
    'items-center',
    'pointer-events-none',
    'select-none',
    'origin-center',
    'min-w-max',

    'gap-y-[--slider-tooltip-arrow-padding]',

    'motion-safe:data-[disabled]:duration-100',
    'motion-safe:data-[disabled]:[transition-delay:0ms]',
    'motion-safe:[transition-delay:var(--slider-tooltip-delay-duration)]',
  ],
  {
    variants: {
      side: {
        top: ['flex-col'],
        bottom: ['flex-col-reverse'],
      },
      type: {
        always: [
          'will-change-[transform,opacity]',

          'motion-safe:transition',
          'motion-safe:duration-100',
          'data-[disabled]:opacity-0',
          'data-[disabled]:scale-95',
          'data-[disabled]:data-[state=top]:translate-y-1',
          'data-[disabled]:data-[state=bottom]:-translate-y-1',
        ],
        auto: [
          'opacity-0',
          'scale-95',
          'data-[state=top]:translate-y-1',
          'data-[state=bottom]:-translate-y-1',
          'will-change-[transform,opacity]',

          'motion-safe:transition',
          'motion-safe:duration-150',

          'group-focus:opacity-100',
          'group-focus:scale-100',
          'group-focus:translate-y-0',

          '[&:not([data-disabled])]:group-hover:opacity-100',
          '[&:not([data-disabled])]:group-hover:scale-100',
          '[&:not([data-disabled])]:group-hover:translate-y-0',
        ],
        hover: [
          'opacity-0',
          'scale-95',
          'data-[state=top]:translate-y-1',
          'data-[state=bottom]:-translate-y-1',
          'will-change-[transform,opacity]',

          'motion-safe:transition',
          'motion-safe:duration-150',

          '[&:not([data-disabled])]:group-hover:opacity-100',
          '[&:not([data-disabled])]:group-hover:scale-100',
          '[&:not([data-disabled])]:group-hover:translate-y-0',
        ],
        focus: [
          'opacity-0',
          'scale-95',
          'data-[state=top]:translate-y-1',
          'data-[state=bottom]:-translate-y-1',
          'will-change-[transform,opacity]',

          'motion-safe:transition',
          'motion-safe:duration-150',

          'group-focus:opacity-100',
          'group-focus:scale-100',
          'group-focus:translate-y-0',
        ],
      },
    },
  }
);
