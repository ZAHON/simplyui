export type { AvatarRootProps } from './avatar-root';
export type { AvatarImageProps } from './avatar-image';
export type { AvatarFallbackProps } from './avatar-fallback';
export type { AvatarGroupProps } from './avatar-group';

import { AvatarRoot } from './avatar-root';
import { AvatarImage } from './avatar-image';
import { AvatarFallback } from './avatar-fallback';
import { AvatarGroup } from './avatar-group';

export const Avatar = Object.assign(AvatarRoot, {
  Image: AvatarImage,
  Fallback: AvatarFallback,
  Group: AvatarGroup,
});
