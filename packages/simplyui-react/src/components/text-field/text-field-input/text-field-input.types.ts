import type { ComponentPropsWithRef } from 'react';

type HTMLAttributesToOmit = 'disabled';

export interface TextFieldInputProps extends Omit<ComponentPropsWithRef<'input'>, HTMLAttributesToOmit> {
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
