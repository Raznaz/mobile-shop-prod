import type { Meta, StoryObj } from '@storybook/react';

import { Button, ThemeButton } from './Button';

const meta: Meta<typeof Button> = {
	title: 'shared/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {
		children: 'Text',
		theme: ThemeButton.PRIMARY,
	},
};

export const Secondary: Story = {
	args: {
		children: 'Some text',
		theme: ThemeButton.SECONDARY,
	},
};

export const Clear: Story = {
	args: {
		children: 'Text',
		theme: ThemeButton.CLEAR,
	},
};
