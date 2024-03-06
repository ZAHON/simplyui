export type { AvatarRootProps } from './avatar-root';
export type { AvatarImageProps } from './avatar-image';
export type { AvatarFallbackProps } from './avatar-fallback';
export type { AvatarGroupProps } from './avatar-group';

import { AvatarRoot } from './avatar-root';
import { AvatarImage } from './avatar-image';
import { AvatarFallback } from './avatar-fallback';
import { AvatarGroup } from './avatar-group';

/** Contains all the parts of an avatar. This component is based on the `span` element. */
export const Avatar = Object.assign(AvatarRoot, {
  /** The image to render. This component is based on the `img` element. By default it will only render when it has loaded. You can use the `onLoadingStatusChange` handler if you need more control. */
  Image: AvatarImage,
  /** An element that renders when the image hasn't loaded. This means whilst it's loading, or if there was an error. This component is based on the `span` element. If you notice a flash during loading, you can provide a `delayMs` prop to delay its rendering so it only renders for those with slower connections. For more control, use the `onLoadingStatusChange` handler on `Avatar.Image`. */
  Fallback: AvatarFallback,
  /** Combines multiple avatars into a stack. This component is based on the `div` element. You can use the `spacing` property to change the spacing between avatars in group. */
  Group: AvatarGroup,
});
