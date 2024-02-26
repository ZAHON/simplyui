import type { Primitives, PrimitivePropsWithRef } from './primitive.types';
import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { NODES } from './primitive.constants';

export const Primitive = NODES.reduce((primitive, node) => {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const Node = forwardRef((props: PrimitivePropsWithRef<typeof node>, ref: any) => {
    const { asChild, ...others } = props;

    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    const Component: any = asChild ? Slot : node;

    return <Component {...others} ref={ref} />;
  });

  Node.displayName = `Primitive.${node}`;

  return { ...primitive, [node]: Node };
}, {} as Primitives);
