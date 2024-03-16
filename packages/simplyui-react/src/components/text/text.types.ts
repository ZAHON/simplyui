import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type TextCommonProps = {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * Shorthand for changing the default rendered element into a semantically appropriate alternative.
   * @default "p"
   */
  as?: 'p' | 'div' | 'span';

  /**
   * The content of the text.
   */
  children: ReactNode;

  /**
   * The color of the text.
   * @default "foreground"
   */
  color?: 'foreground' | 'default' | 'primary' | 'success' | 'warning' | 'danger';

  /**
   * The size of the text.
   * @default "3"
   */
  size?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

  /**
   * The tracking (letter spacing) of the text.
   * @default "normal"
   */
  tracking?: 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest';

  /**
   * The font weight of the text.
   * @default "regular"
   */
  weight?: 'light' | 'regular' | 'medium' | 'semibold' | 'bold';
};

type TextAsChildProps = { asChild: true; as?: never } & ComponentPropsWithoutRef<'p'>;

type TextPProps = { as?: 'p'; asChild?: false } & ComponentPropsWithoutRef<'p'>;

type TextSpanProps = { as: 'span'; asChild?: false } & ComponentPropsWithoutRef<'span'>;

type TextDivProps = { as: 'div'; asChild?: false } & ComponentPropsWithoutRef<'div'>;

export type TextProps = TextCommonProps & (TextAsChildProps | TextPProps | TextSpanProps | TextDivProps);
