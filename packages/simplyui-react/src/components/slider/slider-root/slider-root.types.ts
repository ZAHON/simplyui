import type { ComponentPropsWithRef, ReactNode } from 'react';

type HTMLAttributesToOmit = 'defaultValue' | 'dir';

export interface SliderRootProps extends Omit<ComponentPropsWithRef<'span'>, HTMLAttributesToOmit> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The value of the slider when initially rendered. Use when you do not need to control the state of the slider.
   */
  defaultValue?: number[];

  /**
   * The controlled value of the slider. Must be used in conjunction with `onValueChange` property.
   */
  value?: number[];

  /**
   * Event handler called when the value changes.
   */
  onValueChange?: (value: number[]) => void;

  /**
   * Event handler called when the value changes at the end of an interaction. Useful when you only need to capture a final value e.g. to update a backend service.
   */
  onValueCommit?: (value: number[]) => void;

  /**
   * The all the parts of a slider. It will render an input for each thumb when used within a form to ensure events propagate correctly.
   */
  children: ReactNode;

  /**
   * The color of the slider.
   * @default "primary"
   */
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger';

  /**
   * When `true`, prevents the user from interacting with the slider.
   * @default false
   */
  disabled?: boolean;

  /**
   * The maximum value for the range.
   * @default 100
   */
  max?: number;

  /**
   * The minimum value for the range.
   * @default 0
   */
  min?: number;

  /**
   * The minimum permitted `step`s between multiple thumbs.
   * @default 0
   */
  minStepsBetweenThumbs?: number;

  /**
   * The name of the slider. Submitted with its owning form as part of a name/value pair.
   */
  name?: string;

  /**
   * The border radius value of the slider.
   * @default "full"
   */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

  /**
   * The size of the slider.
   * @default "2"
   */
  size?: '1' | '2' | '3' | '4';

  /**
   * The stepping interval.
   * @default 1
   */
  step?: number;
}
