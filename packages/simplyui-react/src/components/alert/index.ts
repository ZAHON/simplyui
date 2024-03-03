export type { AlertRootProps } from './alert-root';
export type { AlertIconProps } from './alert-icon';
export type { AlertBodyProps } from './alert-body';
export type { AlertTitleProps } from './alert-title';
export type { AlertDescriptionProps } from './alert-description';

import { AlertRoot } from './alert-root';
import { AlertIcon } from './alert-icon';
import { AlertBody } from './alert-body';
import { AlertTitle } from './alert-title';
import { AlertDescription } from './alert-description';

export const Alert = Object.assign(AlertRoot, {
  Icon: AlertIcon,
  Body: AlertBody,
  Title: AlertTitle,
  Description: AlertDescription,
});
