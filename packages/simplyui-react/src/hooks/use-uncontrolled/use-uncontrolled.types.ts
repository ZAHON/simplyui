export interface UseUncontrolledArgs<T> {
  /**
   * Value for controlled state.
   */
  value?: T;

  /**
   * Initial value for uncontrolled state.
   */
  defaultValue?: T;

  /**
   * Final value for uncontrolled state when value and defaultValue are not provided.
   */
  finalValue?: T;

  /**
   * Controlled state onChange handler.
   */
  onChange?: (value: T, ...payload: any[]) => void; // eslint-disable-line  @typescript-eslint/no-explicit-any
}
