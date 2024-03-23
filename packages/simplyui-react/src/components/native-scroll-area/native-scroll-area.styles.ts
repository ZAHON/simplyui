import { cva } from 'class-variance-authority';

export const nativeScrollAreaStyles = cva(
  [
    '[&::-webkit-scrollbar-thumb]:bg-default-8',
    'hover:[&::-webkit-scrollbar-thumb]:bg-default-9',
    'active:[&::-webkit-scrollbar-thumb]:bg-default-10',

    '[&::-webkit-scrollbar-corner]:bg-transparent',
    '[&::-webkit-scrollbar-corner]:size-0',

    'supports-[not_selector(::-webkit-scrollbar)]:[-ms-overflow-style:auto]',
    'supports-[not_selector(::-webkit-scrollbar)]:[scrollbar-width:auto]',
    'supports-[not_selector(::-webkit-scrollbar)]:[scrollbar-color:theme(colors.default.8)_theme(colors.default.3)]',
    'supports-[not_selector(::-webkit-scrollbar)]:hover:[scrollbar-color:theme(colors.default.9)_theme(colors.default.3)]',
    'supports-[not_selector(::-webkit-scrollbar)]:active:[scrollbar-color:theme(colors.default.10)_theme(colors.default.3)]',
  ],
  {
    variants: {
      scrollbarBackground: {
        true: ['[&::-webkit-scrollbar-track]:bg-default-3'],
        false: ['[&::-webkit-scrollbar-track]:bg-transparent'],
      },
      scrollbarPadding: {
        true: [
          '[&::-webkit-scrollbar-thumb]:border-solid',
          '[&::-webkit-scrollbar-thumb]:border-2',
          '[&::-webkit-scrollbar-thumb]:border-transparent',
          '[&::-webkit-scrollbar-thumb]:bg-clip-content',
        ],
      },
      scrollbarRadius: {
        none: ['[&::-webkit-scrollbar-track]:rounded-none'],
        sm: ['[&::-webkit-scrollbar-track]:rounded-sm'],
        md: ['[&::-webkit-scrollbar-track]:rounded'],
        lg: ['[&::-webkit-scrollbar-track]:rounded-md'],
        xl: ['[&::-webkit-scrollbar-track]:rounded-lg'],
        full: ['[&::-webkit-scrollbar-track]:rounded-full'],
      },
      scrollbars: {
        vertical: ['overflow-y-auto', 'overflow-x-hidden'],
        horizontal: ['overflow-y-hidden', 'overflow-x-auto'],
        both: ['overflow-y-auto', 'overflow-x-auto'],
      },
      size: {
        '1': [''],
        '2': [''],
        '3': [''],
        '4': [''],
      },
      thumbRadius: {
        none: ['[&::-webkit-scrollbar-thumb]:rounded-none'],
        sm: ['[&::-webkit-scrollbar-thumb]:rounded-sm'],
        md: ['[&::-webkit-scrollbar-thumb]:rounded'],
        lg: ['[&::-webkit-scrollbar-thumb]:rounded-md'],
        xl: ['[&::-webkit-scrollbar-thumb]:rounded-lg'],
        full: ['[&::-webkit-scrollbar-thumb]:rounded-full'],
      },
    },
    compoundVariants: [
      // scrollbarPadding true
      {
        scrollbarPadding: true,
        size: '1',
        className: ['[&::-webkit-scrollbar]:size-2'],
      },
      {
        scrollbarPadding: true,
        size: '2',
        className: ['[&::-webkit-scrollbar]:size-2.5'],
      },
      {
        scrollbarPadding: true,
        size: '3',
        className: ['[&::-webkit-scrollbar]:size-3'],
      },
      {
        scrollbarPadding: true,
        size: '4',
        className: ['[&::-webkit-scrollbar]:size-3.5'],
      },

      // scrollbarPadding false
      {
        scrollbarPadding: false,
        size: '1',
        className: ['[&::-webkit-scrollbar]:size-1'],
      },
      {
        scrollbarPadding: false,
        size: '2',
        className: ['[&::-webkit-scrollbar]:size-1.5'],
      },
      {
        scrollbarPadding: false,
        size: '3',
        className: ['[&::-webkit-scrollbar]:size-2'],
      },
      {
        scrollbarPadding: false,
        size: '4',
        className: ['[&::-webkit-scrollbar]:size-2.5'],
      },
    ],
  }
);
