export type { IconButtonRootProps } from './icon-button-root';
export type { IconButtonContentProps } from './icon-button-content';
export type { IconButtonLoaderProps } from './icon-button-loader';

import { IconButtonRoot } from './icon-button-root';
import { IconButtonContent } from './icon-button-content';
import { IconButtonLoader } from './icon-button-loader';

export const IconButton = Object.assign(IconButtonRoot, {
  Content: IconButtonContent,
  Loader: IconButtonLoader,
});
