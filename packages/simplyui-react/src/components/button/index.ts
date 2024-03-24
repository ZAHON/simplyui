'use client';

import type { ButtonRootProps } from './button-root';
import type { ButtonContentProps } from './button-content';
import type { ButtonLoaderProps } from './button-loader';

import { ButtonRoot } from './button-root';
import { ButtonContent } from './button-content';
import { ButtonLoader } from './button-loader';

export type { ButtonRootProps as RootProps, ButtonContentProps as ContentProps, ButtonLoaderProps as LoaderProps };

export {
  /** Contains all the parts of a button. This component is based on the `button` element. */
  ButtonRoot as Root,
  /** The content part of the button. This component is based on the `span` element. */
  ButtonContent as Content,
  /** The container for the loader. This component will be render only when `loading` prop is set on `Button` component. This component is based on the `div` element. */
  ButtonLoader as Loader,
};
