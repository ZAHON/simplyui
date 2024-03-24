'use client';

import type { AlertRootProps } from './alert-root';
import type { AlertIconProps } from './alert-icon';
import type { AlertBodyProps } from './alert-body';
import type { AlertTitleProps } from './alert-title';
import type { AlertDescriptionProps } from './alert-description';

import { AlertRoot } from './alert-root';
import { AlertIcon } from './alert-icon';
import { AlertBody } from './alert-body';
import { AlertTitle } from './alert-title';
import { AlertDescription } from './alert-description';

export type {
  AlertRootProps as RootProps,
  AlertIconProps as IconProps,
  AlertBodyProps as BodyProps,
  AlertTitleProps as TitleProps,
  AlertDescriptionProps as DescriptionProps,
};

export {
  /** Contains all the parts of an alert. This component is based on the `div` element. */
  AlertRoot as Root,
  /** Contains an optional icon indicating the type of alert. This component is based on the `div` element. */
  AlertIcon as Icon,
  /** Groups the `Alert.Title` and `Alert.Description` parts. This component is based on the `div` element. */
  AlertBody as Body,
  /** An accessible title of the alert. This component is based on the `p` element. If you want to hide the title, pass `visuallyHidden` to this component. If you want to remove the title entirely, remove this part and pass `aria-labelledby={undefined}` to `Alert.Root` component. */
  AlertTitle as Title,
  /** An accessible description of the alert. This component is based on the `p` element. If you want to hide the description, pass `visuallyHidden` to this component. If you want to remove the description entirely, remove this part and pass `aria-describedby={undefined}` to `Alert.Root` component. */
  AlertDescription as Description,
};
