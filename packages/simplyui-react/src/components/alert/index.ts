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

/** Contains all the parts of an alert. This component is based on the `div` element. */
export const Alert = Object.assign(AlertRoot, {
  /** Contains an optional icon indicating the type of alert. This component is based on the `div` element. */
  Icon: AlertIcon,
  /** Groups the `Alert.Title` and `Alert.Description` parts. This component is based on the `div` element. */
  Body: AlertBody,
  /** An accessible title of the alert. This component is based on the `p` element. If you want to hide the title, pass `visuallyHidden` to this component. If you want to remove the title entirely, remove this part and pass `aria-labelledby={undefined}` to `Alert` component. */
  Title: AlertTitle,
  /** An accessible description of the alert. This component is based on the `p` element. If you want to hide the description, pass `visuallyHidden` to this component. If you want to remove the description entirely, remove this part and pass `aria-describedby={undefined}` to `Alert` component. */
  Description: AlertDescription,
});
