import path from 'path';
import webpack from 'webpack';
import { buildLoaders } from './buildLoaders';
import { buildPlugin } from './buildPlugin';
import { buildResolved } from './buildResolve';
import { BuildOptions } from './types/config';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
	const { mode, paths } = options;

	return {
		mode,
		entry: paths.entry,
		output: {
			filename: '[name].[contenthash].js',
			path: paths.build,
			clean: true,
		},
		plugins: buildPlugin(options),
		module: {
			rules: buildLoaders(),
		},
		resolve: buildResolved(),
	};
}
