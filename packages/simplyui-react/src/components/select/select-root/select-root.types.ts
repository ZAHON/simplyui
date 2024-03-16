import type { ReactNode } from 'react';

export interface SelectRootProps {
  /**
   * The value of the select when initially rendered. Use when you do not need to control the state of the select.
   */
  defaultValue?: string;

  /**
   * The controlled value of the select. Should be used in conjunction with `onValueChange` property.
   */
  value?: string;

  /**
   * Event handler called when the value changes.
   */
  onValueChange?: (value: string) => void;

  /**
   * The open state of the select when it is initially rendered. Use when you do not need to control its open state.
   */
  defaultOpen?: boolean;

  /**
   * The controlled open state of the select. Must be used in conjunction with `onOpenChange` property.
   */
  open?: boolean;

  /**
   * Event handler called when the open state of the select changes.
   */
  onOpenChange?: (open: boolean) => void;

  /**
   * The all the parts of a select.
   */
  children: ReactNode;

  /**
   * When `true`, prevents the user from interacting with select.
   * @default false
   */
  disabled?: boolean;

  /**
   * If `true`, the select will be invalid.
   * @default false
   */
  invalid?: boolean;

  /**
   * The name of the select. Submitted with its owning form as part of a name/value pair.
   */
  name?: string;

  /**
   * The border radius value of the select.
   * @default "md"
   */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

  /**
   * When `true`, indicates that the user must select a value before the owning form can be submitted.
   * @default false
   */
  required?: boolean;

  /**
   * The size of the select.
   * @default "2"
   */
  size?: '1' | '2' | '3' | '4';
}
