'use client';

export type { IconButtonRootProps } from './icon-button-root';
export type { IconButtonContentProps } from './icon-button-content';
export type { IconButtonLoaderProps } from './icon-button-loader';

import { IconButtonRoot } from './icon-button-root';
import { IconButtonContent } from './icon-button-content';
import { IconButtonLoader } from './icon-button-loader';

/** Contains all the parts of a icon button. This component is based on the `button` element. */
export const IconButton = Object.assign(IconButtonRoot, {
  /** The content part of the icon button. This component is based on the `span` element. */
  Content: IconButtonContent,
  /** The container for the loader. This component will be render only when `loading` prop is set on `Button` component. This component is based on the `div` element. */
  Loader: IconButtonLoader,
});
