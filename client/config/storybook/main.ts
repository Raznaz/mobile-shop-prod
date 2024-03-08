import type { StorybookConfig } from '@storybook/react-webpack5';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import { BuildPaths } from '../build/types/config';

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

		config.module?.rules?.push({
			test: /\.s[ac]ss$/i,
			use: [
				true ? 'style-loader' : MiniCssExtractPlugin.loader,
				{
					loader: 'css-loader',
					options: {
						modules: {
							auto: (resPath: string) => Boolean(resPath.includes('.module.')),
							localIdentName: true
								? '[path][name]__[local]--[hash:base64:5]'
								: '[hash: base64:8]',
						},
					},
				},
				'sass-loader',
			],
		});
		config.resolve?.extensions?.push('ts', 'tsx');
		config.resolve?.modules?.push(paths.src);

		return config;
	},
};
export default config;
