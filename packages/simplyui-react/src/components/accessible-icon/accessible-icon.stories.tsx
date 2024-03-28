import type { Meta, StoryObj } from '@storybook/react';
import { AccessibleIcon } from '.';
import { IconX } from '../../icons/icon-x';

const meta: Meta<typeof AccessibleIcon> = {
  title: 'Misc/AccessibleIcon',
  component: AccessibleIcon,
  args: {
    label: 'Close',
    children: <IconX height={24} width={24} />,
  },
  argTypes: {
    children: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof AccessibleIcon>;

export const Default: Story = {};
