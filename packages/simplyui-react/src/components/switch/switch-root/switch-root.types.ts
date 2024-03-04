import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface SwitchRootProps extends ComponentPropsWithRef<'button'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The state of the switch when it is initially rendered. Use when you do not need to control its state.
   */
  defaultChecked?: boolean;

  /**
   * The controlled state of the switch. Must be used in conjunction with `onCheckedChange` property.
   */
  checked?: boolean;

  /**
   * Event handler called when the state of the switch changes.
   */
  onCheckedChange?: (checked: boolean) => void;

  /**
   * The content of the switch - `Switch.Thumb` component.
   */
  children: ReactNode;

  /**
   * The color of the switch.
   * @default "primary"
   */
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger';

  /**
   * When `true`, prevents the user from interacting with the switch.
   * @default false
   */
  disabled?: boolean;

  /**
   * If `true`, the switch will be invalid.
   * @default false
   */
  invalid?: boolean;

  /**
   * The name of the switch. Submitted with its owning form as part of a name/value pair.
   */
  name?: string;

  /**
   * The border radius value of the switch.
   * @default "full"
   */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

  /**
   * When `true`, indicates that the user must check the switch before the owning form can be submitted.
   * @default false
   */
  required?: boolean;

  /**
   * The size of the switch.
   * @default "2"
   */
  size?: '1' | '2' | '3' | '4';

  /**
   * The value given as data when submitted with a `name` property.
   * @default "on"
   */
  value?: string;

  /**
   * The variant of the switch.
   * @default "default"
   */
  variant?: 'default' | 'filled';
}
