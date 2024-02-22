export type { ButtonRootProps } from './button-root';
export type { ButtonContentProps } from './button-content';
export type { ButtonLoaderProps } from './button-loader';

import { ButtonRoot } from './button-root';
import { ButtonContent } from './button-content';
import { ButtonLoader } from './button-loader';

export const Button = Object.assign(ButtonRoot, {
  Content: ButtonContent,
  Loader: ButtonLoader,
});
