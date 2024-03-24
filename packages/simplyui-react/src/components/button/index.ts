'use client';

export type { ButtonRootProps } from './button-root';
export type { ButtonContentProps } from './button-content';
export type { ButtonLoaderProps } from './button-loader';

import { ButtonRoot } from './button-root';
import { ButtonContent } from './button-content';
import { ButtonLoader } from './button-loader';

/** Contains all the parts of a button. This component is based on the `button` element. */
export const Button = Object.assign(ButtonRoot, {
  /** The content part of the button. This component is based on the `span` element. */
  Content: ButtonContent,
  /** The container for the loader. This component will be render only when `loading` prop is set on `Button` component. This component is based on the `div` element. */
  Loader: ButtonLoader,
});
