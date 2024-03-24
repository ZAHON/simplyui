'use client';

import type { IconButtonRootProps } from './icon-button-root';
import type { IconButtonContentProps } from './icon-button-content';
import type { IconButtonLoaderProps } from './icon-button-loader';

import { IconButtonRoot } from './icon-button-root';
import { IconButtonContent } from './icon-button-content';
import { IconButtonLoader } from './icon-button-loader';

export type {
  IconButtonRootProps as RootProps,
  IconButtonContentProps as ContentProps,
  IconButtonLoaderProps as LoaderProps,
};

export {
  /** Contains all the parts of a icon button. This component is based on the `button` element. */
  IconButtonRoot as Root,
  /** The content part of the icon button. This component is based on the `span` element. */
  IconButtonContent as Content,
  /** The container for the loader. This component will be render only when `loading` prop is set on `Button` component. This component is based on the `div` element. */
  IconButtonLoader as Loader,
};
