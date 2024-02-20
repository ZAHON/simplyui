import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface CheckboxRootProps extends ComponentPropsWithRef<'button'> {
  /**
   * The content of the checkbox  - `<CheckboxIndicator />` component.
   */
  children: ReactNode;

  /**
   * The size of the checkbox.
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';

  /**
   * The border radius value of the checkbox.
   * @default "md"
   */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

  /**
   * The variant of the checkbox.
   * @default "default"
   */
  variant?: 'default' | 'filled';

  /**
   * The color of the checkbox.
   * @default "primary"
   */
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger';

  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The checked state of the checkbox when it is initially rendered. Use when you do not need to control its checked state.
   */
  defaultChecked?: boolean;

  /**
   * The controlled checked state of the checkbox. Must be used in conjunction with `onCheckedChange` property.
   */
  checked?: boolean;

  /**
   * Event handler called when the checked state of the checkbox changes.
   */
  onCheckedChange?: (checked: boolean) => void;

  /**
   * When `true`, prevents the user from interacting with the checkbox.
   * @default false
   */
  disabled?: boolean;

  /**
   * If `true`, the checkbox will be invalid. In this state component will have `aria-invalid` attribute set to `true`.
   * @default false
   */
  invalid?: boolean;

  /**
   * When `true`, indicates that the user must check the checkbox before the owning form can be submitted. In this state component will have `aria-required` attribute set to `true`
   * @default false
   */
  required?: boolean;

  /**
   * The name of the checkbox. Submitted with its owning form as part of a name/value pair.
   */
  name?: string;

  /**
   * The value given as data when submitted with a `name` property.
   * @default "on"
   */
  value?: string;
}
