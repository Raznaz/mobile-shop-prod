import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';

import { Button, ButtonTheme } from './Button';

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
		children: 'Primary',
		theme: ButtonTheme.PRIMARY,
	},
};

export const Secondary: Story = {
	args: {
		children: 'Secondary',
		theme: ButtonTheme.SECONDARY,
	},
};

export const Clear: Story = {
	args: {
		children: 'Clear',
		theme: ButtonTheme.CLEAR,
	},
};
export const Outline: Story = {
	args: {
		children: 'Outline',
		theme: ButtonTheme.OUTLINE,
	},
};
