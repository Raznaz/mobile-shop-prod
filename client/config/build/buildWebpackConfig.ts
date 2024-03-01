import webpack from 'webpack';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugin } from './buildPlugin';
import { buildResolved } from './buildResolve';
import { BuildOptions } from './types/config';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
	const { mode, paths, isDev } = options;

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
			rules: buildLoaders(options),
		},
		resolve: buildResolved(options),
		devtool: isDev ? 'inline-source-map' : false,
		devServer: isDev ? buildDevServer(options) : undefined,
	};
}
