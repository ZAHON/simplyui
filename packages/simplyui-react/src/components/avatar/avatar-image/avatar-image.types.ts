import type { ComponentPropsWithRef } from 'react';

export interface AvatarImageProps extends ComponentPropsWithRef<'img'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * A callback providing information about the loading status of the image. This is useful in case you want to control more precisely what to render as the image is loading.
   */
  onLoadingStatusChange?: (status: 'idle' | 'loading' | 'loaded' | 'error') => void;
}
