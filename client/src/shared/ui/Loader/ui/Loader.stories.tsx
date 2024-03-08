import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { Loader } from './Loader';

const meta: Meta<typeof Loader> = {
	title: 'shared/Loader',
	component: Loader,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Primary: Story = {
	args: {},
};
