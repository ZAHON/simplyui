# Avatar

Display user profile image, initials or fallback icon.

## Import

```jsx
import { Avatar } from '@simplyui/react';
```

## Usage

```jsx
import { Avatar } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex gap-x-4">
      <Avatar>
        <Avatar.Image alt="A" src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop" />
        <Avatar.Fallback>A</Avatar.Fallback>
      </Avatar>
      <Avatar>
        <Avatar.Fallback>B</Avatar.Fallback>
      </Avatar>
    </div>
  );
}
```

## Sizes

Use the `size` property to change the size of the avatar. You can set the value to `sm`, `md`, `lg` or `xl`. The default value is `md`.

```jsx
import { Avatar } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex items-center gap-x-4">
      <Avatar size="sm">
        <Avatar.Image alt="A" src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop" />
        <Avatar.Fallback>A</Avatar.Fallback>
      </Avatar>
      <Avatar size="md">
        <Avatar.Image alt="A" src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop" />
        <Avatar.Fallback>A</Avatar.Fallback>
      </Avatar>
      <Avatar size="lg">
        <Avatar.Image alt="A" src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop" />
        <Avatar.Fallback>A</Avatar.Fallback>
      </Avatar>
      <Avatar size="xl">
        <Avatar.Image alt="A" src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop" />
        <Avatar.Fallback>A</Avatar.Fallback>
      </Avatar>
    </div>
  );
}
```

## Radius

Use the `radius` property to change the border radius value of the avatar. You can set the value to `none` ,`sm`, `md`, `lg`, `xl` or `full`. The default value is `md`.

```jsx
import { Avatar } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex gap-x-4">
      <Avatar radius="none">
        <Avatar.Image alt="A" src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop" />
        <Avatar.Fallback>A</Avatar.Fallback>
      </Avatar>
      <Avatar radius="sm">
        <Avatar.Image alt="A" src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop" />
        <Avatar.Fallback>A</Avatar.Fallback>
      </Avatar>
      <Avatar radius="md">
        <Avatar.Image alt="A" src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop" />
        <Avatar.Fallback>A</Avatar.Fallback>
      </Avatar>
      <Avatar radius="lg">
        <Avatar.Image alt="A" src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop" />
        <Avatar.Fallback>A</Avatar.Fallback>
      </Avatar>
      <Avatar radius="xl">
        <Avatar.Image alt="A" src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop" />
        <Avatar.Fallback>A</Avatar.Fallback>
      </Avatar>
      <Avatar radius="full">
        <Avatar.Image alt="A" src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop" />
        <Avatar.Fallback>A</Avatar.Fallback>
      </Avatar>
    </div>
  );
}
```

## Variants

Use the `variant` property to change the variant of the avatar. You can set the value to `filled`, `light`, `outline` or `transparent`. The The default value is `light`.

```jsx
import { Avatar } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex gap-x-4">
      <Avatar variant="filled">
        <Avatar.Fallback>A</Avatar.Fallback>
      </Avatar>
      <Avatar variant="light">
        <Avatar.Fallback>A</Avatar.Fallback>
      </Avatar>
      <Avatar variant="outline">
        <Avatar.Fallback>A</Avatar.Fallback>
      </Avatar>
      <Avatar variant="transparent">
        <Avatar.Fallback>A</Avatar.Fallback>
      </Avatar>
    </div>
  );
}
```

## Colors

Use the `color` property to change the color of the avatar. You can set the value to `default`, `primary`, `success`, `warning` or `danger`. The default value is `primary`.

```jsx
import { Avatar } from '@simplyui/react';

function Demo() {
  return (
    <div className="flex gap-x-4">
      <Avatar color="default">
        <Avatar.Fallback>A</Avatar.Fallback>
      </Avatar>
      <Avatar color="primary">
        <Avatar.Fallback>A</Avatar.Fallback>
      </Avatar>
      <Avatar color="success">
        <Avatar.Fallback>A</Avatar.Fallback>
      </Avatar>
      <Avatar color="warning">
        <Avatar.Fallback>A</Avatar.Fallback>
      </Avatar>
      <Avatar color="danger">
        <Avatar.Fallback>A</Avatar.Fallback>
      </Avatar>
    </div>
  );
}
```

## Group

`Avatar.Group` component combines multiple avatars into a stack. Use the `spacing` property to change the spacing between avatars in group. You can set the value to `sm`, `md`, `lg` or `xl`. The default value is `md`.

```jsx
import { Avatar } from '@simplyui/react';

function Demo() {
  return (
    <Avatar.Group>
      <Avatar radius="full">
        <Avatar.Image alt="A" src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop" />
        <Avatar.Fallback>A</Avatar.Fallback>
      </Avatar>
      <Avatar radius="full">
        <Avatar.Image alt="B" src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=256&h=256&dpr=2&q=80&fit=crop" />
        <Avatar.Fallback>B</Avatar.Fallback>
      </Avatar>
      <Avatar radius="full">
        <Avatar.Image alt="C" src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=256&h=256&dpr=2&fit=crop" />
        <Avatar.Fallback>B</Avatar.Fallback>
      </Avatar>
      <Avatar radius="full">
        <Avatar.Fallback>+5</Avatar.Fallback>
      </Avatar>
    </Avatar.Group>
  );
}
```

## Accessibility

`Avatar.Image` renders `<img />` HTML element. Set `alt` property to describe image.

```jsx
import { Avatar } from '@simplyui/react';

function NotOk() {
  return (
    <Avatar>
      // Not ok, no alt property for image element.
      <Avatar.Image src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop" />
      <Avatar.Fallback>A</Avatar.Fallback>
    </Avatar>
  );
}

function Ok() {
  return (
    <Avatar>
      // Ok, alt property is set on image element.
      <Avatar.Image alt="A" src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop" />
      <Avatar.Fallback>A</Avatar.Fallback>
    </Avatar>
  );
}
```

## API Reference

### Avatar

Contains all the parts of an avatar.
