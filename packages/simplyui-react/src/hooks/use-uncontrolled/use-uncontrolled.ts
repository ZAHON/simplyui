import type { UseUncontrolledArgs } from './use-uncontrolled.types';
import { useState } from 'react';

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export function useUncontrolled<T>(args: UseUncontrolledArgs<T>): [T, (value: T, ...payload: any[]) => void, boolean] {
  const { value, defaultValue, finalValue, onChange = () => {} } = args;

  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue !== undefined ? defaultValue : finalValue);

  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const handleUncontrolledChange = (val: T, ...payload: any[]) => {
    setUncontrolledValue(val);
    onChange?.(val, ...payload);
  };

  if (value !== undefined) {
    return [value as T, onChange, true];
  }

  return [uncontrolledValue as T, handleUncontrolledChange, false];
}
