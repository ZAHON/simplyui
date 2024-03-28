import type { ComponentPropsWithRef } from 'react';

type HTMLAttributesToOmit = 'size';

export interface InputProps extends Omit<ComponentPropsWithRef<'input'>, HTMLAttributesToOmit> {
  /**
   * When `true`, prevents the user from interacting with the input.
   * @default false
   */
  disabled?: boolean;

  /**
   * If `true`, the input will be invalid.
   * @default false
   */
  invalid?: boolean;

  /**
   * The border radius value of the input.
   * @default "md"
   */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

  /**
   * When `true`, indicates that the user must type a value before the owning form can be submitted.
   * @default false
   */
  required?: boolean;

  /**
   * The size of the input.
   * @default "2"
   */
  size?: '1' | '2' | '3' | '4';

  /**
   * The variant of the input.
   * @default "default"
   */
  variant?: 'default' | 'filled' | 'filled-outline';

  /**
   * The type of the input.
   * @default "text"
   */
  type?:
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'hidden'
    | 'month'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week';
}
