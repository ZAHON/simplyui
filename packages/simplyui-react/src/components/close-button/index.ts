export type { CloseButtonRootProps } from './close-button-root';
export type { CloseButtonIconProps } from './close-button-icon';

import { CloseButtonRoot } from './close-button-root';
import { CloseButtonIcon } from './close-button-icon';

export const CloseButton = Object.assign(CloseButtonRoot, {
  Icon: CloseButtonIcon,
});
