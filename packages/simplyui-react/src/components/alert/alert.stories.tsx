import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from '.';

const meta: Meta<typeof Alert> = {
  title: 'Feedback/Alert',
  component: Alert,
  args: {
    color: 'danger',
    radius: 'md',
    size: '2',
    variant: 'light',
    children: (
      <Alert.Body>
        <Alert.Title>Alert title</Alert.Title>
        <Alert.Description>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt corporis natus veniam quis cupiditate enim
          architecto mollitia numquam temporibus, consectetur nam laboriosam voluptates nemo facilis? Exercitationem aut
          praesentium quibusdam reiciendis.
        </Alert.Description>
      </Alert.Body>
    ),
  },
  argTypes: {
    asChild: { control: false },
    children: { control: false },
    color: { control: 'select' },
    radius: { control: 'select' },
    size: { control: 'select' },
    variant: { control: 'select' },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '36rem' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {};

export const WithIcon: Story = {
  args: {
    children: <></>,
  },
  render: ({ size, ...others }) => {
    const iconSizes = {
      '1': 16,
      '2': 16,
      '3': 18,
      '4': 20,
    };

    return (
      <Alert size={size} {...others}>
        <Alert.Icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={iconSizes[size as NonNullable<typeof size>]}
            width={iconSizes[size as NonNullable<typeof size>]}
            aria-hidden="true"
            focusable="false"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            className="icon icon-tabler icon-tabler-alert-triangle"
            viewBox="0 0 24 24"
          >
            <path stroke="none" d="M0 0h24v24H0z"></path>
            <path d="M12 9v4M10.363 3.591L2.257 17.125a1.914 1.914 0 001.636 2.871h16.214a1.914 1.914 0 001.636-2.87L13.637 3.59a1.914 1.914 0 00-3.274 0zM12 16h.01"></path>
          </svg>
        </Alert.Icon>
        <Alert.Body>
          <Alert.Title>Alert title</Alert.Title>
          <Alert.Description>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt corporis natus veniam quis cupiditate enim
            architecto mollitia numquam temporibus, consectetur nam laboriosam voluptates nemo facilis? Exercitationem
            aut praesentium quibusdam reiciendis.
          </Alert.Description>
        </Alert.Body>
      </Alert>
    );
  },
};

export const WithVisuallyHiddenDescription: Story = {
  args: {
    children: <></>,
  },
  render: ({ ...props }) => {
    return (
      <Alert aria-describedby={undefined} {...props}>
        <Alert.Body>
          <Alert.Title>You will need admin privileges to install and access this application.</Alert.Title>
          <Alert.Description visuallyHidden>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt corporis natus veniam quis cupiditate enim
            architecto mollitia numquam temporibus, consectetur nam laboriosam voluptates nemo facilis? Exercitationem
            aut praesentium quibusdam reiciendis.
          </Alert.Description>
        </Alert.Body>
      </Alert>
    );
  },
};
