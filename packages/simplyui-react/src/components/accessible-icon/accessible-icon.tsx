import type { AccessibleIconProps } from './accessible-icon.types';
import type { ReactElement } from 'react';
import { Children, cloneElement } from 'react';

/** Makes icons accessible by adding a label. */
export function AccessibleIcon(props: AccessibleIconProps) {
  const { label, children } = props;

  const child = Children.only(children);

  return cloneElement(child as ReactElement, {
    'aria-label': label ? label : undefined,
    'aria-hidden': 'true',
    focusable: 'false',
  });
}
