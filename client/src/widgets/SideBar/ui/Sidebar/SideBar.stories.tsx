import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SideBar } from './SideBar';
import '../../../../app/styles/index.scss';

const meta: Meta<typeof SideBar> = {
	title: 'widgets/Sidebar',
	component: SideBar,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof SideBar>;

export const Light: Story = {
	args: {},
};

export const Dark: Story = {
	args: {},
};
