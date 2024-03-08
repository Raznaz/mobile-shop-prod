import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

const config: StorybookConfig = {
	stories: ['../../src/**/*.mdx', '../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-onboarding',
		'@storybook/addon-interactions',
	],
	framework: {
		name: '@storybook/react-webpack5',
		options: {
			builder: {
				useSWC: true,
			},
		},
	},
	docs: {
		autodocs: 'tag',
	},
	webpackFinal: async (config) => {
		const paths: BuildPaths = {
			build: '',
			html: '',
			entry: '',
			src: path.resolve(__dirname, '..', '..', 'src'),
		};

		config.module?.rules?.push(buildCssLoaders(true));
		config.resolve?.extensions?.push('ts', 'tsx');
		config.resolve?.modules?.push(paths.src);

		config.module.rules = config.module?.rules?.map((rule: any) => {
			if (/svg/.test(rule.test)) {
				return { ...rule, exclude: /\.svg/i };
			}
			return rule;
		});

		config.module?.rules?.push(buildSvgLoader());
		return config;
	},
};
export default config;
