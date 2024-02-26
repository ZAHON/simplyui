import { NODES } from './primitive.constants';
import type { ComponentPropsWithRef, ElementType, ForwardRefExoticComponent } from 'react';

export type Primitives = { [E in (typeof NODES)[number]]: PrimitiveForwardRefComponent<E> };

export type PrimitivePropsWithRef<E extends React.ElementType> = ComponentPropsWithRef<E> & {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;
};

interface PrimitiveForwardRefComponent<E extends ElementType>
  extends ForwardRefExoticComponent<PrimitivePropsWithRef<E>> {}
